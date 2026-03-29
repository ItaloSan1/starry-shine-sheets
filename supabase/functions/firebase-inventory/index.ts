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

  // Import the private key
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

// Cache for access token
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

// Firestore REST API helpers
const FIRESTORE_BASE = 'https://firestore.googleapis.com/v1';

async function firestoreQuery(projectId: string, token: string, collectionId: string, structuredQuery?: any): Promise<any[]> {
  const url = `${FIRESTORE_BASE}/projects/${projectId}/databases/(default)/documents:runQuery`;
  const body = {
    structuredQuery: structuredQuery || {
      from: [{ collectionId }],
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
    throw new Error(`Firestore query failed for ${collectionId}: ${err}`);
  }

  const results = await res.json();
  return results.filter((r: any) => r.document).map((r: any) => r.document);
}

async function firestoreGetDoc(projectId: string, token: string, path: string): Promise<any> {
  const url = `${FIRESTORE_BASE}/projects/${projectId}/databases/(default)/documents/${path}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return null;
  return res.json();
}

// Parse Firestore document fields
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
  // Extract document ID from name
  const nameParts = (doc.name || '').split('/');
  parsed._id = nameParts[nameParts.length - 1];
  return parsed;
}

// NHTSA VIN Decode (free API)
async function decodeVIN(vin: string): Promise<any> {
  if (!vin || vin.length < 11) return {};
  try {
    const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${encodeURIComponent(vin)}?format=json`);
    if (!res.ok) return {};
    const data = await res.json();
    const result = data.Results?.[0] || {};
    return {
      engineType: [result.EngineModel, result.DisplacementL ? `${result.DisplacementL}L` : '', result.EngineCylinders ? `${result.EngineCylinders}-Cylinder` : ''].filter(Boolean).join(' ') || result.EngineModel || undefined,
      engineSize: result.DisplacementL ? `${result.DisplacementL}L` : undefined,
      engineCylinders: result.EngineCylinders || undefined,
      drivetrain: result.DriveType || undefined,
      bodyStyle: result.BodyClass || undefined,
      fuelType: result.FuelTypePrimary || undefined,
      transmissionType: result.TransmissionStyle || undefined,
      countryOfOrigin: result.PlantCountry || undefined,
      decodedMake: result.Make || undefined,
      decodedModel: result.Model || undefined,
      decodedYear: result.ModelYear ? parseInt(result.ModelYear) : undefined,
      decodedTrim: result.Trim || undefined,
      vehicleType: result.VehicleType || undefined,
      gvwr: result.GVWR || undefined,
    };
  } catch {
    return {};
  }
}

// Parse title like "2019 Ford F-150 XLT" into year/make/model/trim
function parseTitle(title: string): { year?: number; make?: string; model?: string; trim?: string } {
  if (!title) return {};
  const parts = title.trim().split(/\s+/);
  const yearMatch = parts[0]?.match(/^(19|20)\d{2}$/);
  if (!yearMatch) return { make: title };
  const year = parseInt(parts[0]);
  const make = parts[1] || undefined;
  const model = parts[2] || undefined;
  const trim = parts.slice(3).join(' ') || undefined;
  return { year, make, model, trim };
}

// Transform Firebase doc into our Vehicle format
async function transformVehicle(doc: any, includeImages = false, decodeVin = false): Promise<any> {
  const parsed = parseFirestoreDoc(doc);
  const titleInfo = parseTitle(parsed.title || parsed.name || '');

  // Get images
  let images: string[] = [];
  if (parsed.image) {
    if (Array.isArray(parsed.image)) {
      images = parsed.image.filter((url: string) => typeof url === 'string' && url.startsWith('http'));
    } else if (typeof parsed.image === 'string') {
      images = [parsed.image];
    }
  }
  if (parsed.images) {
    if (Array.isArray(parsed.images)) {
      images = [...images, ...parsed.images.filter((url: string) => typeof url === 'string' && url.startsWith('http'))];
    }
  }

  let vinDecoded: any = {};
  if (decodeVin && parsed.vin) {
    vinDecoded = await decodeVIN(parsed.vin);
  }

  const vehicle: any = {
    id: parsed._id,
    stockNumber: parsed.stockNumber || parsed.stock_number || parsed.stockNum || parsed._id?.slice(0, 8) || '',
    year: vinDecoded.decodedYear || titleInfo.year || parsed.year || 0,
    make: vinDecoded.decodedMake || titleInfo.make || parsed.make || '',
    model: vinDecoded.decodedModel || titleInfo.model || parsed.model || '',
    trim: vinDecoded.decodedTrim || titleInfo.trim || parsed.trim || '',
    color: parsed.color || parsed.colour || '',
    mileage: parsed.mileage || parsed.odometer || parsed.km || undefined,
    dateArrived: parsed.dateArrived || parsed.date_arrived || parsed.createdAt || parsed.created_at || parsed.dateAdded || new Date().toISOString(),
    status: parsed.status || 'Available',
    partsAvailable: parsed.partsAvailable || parsed.parts_available || [],
    images: includeImages ? images : images.slice(0, 1),
    imageUrl: images[0] || undefined,
    // VIN decoded fields (VIN itself is NEVER sent)
    engineType: vinDecoded.engineType || parsed.engineType || undefined,
    engineSize: vinDecoded.engineSize || undefined,
    engineCylinders: vinDecoded.engineCylinders || undefined,
    drivetrain: vinDecoded.drivetrain || parsed.drivetrain || undefined,
    bodyStyle: vinDecoded.bodyStyle || parsed.bodyStyle || undefined,
    fuelType: vinDecoded.fuelType || parsed.fuelType || undefined,
    transmissionType: vinDecoded.transmissionType || undefined,
    countryOfOrigin: vinDecoded.countryOfOrigin || undefined,
    vehicleType: vinDecoded.vehicleType || undefined,
  };

  return vehicle;
}

