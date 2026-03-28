import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { firebaseInventoryProvider } from '@/lib/firebase-inventory';
import type { Vehicle } from '@/lib/inventory-adapter';
import { Car, Search, X } from 'lucide-react';
import { CallToAction } from '@/components/layout/CallToAction';
import { useSEO } from '@/hooks/useSEO';
import recyclerYard from '@/assets/recycler-yard.jpg';

export default function LatestArrivals() {
  useSEO({
    title: 'Latest Vehicle Arrivals | Eskimo Auto & Truck Parts Edmonton',
    description: 'See the latest vehicles arriving at our Edmonton yard. Fresh parts being pulled now. Call (780) 473-2424.',
  });

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    firebaseInventoryProvider.getAllVehicles().then(v => {
      setVehicles(v);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  // Derive makes with counts
  const makeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const v of vehicles) {
      if (v.make) counts[v.make] = (counts[v.make] || 0) + 1;
    }
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [vehicles]);

  // Derive models for selected make
  const availableModels = useMemo(() => {
    if (!selectedMake) return [];
    return [...new Set(vehicles.filter(v => v.make === selectedMake).map(v => v.model).filter(Boolean))].sort();
  }, [vehicles, selectedMake]);

  // Derive years
  const availableYears = useMemo(() => {
    return [...new Set(vehicles.map(v => v.year).filter(y => y > 0))].sort((a, b) => b - a);
  }, [vehicles]);

  // Filter
  const filtered = useMemo(() => {
    let result = vehicles;
    if (selectedMake) result = result.filter(v => v.make === selectedMake);
    if (selectedModel) result = result.filter(v => v.model === selectedModel);
    if (selectedYear) result = result.filter(v => v.year === parseInt(selectedYear));
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(v =>
        `${v.year} ${v.make} ${v.model} ${v.trim || ''} ${v.stockNumber}`.toLowerCase().includes(q)
      );
    }
    return result;
  }, [vehicles, selectedMake, selectedModel, selectedYear, searchQuery]);

  const clearFilters = () => {
    setSelectedMake('');
    setSelectedModel('');
    setSelectedYear('');
    setSearchQuery('');
  };

  const hasFilters = selectedMake || selectedModel || selectedYear || searchQuery;

  return (
    <div className="pb-20 lg:pb-0">
      <div className="relative bg-primary text-primary-foreground py-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={recyclerYard} alt="Eskimo Auto recycler yard latest arrivals" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-bold text-primary-foreground">Latest Arrivals</h1>
          <p className="text-primary-foreground/70 mt-1 text-sm">Fresh vehicles recently arrived at our Edmonton yard — parts are being pulled now</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Browse by Make */}
        {!loading && makeCounts.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Browse by Make</h2>
            <div className="flex flex-wrap gap-2">
              {makeCounts.map(({ name, count }) => (
                <button
                  key={name}
                  onClick={() => {
                    setSelectedMake(selectedMake === name ? '' : name);
                    setSelectedModel('');
                  }}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                    selectedMake === name
                      ? 'bg-accent text-accent-foreground border-accent'
                      : 'bg-card border-border hover:border-accent/50'
                  }`}
                >
                  {name} <span className="text-xs opacity-70">({count})</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search vehicles..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          {selectedMake && availableModels.length > 0 && (
            <select
              value={selectedModel}
              onChange={e => setSelectedModel(e.target.value)}
              className="px-3 py-2 rounded-md border border-border bg-background text-sm"
            >
              <option value="">All Models</option>
              {availableModels.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          )}
          <select
            value={selectedYear}
            onChange={e => setSelectedYear(e.target.value)}
            className="px-3 py-2 rounded-md border border-border bg-background text-sm"
          >
            <option value="">All Years</option>
            {availableYears.map(y => <option key={y} value={String(y)}>{y}</option>)}
          </select>
          {hasFilters && (
            <button onClick={clearFilters} className="flex items-center gap-1 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-3.5 h-3.5" /> Clear
            </button>
          )}
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-4">
          {loading ? 'Loading...' : `${filtered.length} vehicle${filtered.length !== 1 ? 's' : ''} found`}
        </p>

        {/* Vehicle grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-card border border-border rounded-lg h-64 animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12">
            <Car className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
            <h3 className="font-bold mb-1">No vehicles match your filters</h3>
            <p className="text-sm text-muted-foreground mb-4">Try adjusting your search or browse all vehicles.</p>
            {hasFilters && (
              <button onClick={clearFilters} className="text-accent font-semibold text-sm hover:underline">
                Clear all filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(v => (
              <Link key={v.id} to={`/latest-arrivals/${v.id}`} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/10] bg-muted overflow-hidden">
                  {v.imageUrl || (v.images && v.images[0]) ? (
                    <img
                      src={v.imageUrl || v.images?.[0]}
                      alt={`${v.year} ${v.make} ${v.model}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Car className="w-10 h-10 text-muted-foreground/30" />
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-bold text-sm">{v.year} {v.make} {v.model}</p>
                      {v.trim && <p className="text-xs text-muted-foreground">{v.trim}</p>}
                    </div>
                    <span className="text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded shrink-0">#{v.stockNumber}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${v.status === 'Available' ? 'bg-success/10 text-success' : 'bg-accent/10 text-accent'}`}>
                      {v.status === 'Dismantling' ? 'Now Dismantling' : v.status}
                    </span>
                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                      {v.mileage && <span>{v.mileage.toLocaleString()} km</span>}
                    </div>
                  </div>
                  {v.partsAvailable && v.partsAvailable.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {v.partsAvailable.slice(0, 3).map(p => (
                        <span key={p} className="text-[10px] bg-secondary px-2 py-0.5 rounded text-secondary-foreground">{p}</span>
                      ))}
                      {v.partsAvailable.length > 3 && <span className="text-[10px] text-muted-foreground">+{v.partsAvailable.length - 3} more</span>}
                    </div>
                  )}
                  <p className="text-xs text-accent font-medium mt-2">View Parts from This Vehicle →</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <CallToAction title="Looking for a Specific Part?" description="Can't find it in our latest arrivals? Call us — we source parts from our network across Western Canada." linkTo="/search-inventory" linkLabel="Search Full Inventory" />
    </div>
  );
}
