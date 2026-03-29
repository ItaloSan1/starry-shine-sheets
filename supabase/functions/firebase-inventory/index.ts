import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

// JWT creation for Firebase auth
async function createJWT(serviceAccount: any): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: serviceAccount.client_email,
    sub: serviceAccount.client_email,
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
    scope: "https://www.googleapis.com/auth/datastore https://www.googleapis.com/auth/cloud-platform",
  };

  const encode = (obj: any) => btoa(JSON.stringify(obj)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const headerB64 = encode(header);
  const payloadB64 = encode(payload);
  const signingInput = `${headerB64}.${payloadB64}`;

  const pemContents = serviceAccount.private_key
    .replace(/-----BEGIN PRIVATE KEY-----/, '')
    .replace(/-----END PRIVATE KEY-----/, '')
    .replace(/\n/g, '');
  const binaryKey = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));

  const key = await crypto.subtle.importKey(
    'pkcs8',
    binaryKey,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    key,
    new TextEncoder().encode(signingInput)
  );

  const sigB64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  return `${signingInput}.${sigB64}`;
}

let cachedToken: { token: string; expires: number } | null = null;

async function getAccessToken(serviceAccount: any): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expires) {
    return cachedToken.token;
  }
  const jwt = await createJWT(serviceAccount);
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Failed to get access token: ${err}`);
  }
  const data = await res.json();
  cachedToken = {
    token: data.access_token,
    expires: Date.now() + (data.expires_in - 60) * 1000,
  };
  return data.access_token;
}

const FIRESTORE_BASE = 'https://firestore.googleapis.com/v1';

// CollectionGroup query to get all tasks across all work-orders
async function queryAllTasks(projectId: string, token: string, pageToken?: string): Promise<{ docs: any[]; nextPageToken?: string }> {
  const url = `${FIRESTORE_BASE}/projects/${projectId}/databases/(default)/documents:runQuery`;
  const body: any = {
    structuredQuery: {
      from: [{ collectionId: 'tasks', allDescendants: true }],
      limit: 500,
    },
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Tasks query failed: ${err}`);
  }

  const results = await res.json();
  return {
    docs: results.filter((r: any) => r.document).map((r: any) => r.document),
  };
}

// Parse Firestore value types
function parseFirestoreValue(val: any): any {
  if (!val) return null;
  if (val.stringValue !== undefined) return val.stringValue;
  if (val.integerValue !== undefined) return parseInt(val.integerValue);
  if (val.doubleValue !== undefined) return val.doubleValue;
  if (val.booleanValue !== undefined) return val.booleanValue;
  if (val.timestampValue !== undefined) return val.timestampValue;
  if (val.arrayValue) return (val.arrayValue.values || []).map(parseFirestoreValue);
  if (val.mapValue) {
    const obj: any = {};
    for (const [k, v] of Object.entries(val.mapValue.fields || {})) {
      obj[k] = parseFirestoreValue(v);
    }
    return obj;
  }
  if (val.nullValue !== undefined) return null;
  return null;
}

function parseFirestoreDoc(doc: any): any {
  const fields = doc.fields || {};
  const parsed: any = {};
  for (const [key, val] of Object.entries(fields)) {
    parsed[key] = parseFirestoreValue(val as any);
  }
  const nameParts = (doc.name || '').split('/');
  parsed._docId = nameParts[nameParts.length - 1];
  return parsed;
}

// Parse "ES1204: 2010 MITSUBISHI Lancer" format
function parseDisplayName(displayName: string): { stockNumber: string; year: number; make: string; model: string; trim: string } {
  const result = { stockNumber: '', year: 0, make: '', model: '', trim: '' };
  if (!displayName) return result;

  // Format: "ES1204: 2010 MITSUBISHI Lancer"
  const colonIdx = displayName.indexOf(':');
  if (colonIdx > 0) {
    result.stockNumber = displayName.substring(0, colonIdx).trim();
    const rest = displayName.substring(colonIdx + 1).trim();
    const parts = rest.split(/\s+/);
    const yearMatch = parts[0]?.match(/^(19|20)\d{2}$/);
    if (yearMatch) {
      result.year = parseInt(parts[0]);
      result.make = parts[1] || '';
      result.model = parts[2] || '';
      result.trim = parts.slice(3).join(' ') || '';
    } else {
      result.make = rest;
    }
  } else {
    result.stockNumber = displayName;
  }
  return result;
}

