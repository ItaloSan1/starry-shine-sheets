import { useEffect, useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useSEO } from '@/hooks/useSEO';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CallToAction } from '@/components/layout/CallToAction';
import { BUSINESS } from '@/lib/constants';
import { formatCad } from '@/lib/pricing';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, X, ChevronLeft, ChevronRight, ChevronDown, Filter } from 'lucide-react';

const PAGE_SIZE = 30;

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Remanufactured Engines', to: '/remanufactured-engines' },
  { label: 'ATK Engines' },
];

// Group engine_make_size categories alphabetically by manufacturer
const MAKE_GROUPS: Record<string, string[]> = {
  'AMC': ['AMC/Jeep I6'],
  'Chrysler / Mopar': ['Chrysler L4', 'Chrysler V6', 'Chrysler V8', 'Mopar Gen III Hemi', 'Mopar Small Block LA', 'Mopar Small Block Magnum'],
  'Ford': ['Ford Big Block', 'Ford Coyote', 'Ford Diesel', 'Ford I6', 'Ford L4', 'Ford Modular', 'Ford Small Block', 'Ford V10', 'Ford V6'],
  'GM / Chevrolet': ['Chevy Big Block', 'Chevy Small Block', 'GM Diesel', 'GM Gen III/IV LS', 'GM I6', 'GM L4', 'GM V6', 'GM V8'],
  'Honda / Acura': ['Honda L4', 'Honda V6'],
  'Hyundai': ['Hyundai L4', 'Hyundai V6'],
  'Isuzu': ['Isuzu L4', 'Isuzu V6'],
  'Jeep': ['Jeep I6', 'Jeep L4'],
  'Kia': ['Kia L4', 'Kia V6'],
  'Mazda': ['Mazda L4', 'Mazda V6'],
  'Mitsubishi': ['Mitsubishi L4', 'Mitsubishi V6'],
  'Nissan / Infiniti': ['Nissan L4', 'Nissan V6', 'Nissan V8'],
  'Subaru': ['Subaru H4', 'Subaru L4'],
  'Suzuki': ['Suzuki L4'],
  'Toyota / Lexus': ['Toyota L4', 'Toyota V6', 'Toyota V8'],
};

interface Engine {
  id: string;
  name: string;
  slug: string;
  engine_make_size: string | null;
  displacement: string | null;
  price_usd: number;
  image_url: string | null;
  category: string | null;
  fits_vehicles: string | null;
}

