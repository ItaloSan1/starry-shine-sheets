
CREATE TABLE public.remanufactured_engines (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand text NOT NULL DEFAULT 'ATK Engines',
  vendor_part_number text NOT NULL UNIQUE,
  jegs_part_number text,
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  engine_make_size text,
  displacement text,
  fits_vehicles text,
  engine_code text,
  config text,
  block_material text,
  head_material text,
  category text,
  price_usd numeric NOT NULL,
  image_url text,
  source_url text,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.remanufactured_engines ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view remanufactured engines"
ON public.remanufactured_engines
FOR SELECT
TO anon, authenticated
USING (true);

CREATE INDEX idx_reman_engines_make_size ON public.remanufactured_engines(engine_make_size);
CREATE INDEX idx_reman_engines_slug ON public.remanufactured_engines(slug);
CREATE INDEX idx_reman_engines_brand ON public.remanufactured_engines(brand);
