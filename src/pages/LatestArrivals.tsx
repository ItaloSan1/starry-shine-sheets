import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { mongoInventoryProvider } from '@/lib/mongo-inventory';
import type { Vehicle } from '@/lib/inventory-adapter';
import { Car, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [totalVehicles, setTotalVehicles] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [totalPages, setTotalPages] = useState(1);

  // Filters
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Makes for filter chips
  const [makeCounts, setMakeCounts] = useState<{ name: string; count: number }[]>([]);
  const [availableModels, setAvailableModels] = useState<string[]>([]);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchQuery), 400);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Load makes on mount
  useEffect(() => {
    mongoInventoryProvider.getMakes().then(makes => {
      // getMakes returns string[], but the edge function returns {name, count}
      // We need to call the raw API for counts
      fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/mongo-inventory?action=makes`, {
        headers: {
          'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
      }).then(r => r.json()).then(data => {
        setMakeCounts(data.makes || []);
      }).catch(() => {
        setMakeCounts(makes.map(m => ({ name: m, count: 0 })));
      });
    });
  }, []);

  // Load models when make changes
  useEffect(() => {
    if (selectedMake) {
      mongoInventoryProvider.getModels(selectedMake).then(setAvailableModels);
    } else {
      setAvailableModels([]);
    }
  }, [selectedMake]);

  // Fetch vehicles with server-side pagination/filtering
  useEffect(() => {
    setLoading(true);
    mongoInventoryProvider.getVehiclesPaginated({
      page: currentPage,
      pageSize,
      make: selectedMake || undefined,
      model: selectedModel || undefined,
      year: selectedYear || undefined,
      search: debouncedSearch || undefined,
    }).then(result => {
      setVehicles(result.vehicles);
      setTotalVehicles(result.total);
      setTotalPages(result.totalPages);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [currentPage, pageSize, selectedMake, selectedModel, selectedYear, debouncedSearch]);

  // Derive years from first page for filter dropdown
  const [availableYears, setAvailableYears] = useState<number[]>([]);
  useEffect(() => {
    // Fetch a large batch just for years
    mongoInventoryProvider.getVehiclesPaginated({ page: 1, pageSize: 200 }).then(result => {
      const years = [...new Set(result.vehicles.map(v => v.year).filter(y => y > 0))].sort((a, b) => b - a);
      setAvailableYears(years);
    });
  }, []);

  const clearFilters = () => {
    setSelectedMake('');
    setSelectedModel('');
    setSelectedYear('');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const hasFilters = selectedMake || selectedModel || selectedYear || searchQuery;

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedMake, selectedModel, selectedYear, debouncedSearch, pageSize]);

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
        {makeCounts.length > 0 && (
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
          <select
            value={String(pageSize)}
            onChange={e => setPageSize(parseInt(e.target.value))}
            className="px-3 py-2 rounded-md border border-border bg-background text-sm"
          >
            <option value="50">50 per page</option>
            <option value="100">100 per page</option>
            <option value="150">150 per page</option>
            <option value="200">200 per page</option>
          </select>
          {hasFilters && (
            <button onClick={clearFilters} className="flex items-center gap-1 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-3.5 h-3.5" /> Clear
            </button>
          )}
        </div>

        {/* Results count + pagination */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">
            {loading ? 'Loading...' : `${totalVehicles} vehicle${totalVehicles !== 1 ? 's' : ''} found`}
          </p>
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className="p-1.5 rounded-md border border-border hover:bg-muted disabled:opacity-30 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage >= totalPages}
                className="p-1.5 rounded-md border border-border hover:bg-muted disabled:opacity-30 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Vehicle grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-card border border-border rounded-lg h-64 animate-pulse" />
            ))}
          </div>
        ) : vehicles.length === 0 ? (
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
            {vehicles.map(v => (
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
                  <p className="text-xs text-accent font-medium mt-2">View Parts from This Vehicle →</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Bottom pagination */}
        {totalPages > 1 && !loading && (
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className="px-4 py-2 rounded-md border border-border hover:bg-muted disabled:opacity-30 text-sm transition-colors"
            >
              Previous
            </button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
              className="px-4 py-2 rounded-md border border-border hover:bg-muted disabled:opacity-30 text-sm transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
      <CallToAction title="Looking for a Specific Part?" description="Can't find it in our latest arrivals? Call us — we source parts from our network across Western Canada." linkTo="/search-inventory" linkLabel="Search Full Inventory" />
    </div>
  );
}