export default function RemanufacturedEnginesATK() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const initialMakeGroup = searchParams.get('make') || '';

  const [engines, setEngines] = useState<Engine[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price_asc' | 'price_desc'>('name');
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});
  const [displacementsByCategory, setDisplacementsByCategory] = useState<Record<string, string[]>>({});
  const [selectedDisplacement, setSelectedDisplacement] = useState('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(initialMakeGroup ? [initialMakeGroup] : []));

  useSEO({
    title: `ATK Remanufactured Engines${selectedCategory ? ` — ${selectedCategory}` : ''} | ${BUSINESS.name}`,
    description: `Browse ATK remanufactured engines${selectedCategory ? ` — ${selectedCategory}` : ''}. Over 1,000 engines with warranty. Edmonton's trusted auto parts since ${BUSINESS.established}.`,
  });

  // Debounce search
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchQuery), 400);
    return () => clearTimeout(t);
  }, [searchQuery]);

  // Load category counts and displacements per category
  useEffect(() => {
    supabase
      .from('remanufactured_engines')
      .select('engine_make_size, displacement')
      .eq('active', true)
      .then(({ data }) => {
        if (!data) return;
        const counts: Record<string, number> = {};
        const dispMap: Record<string, Set<string>> = {};
        data.forEach((r: any) => {
          const cat = r.engine_make_size || 'Other';
          counts[cat] = (counts[cat] || 0) + 1;
          if (r.displacement) {
            if (!dispMap[cat]) dispMap[cat] = new Set();
            dispMap[cat].add(r.displacement);
          }
        });
        setCategoryCounts(counts);
        const dispResult: Record<string, string[]> = {};
        Object.entries(dispMap).forEach(([cat, set]) => {
          dispResult[cat] = Array.from(set).sort();
        });
        setDisplacementsByCategory(dispResult);
      });
  }, []);

  // If make group is set from URL, expand and select first category match
  useEffect(() => {
    if (initialMakeGroup && !selectedCategory) {
      const group = MAKE_GROUPS[initialMakeGroup];
      if (group) {
        setExpandedGroups(new Set([initialMakeGroup]));
      }
    }
  }, [initialMakeGroup]);

  // Fetch engines
  useEffect(() => {
    setLoading(true);
    let query = supabase
      .from('remanufactured_engines')
      .select('id, name, slug, engine_make_size, displacement, price_usd, image_url, category, fits_vehicles', { count: 'exact' })
      .eq('active', true);

    if (selectedCategory) {
      query = query.eq('engine_make_size', selectedCategory);
    } else if (initialMakeGroup && MAKE_GROUPS[initialMakeGroup]) {
      query = query.in('engine_make_size', MAKE_GROUPS[initialMakeGroup]);
    }

    if (selectedDisplacement) {
      query = query.eq('displacement', selectedDisplacement);
    }

    if (debouncedSearch) {
      query = query.ilike('name', `%${debouncedSearch}%`);
    }

    if (sortBy === 'price_asc') query = query.order('price_usd', { ascending: true });
    else if (sortBy === 'price_desc') query = query.order('price_usd', { ascending: false });
    else query = query.order('name', { ascending: true });

    const from = (currentPage - 1) * PAGE_SIZE;
    query = query.range(from, from + PAGE_SIZE - 1);

    query.then(({ data, count }) => {
      setEngines((data as Engine[]) || []);
      setTotalCount(count || 0);
      setLoading(false);
    });
  }, [currentPage, selectedCategory, selectedDisplacement, debouncedSearch, sortBy, initialMakeGroup]);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  function handleCategorySelect(cat: string) {
    const newCat = cat === selectedCategory ? '' : cat;
    setSelectedCategory(newCat);
    setSelectedDisplacement('');
    setCurrentPage(1);
    setMobileFilterOpen(false);
  }

  function toggleGroup(group: string) {
    setExpandedGroups(prev => {
      const next = new Set(prev);
      next.has(group) ? next.delete(group) : next.add(group);
      return next;
    });
  }

  function getGroupCount(makes: string[]) {
    return makes.reduce((sum, m) => sum + (categoryCounts[m] || 0), 0);
  }

  const sidebar = (
    <nav aria-label="Filter by engine type" className="space-y-1">
      <button
        onClick={() => { setSelectedCategory(''); setCurrentPage(1); setMobileFilterOpen(false); }}
        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${!selectedCategory ? 'bg-accent text-accent-foreground' : 'hover:bg-secondary text-foreground'}`}
      >
        All Engines <span className="text-xs opacity-70">({Object.values(categoryCounts).reduce((a, b) => a + b, 0)})</span>
      </button>

      {Object.entries(MAKE_GROUPS).map(([group, makes]) => {
        const groupCount = getGroupCount(makes);
        if (groupCount === 0) return null;
        const isExpanded = expandedGroups.has(group);
        return (
          <div key={group}>
            <button
              onClick={() => toggleGroup(group)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              <span>{group} <span className="text-xs text-muted-foreground">({groupCount})</span></span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
            {isExpanded && (
              <div className="ml-3 space-y-0.5">
                {makes.filter(m => (categoryCounts[m] || 0) > 0).map(m => (
                  <button
                    key={m}
                    onClick={() => handleCategorySelect(m)}
                    className={`w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${selectedCategory === m ? 'bg-accent text-accent-foreground font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-secondary'}`}
                  >
                    {m} <span className="text-xs">({categoryCounts[m] || 0})</span>
                  </button>
                ))}
                {/* Displacement filter within selected category */}
                {selectedCategory && makes.includes(selectedCategory) && displacementsByCategory[selectedCategory]?.length > 0 && (
                  <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-accent/20 pl-2">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-1">Displacement</span>
                    <button
                      onClick={() => { setSelectedDisplacement(''); setCurrentPage(1); }}
                      className={`w-full text-left px-2 py-1 rounded text-xs transition-colors ${!selectedDisplacement ? 'bg-accent/20 text-accent font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-secondary'}`}
                    >
                      All
                    </button>
                    {displacementsByCategory[selectedCategory].map(d => (
                      <button
                        key={d}
                        onClick={() => { setSelectedDisplacement(d === selectedDisplacement ? '' : d); setCurrentPage(1); }}
                        className={`w-full text-left px-2 py-1 rounded text-xs transition-colors ${selectedDisplacement === d ? 'bg-accent/20 text-accent font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-secondary'}`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-2xl md:text-4xl font-extrabold mt-3 mb-2">
            ATK Remanufactured <span className="text-accent">Engines</span>
          </h1>
          <p className="text-primary-foreground/70 text-sm md:text-base">
            {totalCount > 0 ? `${totalCount.toLocaleString()} engines` : 'Loading...'} available
            {selectedCategory ? ` in ${selectedCategory}` : ''}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Mobile filter toggle */}
        <button
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          className="lg:hidden flex items-center gap-2 mb-4 text-sm font-semibold text-accent"
        >
          <Filter className="w-4 h-4" />
          {mobileFilterOpen ? 'Hide Filters' : 'Show Filters'}
        </button>

        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className={`${mobileFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 shrink-0`}>
            <ScrollArea className="lg:h-[calc(100vh-200px)] lg:sticky lg:top-24">
              <div className="pr-3">
                {sidebar}
              </div>
            </ScrollArea>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Search + Sort bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search engines..."
                  value={searchQuery}
                  onChange={e => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                  className="w-full pl-9 pr-8 py-2 rounded-lg border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                )}
              </div>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded-lg border border-border bg-card text-foreground text-sm"
              >
                <option value="name">Sort: Name</option>
                <option value="price_asc">Price: Low → High</option>
                <option value="price_desc">Price: High → Low</option>
              </select>
            </div>

            {/* Results */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl h-72 animate-pulse" />
                ))}
              </div>
            ) : engines.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <p className="text-lg font-semibold mb-2">No engines found</p>
                <p className="text-sm">Try adjusting your filters or search query.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {engines.map(engine => (
                    <Link
                      key={engine.id}
                      to={`/remanufactured-engines/atk/${engine.slug}`}
                      className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-md transition-all"
                    >
                      <div className="aspect-[4/3] bg-secondary/50 overflow-hidden">
                        {engine.image_url ? (
                          <img
                            src={engine.image_url}
                            alt={engine.name}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/placeholder.svg';
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">No Image</div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors mb-1">
                          {engine.name}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          {engine.displacement && <span className="bg-secondary px-2 py-0.5 rounded-full">{engine.displacement}</span>}
                          {engine.engine_make_size && <span className="bg-secondary px-2 py-0.5 rounded-full">{engine.engine_make_size}</span>}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-accent">{formatCad(engine.price_usd)}</span>
                          <span className="text-xs text-accent font-medium group-hover:underline">View Details →</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-8">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => { setCurrentPage(p => p - 1); window.scrollTo(0, 0); }}
                      className="p-2 rounded-lg border border-border hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-sm text-muted-foreground px-3">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => { setCurrentPage(p => p + 1); window.scrollTo(0, 0); }}
                      className="p-2 rounded-lg border border-border hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <CallToAction title="Need Help Finding the Right Engine?" linkTo="/request-a-part" linkLabel="Request a Quote" />
    </>
  );
}
