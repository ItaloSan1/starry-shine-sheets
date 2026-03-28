import type { InventoryProvider, Part, Vehicle, SearchFilters, SearchResult } from './inventory-adapter';
import { supabase } from '@/integrations/supabase/client';

const SUPABASE_PROJECT_ID = import.meta.env.VITE_SUPABASE_PROJECT_ID;

interface FirebaseVehicle extends Vehicle {
  images: string[];
  engineType?: string;
  engineSize?: string;
  engineCylinders?: string;
  drivetrain?: string;
  bodyStyle?: string;
  fuelType?: string;
  transmissionType?: string;
  countryOfOrigin?: string;
  vehicleType?: string;
}

// Cache
let vehiclesCache: { data: FirebaseVehicle[]; timestamp: number } | null = null;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

async function callFirebaseInventory(action: string, params: Record<string, string> = {}): Promise<any> {
  const queryParams = new URLSearchParams({ action, ...params });
  
  const { data, error } = await supabase.functions.invoke('firebase-inventory', {
    body: null,
    method: 'GET',
  });

  // Use direct fetch since supabase.functions.invoke doesn't support query params well for GET
  const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/firebase-inventory?${queryParams.toString()}`;
  const res = await fetch(url, {
    headers: {
      'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
      'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Firebase inventory API error: ${res.status} ${errText}`);
  }

  return res.json();
}

async function fetchAllVehicles(): Promise<FirebaseVehicle[]> {
  if (vehiclesCache && Date.now() - vehiclesCache.timestamp < CACHE_TTL) {
    return vehiclesCache.data;
  }

  try {
    const result = await callFirebaseInventory('vehicles');
    const vehicles: FirebaseVehicle[] = (result.vehicles || []).map((v: any) => ({
      id: v.id,
      stockNumber: v.stockNumber || '',
      year: v.year || 0,
      make: v.make || '',
      model: v.model || '',
      trim: v.trim || '',
      color: v.color || undefined,
      mileage: v.mileage || undefined,
      dateArrived: v.dateArrived || new Date().toISOString(),
      status: v.status === 'Dismantling' ? 'Dismantling' : v.status === 'Sold' ? 'Sold' : 'Available',
      partsAvailable: v.partsAvailable || [],
      images: v.images || [],
      imageUrl: v.imageUrl || v.images?.[0] || undefined,
      engineType: v.engineType,
      engineSize: v.engineSize,
      engineCylinders: v.engineCylinders,
      drivetrain: v.drivetrain,
      bodyStyle: v.bodyStyle,
      fuelType: v.fuelType,
      transmissionType: v.transmissionType,
      countryOfOrigin: v.countryOfOrigin,
      vehicleType: v.vehicleType,
    }));

    vehiclesCache = { data: vehicles, timestamp: Date.now() };
    return vehicles;
  } catch (error) {
    console.error('Failed to fetch Firebase vehicles:', error);
    // Return cached data if available, even if stale
    if (vehiclesCache) return vehiclesCache.data;
    return [];
  }
}

export class FirebaseInventoryProvider implements InventoryProvider {
  async searchParts(filters: SearchFilters, page = 1, pageSize = 12): Promise<SearchResult> {
    // Parts search still uses mock data — Firebase only has vehicles
    // This will be replaced when Checkmate/URG integration is added
    const { MockInventoryProvider } = await import('./mock-inventory');
    const mock = new MockInventoryProvider();
    return mock.searchParts(filters, page, pageSize);
  }

  async getPartById(id: string): Promise<Part | null> {
    const { MockInventoryProvider } = await import('./mock-inventory');
    const mock = new MockInventoryProvider();
    return mock.getPartById(id);
  }

  async getLatestArrivals(limit = 8): Promise<Vehicle[]> {
    const vehicles = await fetchAllVehicles();
    // Already sorted by year descending from the edge function
    return vehicles.slice(0, limit);
  }

  async getAllVehicles(): Promise<FirebaseVehicle[]> {
    return fetchAllVehicles();
  }

  async getVehicleById(id: string): Promise<FirebaseVehicle | null> {
    try {
      const result = await callFirebaseInventory('vehicle', { id });
      if (!result.vehicle) return null;
      const v = result.vehicle;
      return {
        id: v.id,
        stockNumber: v.stockNumber || '',
        year: v.year || 0,
        make: v.make || '',
        model: v.model || '',
        trim: v.trim || '',
        color: v.color || undefined,
        mileage: v.mileage || undefined,
        dateArrived: v.dateArrived || new Date().toISOString(),
        status: v.status === 'Dismantling' ? 'Dismantling' : v.status === 'Sold' ? 'Sold' : 'Available',
        partsAvailable: v.partsAvailable || [],
        images: v.images || [],
        imageUrl: v.imageUrl || v.images?.[0] || undefined,
        engineType: v.engineType,
        engineSize: v.engineSize,
        engineCylinders: v.engineCylinders,
        drivetrain: v.drivetrain,
        bodyStyle: v.bodyStyle,
        fuelType: v.fuelType,
        transmissionType: v.transmissionType,
        countryOfOrigin: v.countryOfOrigin,
        vehicleType: v.vehicleType,
      };
    } catch (error) {
      console.error('Failed to fetch vehicle by ID:', error);
      return null;
    }
  }

  async getMakes(): Promise<string[]> {
    const vehicles = await fetchAllVehicles();
    return [...new Set(vehicles.map(v => v.make).filter(Boolean))].sort();
  }

  async getModels(make: string): Promise<string[]> {
    const vehicles = await fetchAllVehicles();
    return [...new Set(vehicles.filter(v => v.make === make).map(v => v.model).filter(Boolean))].sort();
  }

  async getPartTypes(): Promise<string[]> {
    // Uses mock data since Firebase doesn't have individual parts
    const { MockInventoryProvider } = await import('./mock-inventory');
    const mock = new MockInventoryProvider();
    return mock.getPartTypes();
  }

  async getYears(): Promise<number[]> {
    const vehicles = await fetchAllVehicles();
    return [...new Set(vehicles.map(v => v.year).filter(y => y > 0))].sort((a, b) => b - a);
  }
}

export const firebaseInventoryProvider = new FirebaseInventoryProvider();
