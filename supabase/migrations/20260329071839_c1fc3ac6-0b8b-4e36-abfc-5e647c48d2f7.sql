
CREATE TABLE public.cylinder_heads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand text NOT NULL DEFAULT 'ATK',
  vendor_part_number text NOT NULL UNIQUE,
  name text NOT NULL,
  slug text NOT NULL,
  price_usd numeric NOT NULL,
  image_url text,
  displacement text,
  engine_make_size text,
  fits_vehicles text,
  config text,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.cylinder_heads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view cylinder heads"
ON public.cylinder_heads
FOR SELECT
TO anon, authenticated
USING (true);
