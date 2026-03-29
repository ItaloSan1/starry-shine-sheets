import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { MongoClient } from "npm:mongodb@6.12.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    let connStr = Deno.env.get('MONGODB_CONNECTION_STRING');
    if (!connStr) throw new Error('MONGODB_CONNECTION_STRING not set');

    // URL-encode password if it contains special chars
    // Format: mongodb+srv://user:password@host/...
    const match = connStr.match(/^(mongodb\+srv:\/\/[^:]+:)([^@]+)(@.+)$/);
    if (match) {
      const encodedPassword = encodeURIComponent(decodeURIComponent(match[2]));
      connStr = match[1] + encodedPassword + match[3];
    }

    console.log('Connecting to MongoDB...', connStr.replace(/:[^@]+@/, ':***@'));
    console.log('Password encoded segment:', match ? encodeURIComponent(decodeURIComponent(match[2])) : 'no match');
    const client = new MongoClient(connStr, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });
    await client.connect();
    console.log('Connected successfully!');
    
    const db = client.db('yard-app');
    const col = db.collection('vehicles-inventory');
    
    // Get 3 sample documents to see the structure
    const samples = await col.find({}).limit(3).toArray();
    
    // Also search for ES1850 specifically
    const es1850 = await col.findOne({ $or: [
      { stockNumber: 'ES1850' },
      { stockNumber: { $regex: '1850' } },
      { inventoryDisplayName: { $regex: '1850' } },
    ]});

    // Get total count
    const totalCount = await col.estimatedDocumentCount();

    await client.close();

    // Return field names from first sample + ES1850 data
    const fieldNames = samples[0] ? Object.keys(samples[0]) : [];

    return new Response(JSON.stringify({
      totalCount,
      fieldNames,
      sampleStockNumbers: samples.map((s: any) => s.stockNumber || s.inventoryDisplayName || s._id),
      es1850: es1850 ? Object.keys(es1850) : 'not found',
      es1850_images_fields: es1850 ? {
        preDismantling: es1850.preDismantling,
        preDismantledImages: es1850.preDismantledImages,
        postDismantledImages: es1850.postDismantledImages,
        images: es1850.images,
      } : null,
      sample1: samples[0],
    }, null, 2), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Discovery error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
