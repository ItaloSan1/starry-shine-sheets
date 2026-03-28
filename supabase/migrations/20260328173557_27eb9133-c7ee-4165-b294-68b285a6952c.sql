CREATE TABLE public.part_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  year TEXT,
  make TEXT,
  model TEXT,
  part_needed TEXT NOT NULL,
  vin TEXT,
  contact_method TEXT NOT NULL DEFAULT 'call',
  notes TEXT,
  stock_number TEXT,
  status TEXT NOT NULL DEFAULT 'new'
);

ALTER TABLE public.part_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit part requests"
  ON public.part_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read part requests"
  ON public.part_requests
  FOR SELECT
  TO authenticated
  USING (true);