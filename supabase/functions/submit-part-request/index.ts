import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();

    // Honeypot check
    if (body.honeypot || body.website) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate required fields
    if (!body.name?.trim()) {
      return new Response(JSON.stringify({ error: 'Name is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (!body.phone?.trim()) {
      return new Response(JSON.stringify({ error: 'Phone is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (!body.partNeeded?.trim()) {
      return new Response(JSON.stringify({ error: 'Part description is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Save to database
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from('part_requests').insert({
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email?.trim() || null,
      year: body.year?.trim() || null,
      make: body.make?.trim() || null,
      model: body.model?.trim() || null,
      part_needed: body.partNeeded.trim(),
      vin: body.vin?.trim() || null,
      contact_method: body.contactMethod || 'call',
      notes: body.notes?.trim() || null,
      stock_number: body.stockNumber?.trim() || null,
      status: 'new',
    });

    if (dbError) {
      console.error('DB insert error:', dbError);
      throw new Error('Failed to save request');
    }

    // Send notification email to Parts@eskimoinfo.com
    // Build email body
    const emailLines = [
      `New Part Request from ${body.name}`,
      ``,
      `Contact: ${body.name}`,
      `Phone: ${body.phone}`,
      body.email ? `Email: ${body.email}` : '',
      `Preferred Contact: ${body.contactMethod || 'call'}`,
      ``,
      `Vehicle: ${[body.year, body.make, body.model].filter(Boolean).join(' ') || 'Not specified'}`,
      body.stockNumber ? `Stock #: ${body.stockNumber}` : '',
      body.vin ? `VIN: ${body.vin}` : '',
      `Part Needed: ${body.partNeeded}`,
      body.notes ? `Notes: ${body.notes}` : '',
    ].filter(Boolean).join('\n');

    // Try to send via Resend or log for manual pickup
    // For now, log the email content — email integration can be added later
    console.log('=== PART REQUEST EMAIL ===');
    console.log('To: Parts@eskimoinfo.com');
    console.log('Subject: New Part Request -', [body.year, body.make, body.model].filter(Boolean).join(' '));
    console.log(emailLines);
    console.log('=========================');

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('submit-part-request error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
