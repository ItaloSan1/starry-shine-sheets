CREATE TABLE public.vehicle_content_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  vehicle_key text UNIQUE NOT NULL,
  generation_overview text,
  engine_overview text,
  transmission_overview text,
  vehicle_facts text,
  parts_compatibility text,
  created_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.vehicle_content_cache ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read vehicle content cache" ON public.vehicle_content_cache
  FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Service role can manage vehicle content cache" ON public.vehicle_content_cache
  FOR ALL TO service_role USING (true) WITH CHECK (true);