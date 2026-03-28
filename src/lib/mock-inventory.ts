import type { InventoryProvider, Part, Vehicle, SearchFilters, SearchResult } from './inventory-adapter';

const mockParts: Part[] = [
  { id: 'p1', stockNumber: 'ESK-2401', year: 2018, make: 'Ford', model: 'F-150', partType: 'Engine', partCategory: 'engine', description: '3.5L EcoBoost V6 Engine Assembly', price: 3200, condition: 'A - Excellent', availability: 'In Stock', mileage: 68000, warranty: '90-day warranty', fitmentNotes: 'Fits 2017-2020 F-150 3.5L EcoBoost', dateAdded: '2024-12-15' },
  { id: 'p2', stockNumber: 'ESK-2402', year: 2019, make: 'Toyota', model: 'Camry', partType: 'Transmission', partCategory: 'transmission', description: '8-Speed Automatic Transmission', price: 1800, condition: 'A - Excellent', availability: 'In Stock', mileage: 42000, warranty: '90-day warranty', fitmentNotes: 'Fits 2018-2022 Camry 2.5L', dateAdded: '2024-12-14' },
  { id: 'p3', stockNumber: 'ESK-2403', year: 2017, make: 'Chevrolet', model: 'Silverado 1500', partType: 'Engine', partCategory: 'engine', description: '5.3L V8 Engine Assembly', price: 2800, condition: 'B - Good', availability: 'In Stock', mileage: 95000, warranty: '60-day warranty', fitmentNotes: 'Fits 2014-2018 Silverado/Sierra 5.3L', dateAdded: '2024-12-12' },
  { id: 'p4', stockNumber: 'ESK-2404', year: 2020, make: 'Honda', model: 'Civic', partType: 'Front Bumper', partCategory: 'body', description: 'Front Bumper Cover Assembly - Black', price: 285, condition: 'A - Excellent', availability: 'In Stock', fitmentNotes: 'Fits 2019-2021 Civic Sedan', dateAdded: '2024-12-11' },
  { id: 'p5', stockNumber: 'ESK-2405', year: 2016, make: 'Dodge', model: 'Ram 1500', partType: 'Transmission', partCategory: 'transmission', description: '8-Speed Automatic Transmission 845RE', price: 2100, condition: 'B - Good', availability: 'In Stock', mileage: 110000, warranty: '60-day warranty', fitmentNotes: 'Fits 2013-2018 Ram 1500 3.6L/5.7L', dateAdded: '2024-12-10' },
  { id: 'p6', stockNumber: 'ESK-2406', year: 2019, make: 'Ford', model: 'Escape', partType: 'Door Assembly', partCategory: 'body', description: 'Front Left Door Assembly - White', price: 450, condition: 'A - Excellent', availability: 'In Stock', dateAdded: '2024-12-09' },
  { id: 'p7', stockNumber: 'ESK-2407', year: 2021, make: 'Toyota', model: 'RAV4', partType: 'Headlight', partCategory: 'body', description: 'LED Headlight Assembly - Driver Side', price: 380, condition: 'A - Excellent', availability: 'In Stock', fitmentNotes: 'Fits 2019-2023 RAV4 LED equipped', dateAdded: '2024-12-08' },
  { id: 'p8', stockNumber: 'ESK-2408', year: 2015, make: 'Chevrolet', model: 'Equinox', partType: 'Engine', partCategory: 'engine', description: '2.4L 4-Cylinder Engine Assembly', price: 1600, condition: 'B - Good', availability: 'In Stock', mileage: 125000, warranty: '60-day warranty', dateAdded: '2024-12-07' },
  { id: 'p9', stockNumber: 'ESK-2409', year: 2018, make: 'Honda', model: 'CR-V', partType: 'Transmission', partCategory: 'transmission', description: 'CVT Automatic Transmission', price: 1950, condition: 'A - Excellent', availability: 'In Stock', mileage: 55000, warranty: '90-day warranty', dateAdded: '2024-12-06' },
  { id: 'p10', stockNumber: 'ESK-2410', year: 2017, make: 'Ford', model: 'F-250', partType: 'Engine', partCategory: 'engine', description: '6.7L Power Stroke Diesel Engine', price: 5500, condition: 'B - Good', availability: 'In Stock', mileage: 145000, warranty: '90-day warranty', fitmentNotes: 'Fits 2017-2019 F-250/F-350 6.7L Diesel', dateAdded: '2024-12-05' },
  { id: 'p11', stockNumber: 'ESK-2411', year: 2020, make: 'Dodge', model: 'Grand Caravan', partType: 'Transmission', partCategory: 'transmission', description: '6-Speed Automatic Transmission 62TE', price: 1400, condition: 'B - Good', availability: 'In Stock', mileage: 88000, warranty: '60-day warranty', dateAdded: '2024-12-04' },
  { id: 'p12', stockNumber: 'ESK-2412', year: 2019, make: 'Toyota', model: 'Tacoma', partType: 'Tailgate', partCategory: 'body', description: 'Tailgate Assembly - Silver', price: 520, condition: 'A - Excellent', availability: 'In Stock', dateAdded: '2024-12-03' },
  { id: 'p13', stockNumber: 'ESK-2413', year: 2016, make: 'Honda', model: 'Accord', partType: 'Tire & Rim', partCategory: 'tires-rims', description: '17" Alloy Wheel with Tire - Set of 4', price: 680, condition: 'B - Good', availability: 'In Stock', fitmentNotes: '5x114.3 bolt pattern', dateAdded: '2024-12-02' },
  { id: 'p14', stockNumber: 'ESK-2414', year: 2018, make: 'Chevrolet', model: 'Silverado 2500HD', partType: 'Engine', partCategory: 'engine', description: '6.6L Duramax Diesel Engine', price: 6200, condition: 'A - Excellent', availability: 'In Stock', mileage: 98000, warranty: '90-day warranty', fitmentNotes: 'Fits 2017-2019 Silverado/Sierra 2500/3500 L5P', dateAdded: '2024-12-01' },
  { id: 'p15', stockNumber: 'ESK-2415', year: 2021, make: 'Ford', model: 'Explorer', partType: 'Hood', partCategory: 'body', description: 'Hood Assembly - Black', price: 390, condition: 'A - Excellent', availability: 'In Stock', dateAdded: '2024-11-30' },
  { id: 'p16', stockNumber: 'ESK-2416', year: 2017, make: 'Toyota', model: 'Corolla', partType: 'Fender', partCategory: 'body', description: 'Front Right Fender - Silver', price: 195, condition: 'A - Excellent', availability: 'In Stock', dateAdded: '2024-11-29' },
  { id: 'p17', stockNumber: 'ESK-2417', year: 2019, make: 'Dodge', model: 'Ram 2500', partType: 'Transmission', partCategory: 'transmission', description: '6-Speed Manual Transmission G56', price: 2400, condition: 'B - Good', availability: 'In Stock', mileage: 130000, warranty: '60-day warranty', fitmentNotes: 'Fits 2007-2018 Ram 2500/3500 6.7L Cummins', dateAdded: '2024-11-28' },
  { id: 'p18', stockNumber: 'ESK-2418', year: 2020, make: 'Honda', model: 'Pilot', partType: 'Tire & Rim', partCategory: 'tires-rims', description: '20" OEM Alloy Wheel - Single', price: 220, condition: 'A - Excellent', availability: 'In Stock', fitmentNotes: '5x120 bolt pattern', dateAdded: '2024-11-27' },
  { id: 'p19', stockNumber: 'ESK-2419', year: 2016, make: 'Ford', model: 'Focus', partType: 'Engine', partCategory: 'engine', description: '2.0L 4-Cylinder Engine Assembly', price: 1200, condition: 'C - Fair', availability: 'In Stock', mileage: 165000, warranty: '30-day warranty', dateAdded: '2024-11-26' },
  { id: 'p20', stockNumber: 'ESK-2420', year: 2018, make: 'Chevrolet', model: 'Malibu', partType: 'Front Bumper', partCategory: 'body', description: 'Front Bumper Cover - Nightfall Gray', price: 240, condition: 'B - Good', availability: 'In Stock', dateAdded: '2024-11-25' },
  { id: 'p21', stockNumber: 'ESK-2421', year: 2017, make: 'Toyota', model: 'Tundra', partType: 'Engine', partCategory: 'engine', description: '5.7L V8 Engine Assembly 3UR-FE', price: 3800, condition: 'A - Excellent', availability: 'In Stock', mileage: 72000, warranty: '90-day warranty', fitmentNotes: 'Fits 2014-2021 Tundra/Sequoia 5.7L', dateAdded: '2024-11-24' },
  { id: 'p22', stockNumber: 'ESK-2422', year: 2019, make: 'Dodge', model: 'Charger', partType: 'Transmission', partCategory: 'transmission', description: '8-Speed Automatic Transmission 8HP70', price: 2200, condition: 'A - Excellent', availability: 'In Stock', mileage: 48000, warranty: '90-day warranty', fitmentNotes: 'Fits 2015-2023 Charger/Challenger 5.7L/6.4L', dateAdded: '2024-11-23' },
  { id: 'p23', stockNumber: 'ESK-2423', year: 2020, make: 'Ford', model: 'F-150', partType: 'Tire & Rim', partCategory: 'tires-rims', description: '18" OEM Chrome Wheel with All-Terrain Tire', price: 310, condition: 'B - Good', availability: 'In Stock', fitmentNotes: '6x135 bolt pattern', dateAdded: '2024-11-22' },
  { id: 'p24', stockNumber: 'ESK-2424', year: 2015, make: 'Honda', model: 'Civic', partType: 'Alternator', partCategory: 'electrical', description: 'Alternator Assembly 1.8L', price: 145, condition: 'A - Excellent', availability: 'In Stock', warranty: '60-day warranty', dateAdded: '2024-11-21' },
  { id: 'p25', stockNumber: 'ESK-2425', year: 2018, make: 'Toyota', model: 'Highlander', partType: 'Door Assembly', partCategory: 'body', description: 'Rear Left Door Assembly - Midnight Black', price: 475, condition: 'A - Excellent', availability: 'In Stock', dateAdded: '2024-11-20' },
  { id: 'p26', stockNumber: 'ESK-2426', year: 2016, make: 'Chevrolet', model: 'Tahoe', partType: 'Engine', partCategory: 'engine', description: '5.3L V8 Engine Assembly EcoTec3', price: 3100, condition: 'B - Good', availability: 'In Stock', mileage: 118000, warranty: '60-day warranty', dateAdded: '2024-11-19' },
  { id: 'p27', stockNumber: 'ESK-2427', year: 2019, make: 'Ford', model: 'Ranger', partType: 'Transmission', partCategory: 'transmission', description: '10-Speed Automatic Transmission 10R80', price: 2600, condition: 'A - Excellent', availability: 'In Stock', mileage: 38000, warranty: '90-day warranty', fitmentNotes: 'Fits 2019-2023 Ranger 2.3L EcoBoost', dateAdded: '2024-11-18' },
  { id: 'p28', stockNumber: 'ESK-2428', year: 2017, make: 'Dodge', model: 'Journey', partType: 'Strut Assembly', partCategory: 'suspension', description: 'Front Strut Assembly - Pair', price: 265, condition: 'B - Good', availability: 'In Stock', dateAdded: '2024-11-17' },
  { id: 'p29', stockNumber: 'ESK-2429', year: 2020, make: 'Toyota', model: 'Camry', partType: 'Trunk Lid', partCategory: 'body', description: 'Trunk Lid Assembly - Celestial Silver', price: 360, condition: 'A - Excellent', availability: 'In Stock', dateAdded: '2024-11-16' },
  { id: 'p30', stockNumber: 'ESK-2430', year: 2018, make: 'Honda', model: 'Odyssey', partType: 'Sliding Door', partCategory: 'body', description: 'Right Power Sliding Door Assembly - White', price: 650, condition: 'A - Excellent', availability: 'In Stock', warranty: '60-day warranty', dateAdded: '2024-11-15' },
];

