
-- Create staff_profiles table
CREATE TABLE public.staff_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  initials text NOT NULL CHECK (char_length(initials) BETWEEN 2 AND 3),
  full_name text NOT NULL,
  role text NOT NULL DEFAULT 'staff' CHECK (role IN ('admin', 'staff')),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.staff_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Staff can read own profile" ON public.staff_profiles
  FOR SELECT TO authenticated USING (auth.uid() = id);

CREATE POLICY "Staff can update own profile" ON public.staff_profiles
  FOR UPDATE TO authenticated USING (auth.uid() = id);

-- Create tire_inventory table
CREATE TABLE public.tire_inventory (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stock_number text UNIQUE NOT NULL,
  brand text NOT NULL,
  model text,
  width integer NOT NULL,
  aspect_ratio integer NOT NULL,
  rim_diameter integer NOT NULL,
  full_size text GENERATED ALWAYS AS (width::text || '/' || aspect_ratio::text || 'R' || rim_diameter::text) STORED,
  season text NOT NULL DEFAULT 'All-Season' CHECK (season IN ('All-Season', 'Winter', 'Summer', 'All-Weather')),
  speed_rating text,
  load_index integer,
  tread_depth_mm numeric,
  tread_depth_32nds numeric GENERATED ALWAYS AS (ROUND(tread_depth_mm * 1.2598, 1)) STORED,
  quantity integer NOT NULL DEFAULT 1 CHECK (quantity >= 0),
  price numeric NOT NULL CHECK (price >= 0),
  condition text NOT NULL DEFAULT 'Good' CHECK (condition IN ('New', 'Like New', 'Good', 'Fair')),
  notes text,
  images text[] DEFAULT '{}',
  status text NOT NULL DEFAULT 'Available' CHECK (status IN ('Available', 'Sold', 'Reserved')),
  added_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.tire_inventory ENABLE ROW LEVEL SECURITY;

-- Public can view available tires
CREATE POLICY "Public can view available tires" ON public.tire_inventory
  FOR SELECT TO anon, authenticated USING (status = 'Available' AND quantity > 0);

-- Staff can view all tires
CREATE POLICY "Staff can view all tires" ON public.tire_inventory
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM public.staff_profiles WHERE id = auth.uid())
  );

-- Staff can insert tires
CREATE POLICY "Staff can insert tires" ON public.tire_inventory
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM public.staff_profiles WHERE id = auth.uid())
  );

-- Staff can update tires
CREATE POLICY "Staff can update tires" ON public.tire_inventory
  FOR UPDATE TO authenticated USING (
    EXISTS (SELECT 1 FROM public.staff_profiles WHERE id = auth.uid())
  );

-- Staff can delete tires
CREATE POLICY "Staff can delete tires" ON public.tire_inventory
  FOR DELETE TO authenticated USING (
    EXISTS (SELECT 1 FROM public.staff_profiles WHERE id = auth.uid())
  );

-- Create indexes
CREATE INDEX idx_tire_inventory_status ON public.tire_inventory(status);
CREATE INDEX idx_tire_inventory_brand ON public.tire_inventory(brand);
CREATE INDEX idx_tire_inventory_full_size ON public.tire_inventory(full_size);
CREATE INDEX idx_tire_inventory_stock_number ON public.tire_inventory(stock_number);

-- Create tire-images storage bucket
INSERT INTO storage.buckets (id, name, public) VALUES ('tire-images', 'tire-images', true);

-- Storage policies
CREATE POLICY "Anyone can view tire images" ON storage.objects
  FOR SELECT TO anon, authenticated USING (bucket_id = 'tire-images');

CREATE POLICY "Authenticated users can upload tire images" ON storage.objects
  FOR INSERT TO authenticated WITH CHECK (bucket_id = 'tire-images');

CREATE POLICY "Authenticated users can update tire images" ON storage.objects
  FOR UPDATE TO authenticated USING (bucket_id = 'tire-images');

CREATE POLICY "Authenticated users can delete tire images" ON storage.objects
  FOR DELETE TO authenticated USING (bucket_id = 'tire-images');
