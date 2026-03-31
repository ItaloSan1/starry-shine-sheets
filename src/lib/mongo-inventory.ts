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

// Simple in-memory cache
const apiCache = new Map<string, { data: any; expiry: number }>();

function getCached<T>(key: string): T | null {
  const entry = apiCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiry) {
    apiCache.delete(key);
    return null;
  }
  return entry.data as T;
}

function setCache(key: string, data: any, ttlMs: number) {
  apiCache.set(key, { data, expiry: Date.now() + ttlMs });
}

const CACHE_5MIN = 5 * 60 * 1000;
const CACHE_VEHICLES = 5 * 60 * 1000;

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

    // Cache key based on all params
    const cacheKey = `vehicles:${JSON.stringify(queryParams)}`;
    const cached = getCached<PaginatedResult>(cacheKey);
    if (cached) return cached;

    const result = await callMongoInventory('vehicles', queryParams);
    const mapped = {
      vehicles: (result.vehicles || []).map(mapVehicle),
      total: result.total || 0,
      page: result.page || 1,
      pageSize: result.pageSize || 50,
      totalPages: result.totalPages || 1,
    };

    setCache(cacheKey, mapped, CACHE_1MIN);
    return mapped;
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
    const withCounts = await this.getMakesWithCounts();
    return withCounts.map(m => m.name);
  }

  async getMakesWithCounts(): Promise<{ name: string; count: number }[]> {
    const cacheKey = 'makes_with_counts';
    const cached = getCached<{ name: string; count: number }[]>(cacheKey);
    if (cached) return cached;

    const result = await callMongoInventory('makes');
    const makes = (result.makes || []).map((m: any) => ({ name: m.name, count: m.count || 0 }));
    setCache(cacheKey, makes, CACHE_5MIN);
    return makes;
  }

  async getModels(make: string): Promise<string[]> {
    const cacheKey = `models:${make}`;
    const cached = getCached<string[]>(cacheKey);
    if (cached) return cached;

    const result = await callMongoInventory('models', { make });
    const models = result.models || [];
    setCache(cacheKey, models, CACHE_5MIN);
    return models;
  }

  async getPartTypes(): Promise<string[]> {
    const { MockInventoryProvider } = await import('./mock-inventory');
    const mock = new MockInventoryProvider();
    return mock.getPartTypes();
  }

  async getYears(): Promise<number[]> {
    const cacheKey = 'years';
    const cached = getCached<number[]>(cacheKey);
    if (cached) return cached;

    const result = await callMongoInventory('years');
    const years: number[] = (result.years || []).filter((y: number) => y > 0).sort((a: number, b: number) => b - a);
    setCache(cacheKey, years, CACHE_5MIN);
    return years;
  }
}

export const mongoInventoryProvider = new MongoInventoryProvider();