// Generate V4 signed URL for Google Cloud Storage
async function generateSignedUrl(bucket: string, objectPath: string, serviceAccount: any): Promise<string> {
  if (!objectPath) return '';
  if (objectPath.startsWith('http')) return objectPath;

  const now = new Date();
  const datestamp = now.toISOString().replace(/[-:]/g, '').substring(0, 8);
  const timestamp = datestamp + 'T' + now.toISOString().replace(/[-:]/g, '').substring(9, 15) + 'Z';
  const expiration = 3600; // 1 hour

  const credentialScope = `${datestamp}/auto/storage/goog4_request`;
  const credential = `${serviceAccount.client_email}/${credentialScope}`;

  const host = `storage.googleapis.com`;
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

  const canonicalRequest = [
    'GET',
    canonicalUri,
    canonicalQueryString,
    `host:${host}`,
    '',
    'host',
    'UNSIGNED-PAYLOAD',
  ].join('\n');

  const stringToSign = [
    'GOOG4-RSA-SHA256',
    timestamp,
    credentialScope,
    await sha256Hex(canonicalRequest),
  ].join('\n');

  // Sign with service account private key
  const pemContents = serviceAccount.private_key
    .replace(/-----BEGIN PRIVATE KEY-----/, '')
    .replace(/-----END PRIVATE KEY-----/, '')
    .replace(/\n/g, '');
  const binaryKey = Uint8Array.from(atob(pemContents), (c: string) => c.charCodeAt(0));

  const key = await crypto.subtle.importKey(
    'pkcs8',
    binaryKey,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    key,
    new TextEncoder().encode(stringToSign)
  );

  const signatureHex = [...new Uint8Array(signature)].map(b => b.toString(16).padStart(2, '0')).join('');

  return `https://${host}${canonicalUri}?${canonicalQueryString}&X-Goog-Signature=${signatureHex}`;
}

async function sha256Hex(message: string): Promise<string> {
  const data = new TextEncoder().encode(message);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, '0')).join('');
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

// Vehicles cache
let vehiclesCache: { data: any[]; timestamp: number } | null = null;
const CACHE_TTL = 5 * 60 * 1000;

