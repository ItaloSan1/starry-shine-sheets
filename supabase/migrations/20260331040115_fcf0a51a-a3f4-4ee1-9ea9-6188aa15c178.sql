
CREATE TABLE public.vehicle_image_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  vehicle_id text NOT NULL,
  image_path text NOT NULL,
  signed_url text NOT NULL,
  expires_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(vehicle_id, image_path)
);

ALTER TABLE public.vehicle_image_cache ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read vehicle image cache"
  ON public.vehicle_image_cache
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Service role can manage vehicle image cache"
  ON public.vehicle_image_cache
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE INDEX idx_vehicle_image_cache_lookup
  ON public.vehicle_image_cache (vehicle_id, image_path, expires_at);