// Discover which collection name stores vehicles
async function discoverCollection(projectId: string, token: string): Promise<string> {
  // First try Firestore collections
  const candidates = ['vehicles', 'inventory', 'cars', 'units', 'stock', 'Vehicles', 'Inventory', 'Cars', 'Units', 'Stock', 'auto', 'Auto', 'trucks', 'Trucks', 'salvage', 'Salvage', 'parts', 'Parts'];
  for (const name of candidates) {
    try {
      const docs = await firestoreQuery(projectId, token, name, {
        from: [{ collectionId: name }],
        limit: 1,
      });
      if (docs.length > 0) {
        console.log(`Discovered Firestore collection: ${name}`);
        return name;
      }
    } catch {}
  }
  
  // List all root collections
  try {
    const listUrl = `${FIRESTORE_BASE}/projects/${projectId}/databases/(default)/documents:listCollectionIds`;
    const res = await fetch(listUrl, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    if (res.ok) {
      const data = await res.json();
      console.log('Firestore collections:', data.collectionIds || []);
    } else {
      await res.text();
    }
  } catch {}

  // Try Firebase Realtime Database
  try {
    const rtdbUrl = `https://${projectId}-default-rtdb.firebaseio.com/.json?shallow=true&auth=${token}`;
    const res = await fetch(rtdbUrl);
    if (res.ok) {
      const data = await res.json();
      console.log('RTDB root keys:', Object.keys(data || {}));
    } else {
      // Try without -default-rtdb suffix
      const rtdbUrl2 = `https://${projectId}.firebaseio.com/.json?shallow=true&auth=${token}`;
      const res2 = await fetch(rtdbUrl2);
      if (res2.ok) {
        const data2 = await res2.json();
        console.log('RTDB root keys (alt):', Object.keys(data2 || {}));
      } else {
        await res2.text();
      }
    }
  } catch (e) {
    console.log('RTDB check error:', e.message);
  }

  throw new Error('Could not discover vehicle collection. Firestore has: shelf-pickup-orders, work-orders. Check RTDB logs.');
}

let discoveredCollection: string | null = null;

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

    // Debug action bypasses collection discovery
    if (action !== 'debug') {
      if (!discoveredCollection) {
        discoveredCollection = await discoverCollection(projectId, token);
      }
    }

    if (action === 'debug') {
      const results: any = { collections_found: [], collection_samples: {} };
      
      // Try MANY collection name candidates
      const candidates = [
        'inventory', 'inventoryItems', 'inventory-items', 'inventory_items',
        'vehicles', 'vehicle', 'cars', 'units', 'stock', 'stocks',
        'Inventory', 'InventoryItems', 'Vehicles', 'Cars', 'Units', 'Stock',
        'items', 'Items', 'products', 'Products', 'assets', 'Assets',
        'yard', 'Yard', 'yard-inventory', 'yardInventory',
        'salvage', 'Salvage', 'auto', 'Auto', 'trucks', 'Trucks',
        'parts', 'Parts', 'dismantled', 'arrivals',
        'shelf-pickup-orders', 'work-orders',
        'users', 'locations', 'settings', 'config',
        'inventoryLocations', 'inventory-locations', 'location-groups',
        'locationGroups', 'tasks',
      ];
      
      for (const name of candidates) {
        try {
          const docs = await firestoreQuery(projectId, token, name, {
            from: [{ collectionId: name }],
            limit: 1,
          });
          if (docs.length > 0) {
            results.collections_found.push(name);
            const parsed = parseFirestoreDoc(docs[0]);
            results.collection_samples[name] = {
              keys: Object.keys(parsed),
              sample: parsed,
            };
          }
        } catch {}
      }

      // Also list ALL root collections
      try {
        const listUrl = `${FIRESTORE_BASE}/projects/${projectId}/databases/(default)/documents:listCollectionIds`;
        const res = await fetch(listUrl, {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ pageSize: 100 }),
        });
        if (res.ok) {
          const data = await res.json();
          results.all_root_collections = data.collectionIds || [];
          
          // Sample any collections we haven't already sampled
          for (const cid of (data.collectionIds || [])) {
            if (!results.collection_samples[cid]) {
              try {
                const docs = await firestoreQuery(projectId, token, cid, {
                  from: [{ collectionId: cid }],
                  limit: 1,
                });
                if (docs.length > 0) {
                  results.collections_found.push(cid);
                  const parsed = parseFirestoreDoc(docs[0]);
                  results.collection_samples[cid] = {
                    keys: Object.keys(parsed),
                    sample: parsed,
                  };
                }
              } catch {}
            }
          }
        }
      } catch {}

      // Check subcollections of work-orders AND shelf-pickup-orders
      for (const parentCol of ['work-orders', 'shelf-pickup-orders']) {
        try {
          const docs = await firestoreQuery(projectId, token, parentCol, {
            from: [{ collectionId: parentCol }],
            limit: 1,
          });
          if (docs.length > 0) {
            const docPath = docs[0].name.replace(`projects/${projectId}/databases/(default)/documents/`, '');
            const subRes = await fetch(`${FIRESTORE_BASE}/projects/${projectId}/databases/(default)/documents/${docPath}:listCollectionIds`, {
              method: 'POST',
              headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
              body: JSON.stringify({}),
            });
            if (subRes.ok) {
              const subData = await subRes.json();
              results[`${parentCol}_subcollections`] = subData.collectionIds || [];
            }
          }
        } catch {}
      }

      // Try collectionGroup query for 'tasks' subcollection
      try {
        const url = `${FIRESTORE_BASE}/projects/${projectId}/databases/(default)/documents:runQuery`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            structuredQuery: {
              from: [{ collectionId: 'tasks', allDescendants: true }],
              limit: 2,
            },
          }),
        });
        if (res.ok) {
          const data = await res.json();
          const taskDocs = data.filter((r: any) => r.document);
          if (taskDocs.length > 0) {
            results['tasks_collectionGroup'] = taskDocs.map((r: any) => {
              const parsed = parseFirestoreDoc(r.document);
              return { path: r.document.name, keys: Object.keys(parsed), sample: parsed };
            });
          }
        }
      } catch {}

      return new Response(JSON.stringify(results, null, 2), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'vehicles') {
      const docs = await firestoreQuery(projectId, token, discoveredCollection);
      const vehicles = await Promise.all(
        docs.map(doc => transformVehicle(doc, false, false))
      );
      // Sort by year descending (newest first)
      vehicles.sort((a, b) => (b.year || 0) - (a.year || 0));

      return new Response(JSON.stringify({ vehicles, collection: discoveredCollection }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'vehicle') {
      const id = url.searchParams.get('id');
      if (!id) {
        return new Response(JSON.stringify({ error: 'Missing id parameter' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const doc = await firestoreGetDoc(projectId, token, `${discoveredCollection}/${id}`);
      if (!doc) {
        return new Response(JSON.stringify({ error: 'Vehicle not found' }), {
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      // Full detail with VIN decode and all images
      const vehicle = await transformVehicle(doc, true, true);
      return new Response(JSON.stringify({ vehicle }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'makes') {
      const docs = await firestoreQuery(projectId, token, discoveredCollection);
      const vehicles = await Promise.all(docs.map(doc => transformVehicle(doc, false, false)));
      const makeCounts: Record<string, number> = {};
      for (const v of vehicles) {
        if (v.make) {
          makeCounts[v.make] = (makeCounts[v.make] || 0) + 1;
        }
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
      const docs = await firestoreQuery(projectId, token, discoveredCollection);
      const vehicles = await Promise.all(docs.map(doc => transformVehicle(doc, false, false)));
      const filtered = make ? vehicles.filter(v => v.make === make) : vehicles;
      const models = [...new Set(filtered.map(v => v.model).filter(Boolean))].sort();
      return new Response(JSON.stringify({ models }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Unknown action' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('firebase-inventory error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
