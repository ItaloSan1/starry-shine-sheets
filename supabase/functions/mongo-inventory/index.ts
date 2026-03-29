import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { MongoClient, ObjectId } from "npm:mongodb@6.12.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

// Helper to access fields from either plain objects or BSON Maps
function getField(obj: any, ...keys: string[]): any {
  if (!obj) return undefined;
  for (const k of keys) {
    const v = typeof obj.get === 'function' ? obj.get(k) : obj[k];
    if (v !== undefined && v !== null && v !== '') return v;
  }
  return undefined;
}

// GCS Signed URL generation
async function sha256Hex(message: string): Promise<string> {
  const data = new TextEncoder().encode(message);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, '0')).join('');
}

// Cache the imported key to avoid re-importing for every image
let cachedKey: CryptoKey | null = null;
let cachedEmail: string = '';

async function getSigningKey(serviceAccount: any): Promise<{ key: CryptoKey; email: string }> {
  if (cachedKey && cachedEmail === serviceAccount.client_email) {
    return { key: cachedKey, email: cachedEmail };
  }
  const pemContents = serviceAccount.private_key.replace(/-----BEGIN PRIVATE KEY-----/, '').replace(/-----END PRIVATE KEY-----/, '').replace(/\n/g, '');
  const binaryKey = Uint8Array.from(atob(pemContents), (c: string) => c.charCodeAt(0));
  cachedKey = await crypto.subtle.importKey('pkcs8', binaryKey, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['sign']);
  cachedEmail = serviceAccount.client_email;
  return { key: cachedKey, email: cachedEmail };
}

async function generateSignedUrl(bucket: string, objectPath: string, serviceAccount: any): Promise<string> {
  if (!objectPath) return '';
  if (objectPath.startsWith('http')) return objectPath;

  const { key, email } = await getSigningKey(serviceAccount);

  const now = new Date();
  const datestamp = now.toISOString().replace(/[-:]/g, '').substring(0, 8);
  const timestamp = datestamp + 'T' + now.toISOString().replace(/[-:]/g, '').substring(9, 15) + 'Z';
  const expiration = 3600;

  const credentialScope = `${datestamp}/auto/storage/goog4_request`;
  const credential = `${email}/${credentialScope}`;
  const host = 'storage.googleapis.com';
  const canonicalUri = `/${bucket}/${objectPath}`;

  const params = new Map<string, string>([
    ['X-Goog-Algorithm', 'GOOG4-RSA-SHA256'],
    ['X-Goog-Credential', credential],
    ['X-Goog-Date', timestamp],
    ['X-Goog-Expires', String(expiration)],
    ['X-Goog-SignedHeaders', 'host'],
  ]);

  const sortedParams = [...params.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  const canonicalQueryString = sortedParams.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');

  const canonicalRequest = ['GET', canonicalUri, canonicalQueryString, `host:${host}`, '', 'host', 'UNSIGNED-PAYLOAD'].join('\n');
  const stringToSign = ['GOOG4-RSA-SHA256', timestamp, credentialScope, await sha256Hex(canonicalRequest)].join('\n');

  const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, new TextEncoder().encode(stringToSign));
  const signatureHex = [...new Uint8Array(signature)].map(b => b.toString(16).padStart(2, '0')).join('');

  return `https://${host}${canonicalUri}?${canonicalQueryString}&X-Goog-Signature=${signatureHex}`;
}