async function extractVehiclesFromTasks(projectId: string, token: string, serviceAccount: any): Promise<any[]> {
  if (vehiclesCache && Date.now() - vehiclesCache.timestamp < CACHE_TTL) {
    return vehiclesCache.data;
  }

  const bucket = `${projectId}.appspot.com`;
  const { docs } = await queryAllTasks(projectId, token);
  console.log(`Found ${docs.length} task documents`);

  const vehicleMap = new Map<string, any>();

  for (const doc of docs) {
    const task = parseFirestoreDoc(doc);
    const inv = task.inventory;
    if (!inv || !inv.stockNumber) continue;

    const stockNum = inv.stockNumber;
    if (vehicleMap.has(stockNum)) continue;

    const parsed = parseDisplayName(inv.inventoryDisplayName || '');

    const images: string[] = [];
    if (inv.postDismantledImages && Array.isArray(inv.postDismantledImages)) {
      for (const imgPath of inv.postDismantledImages) {
        if (typeof imgPath === 'string' && imgPath) {
          images.push(await generateSignedUrl(bucket, imgPath, serviceAccount));
        }
      }
    }
    if (task.postDisassembly?.partDisassembledImages && Array.isArray(task.postDisassembly.partDisassembledImages)) {
      for (const imgPath of task.postDisassembly.partDisassembledImages) {
        if (typeof imgPath === 'string' && imgPath) {
          images.push(await generateSignedUrl(bucket, imgPath, serviceAccount));
        }
      }
    }

    vehicleMap.set(stockNum, {
      id: inv._id || stockNum,
      stockNumber: stockNum,
      year: parsed.year,
      make: parsed.make,
      model: parsed.model,
      trim: parsed.trim,
      color: '',
      mileage: undefined,
      dateArrived: task.createdAt?.timestamp ? new Date(task.createdAt.timestamp).toISOString() : new Date().toISOString(),
      status: 'Available',
      partsAvailable: [],
      images,
      imageUrl: images[0] || undefined,
      locationGroup: inv.inventoryLocationGroup || '',
    });
  }

  const vehicles = Array.from(vehicleMap.values());
  vehicles.sort((a, b) => (b.year || 0) - (a.year || 0));

  vehiclesCache = { data: vehicles, timestamp: Date.now() };
  console.log(`Extracted ${vehicles.length} unique vehicles`);
  return vehicles;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const saKeyRaw = Deno.env.get('FIREBASE_SERVICE_ACCOUNT_KEY');
    if (!saKeyRaw) throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY not configured');
    const serviceAccount = JSON.parse(saKeyRaw);
    const projectId = serviceAccount.project_id;
    const token = await getAccessToken(serviceAccount);

    const url = new URL(req.url);
    const action = url.searchParams.get('action') || 'vehicles';

    if (action === 'vehicles') {
      const vehicles = await extractVehiclesFromTasks(projectId, token, serviceAccount);
      return new Response(JSON.stringify({ vehicles, total: vehicles.length }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'vehicle') {
      const id = url.searchParams.get('id');
      if (!id) {
        return new Response(JSON.stringify({ error: 'Missing id parameter' }), {
          status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const vehicles = await extractVehiclesFromTasks(projectId, token);
      const vehicle = vehicles.find(v => v.id === id || v.stockNumber === id);
      if (!vehicle) {
        return new Response(JSON.stringify({ error: 'Vehicle not found' }), {
          status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // For detail view, also collect ALL images from ALL tasks referencing this stock number
      const { docs } = await queryAllTasks(projectId, token);
      const allImages = new Set<string>(vehicle.images || []);
      let vinNumber = '';

      for (const doc of docs) {
        const task = parseFirestoreDoc(doc);
        const inv = task.inventory;
        if (!inv || inv.stockNumber !== vehicle.stockNumber) continue;

        if (inv.vinNumber) vinNumber = inv.vinNumber;

        if (inv.postDismantledImages && Array.isArray(inv.postDismantledImages)) {
          for (const p of inv.postDismantledImages) {
            if (typeof p === 'string' && p) allImages.add(getStorageUrl(projectId, p));
          }
        }
        if (task.postDisassembly?.partDisassembledImages && Array.isArray(task.postDisassembly.partDisassembledImages)) {
          for (const p of task.postDisassembly.partDisassembledImages) {
            if (typeof p === 'string' && p) allImages.add(getStorageUrl(projectId, p));
          }
        }
      }

      // VIN decode for specs (VIN itself not sent to client)
      let vinDecoded: any = {};
      if (vinNumber) {
        vinDecoded = await decodeVIN(vinNumber);
      }

      const detailedVehicle = {
        ...vehicle,
        images: Array.from(allImages),
        imageUrl: Array.from(allImages)[0] || undefined,
        engineType: vinDecoded.engineType,
        engineSize: vinDecoded.engineSize,
        engineCylinders: vinDecoded.engineCylinders,
        drivetrain: vinDecoded.drivetrain,
        bodyStyle: vinDecoded.bodyStyle,
        fuelType: vinDecoded.fuelType,
        transmissionType: vinDecoded.transmissionType,
        countryOfOrigin: vinDecoded.countryOfOrigin,
        vehicleType: vinDecoded.vehicleType,
      };

      return new Response(JSON.stringify({ vehicle: detailedVehicle }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'makes') {
      const vehicles = await extractVehiclesFromTasks(projectId, token);
      const makeCounts: Record<string, number> = {};
      for (const v of vehicles) {
        if (v.make) makeCounts[v.make] = (makeCounts[v.make] || 0) + 1;
      }
      const makes = Object.entries(makeCounts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);
      return new Response(JSON.stringify({ makes }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'models') {
      const make = url.searchParams.get('make');
      const vehicles = await extractVehiclesFromTasks(projectId, token);
      const filtered = make ? vehicles.filter(v => v.make === make) : vehicles;
      const models = [...new Set(filtered.map(v => v.model).filter(Boolean))].sort();
      return new Response(JSON.stringify({ models }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Unknown action' }), {
      status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('firebase-inventory error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
