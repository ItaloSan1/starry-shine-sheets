import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { MongoClient, ObjectId } from "npm:mongodb@6.12.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

// GCS Signed URL generation (reused from firebase-inventory)
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

// Server-side cache
let vehiclesCache: { data: any[]; timestamp: number } | null = null;
const CACHE_TTL = 5 * 60 * 1000;

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
  return {
    id: doc._id?.toString() || '',
    stockNumber: doc.stockNumber || '',
    year: parseInt(info.Year) || 0,
    make: (info.Make || '').toUpperCase(),
    model: info.Model || '',
    trim: info.Trim || '',
    bodyStyle: info.BodyClass || '',
    vehicleType: info.VehicleType || '',
    color: '',
    mileage: undefined,
    dateArrived: doc.createdAt ? new Date(doc.createdAt).toISOString() : new Date().toISOString(),
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
    // Get Firebase service account for GCS signing
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

      // Check cache for unfiltered full list
      const isUnfiltered = !makeFilter && !modelFilter && !yearFilter && !search;
      if (isUnfiltered && vehiclesCache && Date.now() - vehiclesCache.timestamp < CACHE_TTL) {
        const cached = vehiclesCache.data;
        const start = (page - 1) * pageSize;
        return new Response(JSON.stringify({
          vehicles: cached.slice(start, start + pageSize),
          total: cached.length,
          page,
          pageSize,
          totalPages: Math.ceil(cached.length / pageSize),
        }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }

      client = getMongoClient();
      await client.connect();
      const col = client.db('yard-app').collection('vehicles-inventory');

      // Build filter
      const filter: any = {};
      if (makeFilter) filter['vehicleInfo.Make'] = { $regex: new RegExp(`^${makeFilter}$`, 'i') };
      if (modelFilter) filter['vehicleInfo.Model'] = { $regex: new RegExp(`^${modelFilter}$`, 'i') };
      if (yearFilter) filter['vehicleInfo.Year'] = yearFilter;
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

      // Sign images for each vehicle - use first pre-dismantled image as thumbnail
      const vehicles = [];
      for (const doc of docs) {
        const preImages = doc.preDismantling?.images || [];
        const postImages = doc.postDismantling?.images || [];
        // For list view: sign only the first image as thumbnail
        const firstImage = preImages[0] || postImages[0];
        const thumbUrl = firstImage ? await generateSignedUrl(bucket, firstImage, serviceAccount) : undefined;
        vehicles.push(mapVehicleDoc(doc, thumbUrl ? [thumbUrl] : []));
      }

      // Cache full unfiltered results
      if (isUnfiltered && page === 1 && pageSize >= 50) {
        // Fetch all for cache
        const allDocs = await col.find({}).sort({ 'vehicleInfo.Year': -1, _id: -1 }).toArray();
        const allVehicles = [];
        for (const doc of allDocs) {
          const preImages = doc.preDismantling?.images || [];
          const postImages = doc.postDismantling?.images || [];
          const firstImage = preImages[0] || postImages[0];
          const thumbUrl = firstImage ? await generateSignedUrl(bucket, firstImage, serviceAccount) : undefined;
          allVehicles.push(mapVehicleDoc(doc, thumbUrl ? [thumbUrl] : []));
        }
        vehiclesCache = { data: allVehicles, timestamp: Date.now() };
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

      let doc: any = null;
      // Try ObjectId first, then stockNumber
      try {
        doc = await col.findOne({ _id: new ObjectId(id) });
      } catch {
        // Not a valid ObjectId
      }
      if (!doc) {
        doc = await col.findOne({ stockNumber: id });
      }

      if (!doc) {
        await client.close();
        return new Response(JSON.stringify({ error: 'Vehicle not found' }), {
          status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Sign ALL images: pre-dismantled first, then post-dismantled
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