// NHTSA VIN Decode
async function decodeVIN(vin: string): Promise<any> {
  if (!vin || vin.length < 11) return {};
  try {
    const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${encodeURIComponent(vin)}?format=json`);
    if (!res.ok) return {};
    const data = await res.json();
    const r = data.Results?.[0] || {};
    return {
      engineType: [r.EngineModel, r.DisplacementL ? `${r.DisplacementL}L` : '', r.EngineCylinders ? `${r.EngineCylinders}-Cylinder` : ''].filter(Boolean).join(' ') || undefined,
      engineSize: r.DisplacementL ? `${r.DisplacementL}L` : undefined,
      engineCylinders: r.EngineCylinders || undefined,
      drivetrain: r.DriveType || undefined,
      bodyStyle: r.BodyClass || undefined,
      fuelType: r.FuelTypePrimary || undefined,
      transmissionType: r.TransmissionStyle || undefined,
      countryOfOrigin: r.PlantCountry || undefined,
      vehicleType: r.VehicleType || undefined,
    };
  } catch {
    return {};
  }
}

function getMongoClient(): MongoClient {
  let connStr = Deno.env.get('MONGODB_CONNECTION_STRING');
  if (!connStr) throw new Error('MONGODB_CONNECTION_STRING not set');

  const match = connStr.match(/^(mongodb\+srv:\/\/[^:]+:)([^@]+)(@.+)$/);
  if (match) {
    const encodedPassword = encodeURIComponent(decodeURIComponent(match[2]));
    connStr = match[1] + encodedPassword + match[3];
  }

  return new MongoClient(connStr, {
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
  });
}

async function signImagesParallel(imagePaths: string[], bucket: string, serviceAccount: any): Promise<string[]> {
  const results = await Promise.all(
    imagePaths
      .filter(p => typeof p === 'string' && p)
      .map(async (p) => {
        try {
          return await generateSignedUrl(bucket, p, serviceAccount);
        } catch (e) {
          console.error('Failed to sign image:', p, e);
          return '';
        }
      })
  );
  return results.filter(Boolean);
}

function mapVehicleDoc(doc: any, signedImages: string[]): any {
  const info = doc.vehicleInfo || {};

  const year = Number(getField(info, 'Year', 'year', 'ModelYear') ?? doc.year ?? 0) || 0;
  const make = String(getField(info, 'Make', 'make') ?? doc.make ?? '').toUpperCase();
  const model = String(getField(info, 'Model', 'model') ?? doc.model ?? '');
  const trim = String(getField(info, 'Trim', 'trim') ?? '');
  const bodyStyle = String(getField(info, 'BodyClass', 'bodyClass', 'bodyStyle') ?? '');
  const vehicleType = String(getField(info, 'VehicleType', 'vehicleType') ?? '');

  return {
    id: doc._id?.toString() || '',
    stockNumber: doc.stockNumber || '',
    year,
    make,
    model,
    trim,
    bodyStyle,
    vehicleType,
    color: '',
    mileage: undefined,
    dateArrived: (() => { try { const d = new Date(doc.createdAt); return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString(); } catch { return new Date().toISOString(); } })(),
    status: 'Available',
    partsAvailable: [],
    images: signedImages,
    imageUrl: signedImages[0] || undefined,
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  let client: MongoClient | null = null;

  try {
    const saKeyRaw = Deno.env.get('FIREBASE_SERVICE_ACCOUNT_KEY');
    if (!saKeyRaw) throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY not configured');
    const serviceAccount = JSON.parse(saKeyRaw);
    const bucket = `${serviceAccount.project_id}.appspot.com`;

    // Pre-warm the signing key so all parallel signs reuse it
    await getSigningKey(serviceAccount);

    const url = new URL(req.url);
    const action = url.searchParams.get('action') || 'vehicles';
    const quality = url.searchParams.get('quality') || 'thumb'; // thumb | standard | hd

    if (action === 'vehicles') {
      const page = parseInt(url.searchParams.get('page') || '1');
      const pageSize = Math.min(parseInt(url.searchParams.get('pageSize') || '50'), 200);
      const makeFilter = url.searchParams.get('make') || '';
      const modelFilter = url.searchParams.get('model') || '';
      const yearFilter = url.searchParams.get('year') || '';
      const search = url.searchParams.get('search') || '';

      client = getMongoClient();
      await client.connect();
      const col = client.db('yard-app').collection('vehicles-inventory');

      const filter: any = {};
      if (makeFilter) filter['vehicleInfo.Make'] = { $regex: new RegExp(`^${makeFilter}$`, 'i') };
      if (modelFilter) filter['vehicleInfo.Model'] = { $regex: new RegExp(`^${modelFilter}$`, 'i') };
      if (yearFilter) {
        const yearNum = parseInt(yearFilter);
        filter.$or = [
          ...(filter.$or || []),
          { 'vehicleInfo.Year': { $in: [yearFilter, yearNum] } },
          { 'vehicleInfo.ModelYear': { $in: [yearFilter, yearNum] } },
        ];
      }
      if (search) {
        const q = search.trim();
        filter.$or = [
          { stockNumber: { $regex: new RegExp(q, 'i') } },
          { 'vehicleInfo.Make': { $regex: new RegExp(q, 'i') } },
          { 'vehicleInfo.Model': { $regex: new RegExp(q, 'i') } },
        ];
      }

      const total = await col.countDocuments(filter);
      const docs = await col.find(filter)
        .sort({ 'vehicleInfo.ModelYear': -1, _id: -1 })
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .toArray();

      // Sign images in PARALLEL — the key performance improvement
      const vehicles = await Promise.all(docs.map(async (doc) => {
        const preImages = doc.preDismantling?.images || [];
        const postImages = doc.postDismantling?.images || [];
        const firstImage = preImages[0] || postImages[0];
        
        if (quality === 'thumb') {
          // Only sign the first image for list views
          const thumbUrl = firstImage ? await generateSignedUrl(bucket, firstImage, serviceAccount) : undefined;
          return mapVehicleDoc(doc, thumbUrl ? [thumbUrl] : []);
        } else {
          // Sign all images for detail/hd quality
          const allImages = [...preImages, ...postImages];
          const signed = await signImagesParallel(allImages, bucket, serviceAccount);
          return mapVehicleDoc(doc, signed);
        }
      }));

      await client.close();

      return new Response(JSON.stringify({
        vehicles,
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
      }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    if (action === 'vehicle') {
      const id = url.searchParams.get('id');
      if (!id) {
        return new Response(JSON.stringify({ error: 'Missing id parameter' }), {
          status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      client = getMongoClient();
      await client.connect();
      const col = client.db('yard-app').collection('vehicles-inventory');

      let doc: any = null;
      // Try ObjectId first
      try {
        doc = await col.findOne({ _id: new ObjectId(id) });
      } catch (_e) {
        // ObjectId parse failed, try alternatives
      }
      // Try as plain string _id
      if (!doc) {
        doc = await col.findOne({ _id: id as any });
      }
      // Try stockNumber
      if (!doc) {
        doc = await col.findOne({ stockNumber: id });
      }

      if (!doc) {
        await client.close();
        return new Response(JSON.stringify({ error: 'Vehicle not found' }), {
          status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Sign ALL images in parallel
      const preImages = doc.preDismantling?.images || [];
      const postImages = doc.postDismantling?.images || [];
      const allSignedImages = await signImagesParallel([...preImages, ...postImages], bucket, serviceAccount);

      const vehicle = mapVehicleDoc(doc, allSignedImages);

      // VIN decode
      const vin = doc.vinNumber || '';
      if (vin) {
        const vinDecoded = await decodeVIN(vin);
        Object.assign(vehicle, vinDecoded);
      }

      await client.close();

      return new Response(JSON.stringify({ vehicle }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'makes') {
      client = getMongoClient();
      await client.connect();
      const col = client.db('yard-app').collection('vehicles-inventory');

      const makes = await col.aggregate([
        { $group: { _id: { $toUpper: '$vehicleInfo.Make' }, count: { $sum: 1 } } },
        { $match: { _id: { $ne: null } } },
        { $sort: { count: -1 } },
      ]).toArray();

      await client.close();

      return new Response(JSON.stringify({
        makes: makes.map((m: any) => ({ name: m._id, count: m.count })),
      }), { headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' } });
    }

    if (action === 'models') {
      const make = url.searchParams.get('make');
      client = getMongoClient();
      await client.connect();
      const col = client.db('yard-app').collection('vehicles-inventory');

      const filter: any = {};
      if (make) filter['vehicleInfo.Make'] = { $regex: new RegExp(`^${make}$`, 'i') };

      const models = await col.distinct('vehicleInfo.Model', filter);
      await client.close();

      return new Response(JSON.stringify({ models: models.filter(Boolean).sort() }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' },
      });
    }

    if (action === 'years') {
      client = getMongoClient();
      await client.connect();
      const col = client.db('yard-app').collection('vehicles-inventory');

      const yearDocs = await col.aggregate([
        { $project: { y: { $ifNull: ['$vehicleInfo.Year', '$vehicleInfo.ModelYear'] } } },
        { $group: { _id: '$y' } },
        { $match: { _id: { $ne: null } } },
        { $sort: { _id: -1 } },
      ]).toArray();

      await client.close();

      const years = yearDocs.map((d: any) => Number(d._id)).filter(y => y > 0).sort((a, b) => b - a);

      return new Response(JSON.stringify({ years }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' },
      });
    }

    return new Response(JSON.stringify({ error: 'Unknown action' }), {
      status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('mongo-inventory error:', error);
    if (client) try { await client.close(); } catch {}
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});