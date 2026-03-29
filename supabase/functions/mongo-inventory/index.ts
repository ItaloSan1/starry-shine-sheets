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

async function generateSignedUrl(bucket: string, objectPath: string, serviceAccount: any): Promise<string> {
  if (!objectPath) return '';
  if (objectPath.startsWith('http')) return objectPath;

  const now = new Date();
  const datestamp = now.toISOString().replace(/[-:]/g, '').substring(0, 8);
  const timestamp = datestamp + 'T' + now.toISOString().replace(/[-:]/g, '').substring(9, 15) + 'Z';
  const expiration = 3600;

  const credentialScope = `${datestamp}/auto/storage/goog4_request`;
  const credential = `${serviceAccount.client_email}/${credentialScope}`;
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

  const pemContents = serviceAccount.private_key.replace(/-----BEGIN PRIVATE KEY-----/, '').replace(/-----END PRIVATE KEY-----/, '').replace(/\n/g, '');
  const binaryKey = Uint8Array.from(atob(pemContents), (c: string) => c.charCodeAt(0));

  const key = await crypto.subtle.importKey('pkcs8', binaryKey, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['sign']);
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

async function signImages(imagePaths: string[], bucket: string, serviceAccount: any): Promise<string[]> {
  const signed: string[] = [];
  for (const p of imagePaths) {
    if (typeof p === 'string' && p) {
      try {
        signed.push(await generateSignedUrl(bucket, p, serviceAccount));
      } catch (e) {
        console.error('Failed to sign image:', p, e);
      }
    }
  }
  return signed;
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

    const url = new URL(req.url);
    const action = url.searchParams.get('action') || 'vehicles';

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
        .sort({ 'vehicleInfo.Year': -1, _id: -1 })
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .toArray();

      // Diagnostic: log first doc structure
      if (docs.length > 0) {
        const d = docs[0];
        const vi = d.vehicleInfo;
        console.log('DIAG first doc _id type:', typeof d._id, '_id:', String(d._id));
        console.log('DIAG vehicleInfo type:', typeof vi, 'isMap:', typeof vi?.get === 'function');
        if (typeof vi?.get === 'function') {
          console.log('DIAG Map keys:', [...vi.keys()]);
          console.log('DIAG Year from Map:', vi.get('Year'), 'Make:', vi.get('Make'));
        } else if (vi) {
          console.log('DIAG vehicleInfo keys:', Object.keys(vi));
          console.log('DIAG Year:', vi.Year, 'Make:', vi.Make);
        }
      }

      // Sign images for each vehicle
      const vehicles = [];
      for (const doc of docs) {
        const preImages = doc.preDismantling?.images || [];
        const postImages = doc.postDismantling?.images || [];
        const firstImage = preImages[0] || postImages[0];
        const thumbUrl = firstImage ? await generateSignedUrl(bucket, firstImage, serviceAccount) : undefined;
        vehicles.push(mapVehicleDoc(doc, thumbUrl ? [thumbUrl] : []));
      }

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

      console.log('DIAG vehicle lookup id:', id);

      let doc: any = null;
      // Try ObjectId first
      try {
        doc = await col.findOne({ _id: new ObjectId(id) });
        console.log('DIAG ObjectId lookup result:', doc ? 'found' : 'null');
      } catch (e) {
        console.log('DIAG ObjectId parse failed:', e.message);
      }
      // Try as plain string _id
      if (!doc) {
        doc = await col.findOne({ _id: id as any });
        console.log('DIAG string _id lookup result:', doc ? 'found' : 'null');
      }
      // Try stockNumber
      if (!doc) {
        doc = await col.findOne({ stockNumber: id });
        console.log('DIAG stockNumber lookup result:', doc ? 'found' : 'null');
      }

      if (!doc) {
        await client.close();
        return new Response(JSON.stringify({ error: 'Vehicle not found' }), {
          status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Log the found doc's vehicleInfo structure
      const vi = doc.vehicleInfo;
      console.log('DIAG detail vehicleInfo type:', typeof vi, 'isMap:', typeof vi?.get === 'function');
      if (typeof vi?.get === 'function') {
        console.log('DIAG detail Map keys:', [...vi.keys()]);
      } else if (vi) {
        console.log('DIAG detail keys:', Object.keys(vi));
      }

      // Sign ALL images
      const preImages = doc.preDismantling?.images || [];
      const postImages = doc.postDismantling?.images || [];
      const allSignedImages = [
        ...await signImages(preImages, bucket, serviceAccount),
        ...await signImages(postImages, bucket, serviceAccount),
      ];

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
      }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
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
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
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
