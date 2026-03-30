ALTER TABLE remanufactured_engines ADD COLUMN IF NOT EXISTS description text;
ALTER TABLE cylinder_heads ADD COLUMN IF NOT EXISTS description text;