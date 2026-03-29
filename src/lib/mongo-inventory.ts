import type { InventoryProvider, Part, Vehicle, SearchFilters, SearchResult } from './inventory-adapter';

interface MongoVehicle extends Vehicle {
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

interface PaginatedResult {
  vehicles: MongoVehicle[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

async function callMongoInventory(action: string, params: Record<string, string> = {}): Promise<any> {
  const queryParams = new URLSearchParams({ action, ...params });
  const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/mongo-inventory?${queryParams.toString()}`;
  const res = await fetch(url, {
    headers: {
      'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
      'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Mongo inventory API error: ${res.status} ${errText}`);
  }

  return res.json();
}

function mapVehicle(v: any): MongoVehicle {
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
}

export class MongoInventoryProvider implements InventoryProvider {
  async searchParts(filters: SearchFilters, page = 1, pageSize = 12): Promise<SearchResult> {
    // Parts search still uses mock data
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
    const result = await this.getVehiclesPaginated({ page: 1, pageSize: limit });
    return result.vehicles;
  }

  async getVehiclesPaginated(params: {
    page?: number;
    pageSize?: number;
    make?: string;
    model?: string;
    year?: string;
    search?: string;
  } = {}): Promise<PaginatedResult> {
    const queryParams: Record<string, string> = {};
    if (params.page) queryParams.page = String(params.page);
    if (params.pageSize) queryParams.pageSize = String(params.pageSize);
    if (params.make) queryParams.make = params.make;
    if (params.model) queryParams.model = params.model;
    if (params.year) queryParams.year = params.year;
    if (params.search) queryParams.search = params.search;

    const result = await callMongoInventory('vehicles', queryParams);
    return {
      vehicles: (result.vehicles || []).map(mapVehicle),
      total: result.total || 0,
      page: result.page || 1,
      pageSize: result.pageSize || 50,
      totalPages: result.totalPages || 1,
    };
  }

  async getAllVehicles(): Promise<MongoVehicle[]> {
    const result = await this.getVehiclesPaginated({ page: 1, pageSize: 200 });
    return result.vehicles;
  }

  async getVehicleById(id: string): Promise<MongoVehicle | null> {
    try {
      const result = await callMongoInventory('vehicle', { id });
      if (!result.vehicle) return null;
      return mapVehicle(result.vehicle);
    } catch (error) {
      console.error('Failed to fetch vehicle by ID:', error);
      return null;
    }
  }

  async getMakes(): Promise<string[]> {
    const result = await callMongoInventory('makes');
    return (result.makes || []).map((m: any) => m.name);
  }

  async getModels(make: string): Promise<string[]> {
    const result = await callMongoInventory('models', { make });
    return result.models || [];
  }

  async getPartTypes(): Promise<string[]> {
    const { MockInventoryProvider } = await import('./mock-inventory');
    const mock = new MockInventoryProvider();
    return mock.getPartTypes();
  }

  async getYears(): Promise<number[]> {
    const vehicles = await this.getAllVehicles();
    return [...new Set(vehicles.map(v => v.year).filter(y => y > 0))].sort((a, b) => b - a);
  }
}

export const mongoInventoryProvider = new MongoInventoryProvider();