const mockVehicles: Vehicle[] = [
  { id: 'v1', stockNumber: 'ESK-V101', year: 2019, make: 'Ford', model: 'F-150', trim: 'XLT SuperCrew', color: 'Oxford White', mileage: 68000, dateArrived: '2024-12-15', status: 'Dismantling', partsAvailable: ['Engine 3.5L EcoBoost', 'Transmission', 'Doors', 'Tailgate', 'Headlights', 'Wheels'] },
  { id: 'v2', stockNumber: 'ESK-V102', year: 2020, make: 'Toyota', model: 'Camry', trim: 'SE', color: 'Midnight Black', mileage: 42000, dateArrived: '2024-12-14', status: 'Dismantling', partsAvailable: ['Transmission', 'Front Bumper', 'Hood', 'Fenders', 'Interior Parts'] },
  { id: 'v3', stockNumber: 'ESK-V103', year: 2017, make: 'Chevrolet', model: 'Silverado 1500', trim: 'LT Crew Cab', color: 'Silver Ice', mileage: 95000, dateArrived: '2024-12-12', status: 'Dismantling', partsAvailable: ['Engine 5.3L V8', 'Transfer Case', 'Bed', 'Tailgate', 'Mirrors'] },
  { id: 'v4', stockNumber: 'ESK-V104', year: 2021, make: 'Honda', model: 'CR-V', trim: 'EX-L AWD', color: 'Lunar Silver', mileage: 31000, dateArrived: '2024-12-10', status: 'Available', partsAvailable: ['Engine 1.5T', 'CVT Transmission', 'All Body Panels', 'Interior', 'Electronics'] },
  { id: 'v5', stockNumber: 'ESK-V105', year: 2018, make: 'Dodge', model: 'Ram 1500', trim: 'Big Horn', color: 'Granite Crystal', mileage: 110000, dateArrived: '2024-12-08', status: 'Dismantling', partsAvailable: ['Transmission 8-Speed', 'Bumpers', 'Box Sides', 'Seats'] },
  { id: 'v6', stockNumber: 'ESK-V106', year: 2020, make: 'Ford', model: 'Explorer', trim: 'XLT 4WD', color: 'Agate Black', mileage: 54000, dateArrived: '2024-12-05', status: 'Available', partsAvailable: ['Engine 2.3L EcoBoost', 'Transmission', 'Hood', 'Headlights', 'Wheels'] },
  { id: 'v7', stockNumber: 'ESK-V107', year: 2019, make: 'Toyota', model: 'Tacoma', trim: 'TRD Off-Road', color: 'Cement', mileage: 62000, dateArrived: '2024-12-03', status: 'Dismantling', partsAvailable: ['Engine 3.5L V6', 'Tailgate', 'Fenders', 'Grille', 'Suspension'] },
  { id: 'v8', stockNumber: 'ESK-V108', year: 2016, make: 'Chevrolet', model: 'Equinox', trim: 'LT AWD', color: 'Tungsten Metallic', mileage: 125000, dateArrived: '2024-11-30', status: 'Dismantling', partsAvailable: ['Engine 2.4L', 'Doors', 'Hatch', 'Mirrors', 'Wheels'] },
];

