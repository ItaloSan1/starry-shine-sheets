import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { mongoInventoryProvider } from '@/lib/mongo-inventory';
import type { Vehicle } from '@/lib/inventory-adapter';
import { Car, Search, X, ChevronLeft, ChevronRight, ChevronDown, Filter } from 'lucide-react';
import { CallToAction } from '@/components/layout/CallToAction';
import { useSEO } from '@/hooks/useSEO';
import recyclerYard from '@/assets/recycler-yard.jpg';
import { ScrollArea } from '@/components/ui/scroll-area';

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

  // Makes for sidebar
  const [makeCounts, setMakeCounts] = useState<{ name: string; count: number }[]>([]);
  const [availableModels, setAvailableModels] = useState<string[]>([]);

  // Mobile sidebar toggle
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchQuery), 400);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Load makes on mount (single cached call)
  useEffect(() => {
    mongoInventoryProvider.getMakesWithCounts().then(setMakeCounts).catch(() => {});
  }, []);

  // Load models when make changes
  useEffect(() => {
    if (selectedMake) {
      mongoInventoryProvider.getModels(selectedMake).then(setAvailableModels);
    } else {
      setAvailableModels([]);
    }
  }, [selectedMake]);

  // Fetch vehicles
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

  // Years for filter (fast dedicated endpoint, cached)
  const [availableYears, setAvailableYears] = useState<number[]>([]);
  useEffect(() => {
    mongoInventoryProvider.getYears().then(setAvailableYears).catch(() => {});
  }, []);

  const clearFilters = () => {
    setSelectedMake('');
    setSelectedModel('');
    setSelectedYear('');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const hasFilters = selectedMake || selectedModel || selectedYear || searchQuery;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedMake, selectedModel, selectedYear, debouncedSearch, pageSize]);

  // Group makes alphabetically
  const groupedMakes = useMemo(() => {
    const sorted = [...makeCounts].sort((a, b) => a.name.localeCompare(b.name));
    const groups: Record<string, { name: string; count: number }[]> = {};
    sorted.forEach(m => {
      const letter = m.name.charAt(0).toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(m);
    });
    return groups;
  }, [makeCounts]);

  const letters = Object.keys(groupedMakes).sort();

  const handleSelectMake = (name: string) => {
    setSelectedMake(selectedMake === name ? '' : name);
    setSelectedModel('');
    setMobileFilterOpen(false);
  };

  // Sidebar content (shared between desktop and mobile)
  const sidebarContent = (
    <nav aria-label="Filter by make">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Makes (A–Z)</h2>
        {selectedMake && (
          <button
            onClick={() => { setSelectedMake(''); setSelectedModel(''); }}
            className="text-[10px] text-accent hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      {letters.map(letter => (
        <div key={letter} className="mb-2">
          <div className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest mb-0.5 px-1">
            {letter}
          </div>
          {groupedMakes[letter].map(({ name, count }) => (
            <div key={name}>
              <button
                onClick={() => handleSelectMake(name)}
                className={`w-full text-left px-2 py-1 rounded text-sm transition-colors flex items-center justify-between group ${
                  selectedMake === name
                    ? 'bg-accent text-accent-foreground font-semibold'
                    : 'hover:bg-muted text-foreground'
                }`}
              >
                <span className="truncate">{name}</span>
                <span className={`text-[10px] tabular-nums ${
                  selectedMake === name ? 'text-accent-foreground/70' : 'text-muted-foreground'
                }`}>
                  {count}
                </span>
              </button>
              {/* Show models indented when make is selected */}
              {selectedMake === name && availableModels.length > 0 && (
                <div className="ml-3 mt-0.5 mb-1 border-l-2 border-accent/20 pl-2">
                  <button
                    onClick={() => setSelectedModel('')}
                    className={`w-full text-left px-1.5 py-0.5 rounded text-xs transition-colors ${
                      !selectedModel ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    All Models
                  </button>
                  {availableModels.map(m => (
                    <button
                      key={m}
                      onClick={() => setSelectedModel(selectedModel === m ? '' : m)}
                      className={`w-full text-left px-1.5 py-0.5 rounded text-xs transition-colors ${
                        selectedModel === m ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </nav>
  );

  return (
    <div className="pb-20 lg:pb-0">
      {/* Hero */}
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
        <div className="flex gap-6">
          {/* Desktop Sidebar */}
          {makeCounts.length > 0 && (
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-20">
                <ScrollArea className="h-[calc(100vh-8rem)]">
                  <div className="pr-3">
                    {sidebarContent}
                  </div>
                </ScrollArea>
              </div>
            </aside>
          )}

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Mobile filter toggle */}
            {makeCounts.length > 0 && (
              <div className="lg:hidden mb-4">
                <button
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-card text-sm font-medium w-full justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    {selectedMake ? `Make: ${selectedMake}` : 'Browse by Make'}
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileFilterOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileFilterOpen && (
                  <div className="mt-2 p-3 border border-border rounded-md bg-card max-h-64 overflow-y-auto">
                    {sidebarContent}
                  </div>
                )}
              </div>
            )}

            {/* Filters row */}
            <div className="flex flex-wrap gap-3 mb-4">
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
              {/* Model dropdown only on desktop (sidebar handles it), or if make selected on mobile */}
              {selectedMake && availableModels.length > 0 && (
                <select
                  value={selectedModel}
                  onChange={e => setSelectedModel(e.target.value)}
                  className="px-3 py-2 rounded-md border border-border bg-background text-sm lg:hidden"
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
                <option value="50">50 / page</option>
                <option value="100">100 / page</option>
                <option value="150">150 / page</option>
                <option value="200">200 / page</option>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
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
        </div>
      </div>
      <CallToAction title="Looking for a Specific Part?" description="Can't find it in our latest arrivals? Call us — we source parts from our network across Western Canada." linkTo="/search-inventory" linkLabel="Search Full Inventory" />
    </div>
  );
}
