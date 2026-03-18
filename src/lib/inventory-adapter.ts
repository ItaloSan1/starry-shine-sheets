/**
 * Inventory Adapter Interface
 * 
 * This abstraction allows the inventory search to work with multiple backends:
 * - MockInventoryProvider (current) — realistic demo data
 * - Future: Hollander/YMS API, URG/AutoPartSearch, car-part.com bridge, CSV import, or custom middleware
 * 
 * To integrate a live source:
 * 1. Implement the InventoryProvider interface
 * 2. Swap the provider in the context/hook that consumes it
 * 3. No UI changes needed
 */

export interface Part {
  id: string;
  stockNumber: string;
  year: number;
  make: string;
  model: string;
  partType: string;
  partCategory: 'engine' | 'transmission' | 'body' | 'tires-rims' | 'electrical' | 'suspension' | 'interior' | 'other';
  description: string;
  price: number;
  condition: 'A - Excellent' | 'B - Good' | 'C - Fair';
  availability: 'In Stock' | 'Sold' | 'On Hold';
  fitmentNotes?: string;
  mileage?: number;
  warranty?: string;
  imageUrl?: string;
  vehicleImageUrl?: string;
  dateAdded: string;
  oemNumber?: string;
}

export interface Vehicle {
  id: string;
  stockNumber: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  vin?: string;
  color?: string;
  mileage?: number;
  dateArrived: string;
  imageUrl?: string;
  status: 'Dismantling' | 'Available' | 'Sold';
  partsAvailable: string[];
}

export interface SearchFilters {
  year?: number;
  make?: string;
  model?: string;
  partType?: string;
  partCategory?: string;
  minPrice?: number;
  maxPrice?: number;
  condition?: string;
  stockNumber?: string;
  query?: string;
}

export interface SearchResult {
  parts: Part[];
  total: number;
  page: number;
  pageSize: number;
}

export interface InventoryProvider {
  searchParts(filters: SearchFilters, page?: number, pageSize?: number): Promise<SearchResult>;
  getPartById(id: string): Promise<Part | null>;
  getLatestArrivals(limit?: number): Promise<Vehicle[]>;
  getVehicleById(id: string): Promise<Vehicle | null>;
  getMakes(): Promise<string[]>;
  getModels(make: string): Promise<string[]>;
  getPartTypes(): Promise<string[]>;
  getYears(): Promise<number[]>;
}