export class MockInventoryProvider implements InventoryProvider {
  async searchParts(filters: SearchFilters, page = 1, pageSize = 12): Promise<SearchResult> {
    let results = [...mockParts];

    if (filters.query) {
      const q = filters.query.toLowerCase();
      results = results.filter(p =>
        p.description.toLowerCase().includes(q) ||
        p.make.toLowerCase().includes(q) ||
        p.model.toLowerCase().includes(q) ||
        p.partType.toLowerCase().includes(q) ||
        p.stockNumber.toLowerCase().includes(q)
      );
    }
    if (filters.year) results = results.filter(p => p.year === filters.year);
    if (filters.make) results = results.filter(p => p.make === filters.make);
    if (filters.model) results = results.filter(p => p.model === filters.model);
    if (filters.partType) results = results.filter(p => p.partType === filters.partType);
    if (filters.partCategory) results = results.filter(p => p.partCategory === filters.partCategory);
    if (filters.condition) results = results.filter(p => p.condition === filters.condition);
    if (filters.stockNumber) results = results.filter(p => p.stockNumber.toLowerCase().includes(filters.stockNumber!.toLowerCase()));
    if (filters.minPrice) results = results.filter(p => p.price >= filters.minPrice!);
    if (filters.maxPrice) results = results.filter(p => p.price <= filters.maxPrice!);

    if (filters.availability) {
      results = results.filter(p => p.availability === filters.availability);
    } else {
      results = results.filter(p => p.availability === 'In Stock');
    }

    const total = results.length;
    const start = (page - 1) * pageSize;
    const paged = results.slice(start, start + pageSize);

    return { parts: paged, total, page, pageSize };
  }

  async getPartById(id: string): Promise<Part | null> {
    return mockParts.find(p => p.id === id) ?? null;
  }

  async getLatestArrivals(limit = 8): Promise<Vehicle[]> {
    return [...mockVehicles]
      .sort((a, b) => new Date(b.dateArrived).getTime() - new Date(a.dateArrived).getTime())
      .slice(0, limit);
  }

  async getVehicleById(id: string): Promise<Vehicle | null> {
    return mockVehicles.find(v => v.id === id) ?? null;
  }

  async getMakes(): Promise<string[]> {
    return [...new Set(mockParts.map(p => p.make))].sort();
  }

  async getModels(make: string): Promise<string[]> {
    return [...new Set(mockParts.filter(p => p.make === make).map(p => p.model))].sort();
  }

  async getPartTypes(): Promise<string[]> {
    return [...new Set(mockParts.map(p => p.partType))].sort();
  }

  async getYears(): Promise<number[]> {
    return [...new Set(mockParts.map(p => p.year))].sort((a, b) => b - a);
  }
}

// Use Firebase as primary provider, mock as fallback for parts search
import { firebaseInventoryProvider } from './firebase-inventory';
export const inventoryProvider = firebaseInventoryProvider;
