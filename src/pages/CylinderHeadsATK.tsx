import { useEffect, useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useSEO } from '@/hooks/useSEO';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CallToAction } from '@/components/layout/CallToAction';
import { BUSINESS } from '@/lib/constants';
import { formatCad, CYLINDER_HEAD_MARKUP } from '@/lib/pricing';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, X, ChevronLeft, ChevronRight, ChevronDown, Filter } from 'lucide-react';

const PAGE_SIZE = 30;

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Remanufactured Cylinder Heads', to: '/remanufactured-cylinder-heads' },
  { label: 'ATK Cylinder Heads' },
];

const MAKE_GROUPS: Record<string, string[]> = {
  'GM / Chevrolet': ['GM V8 Head', 'GM V6 Head', 'GM L4 Head', 'Chevy Small Block Head', 'Chevy Big Block Head', 'GM LS Head'],
  'Ford': ['Ford V8 Head', 'Ford V6 Head', 'Ford L4 Head', 'Ford Modular Head', 'Ford Small Block Head'],
  'Chrysler / Mopar': ['Chrysler V8 Head', 'Chrysler V6 Head', 'Chrysler L4 Head', 'Mopar Hemi Head'],
  'Toyota / Lexus': ['Toyota V6 Head', 'Toyota L4 Head', 'Toyota V8 Head'],
  'Honda / Acura': ['Honda V6 Head', 'Honda L4 Head'],
  'Nissan / Infiniti': ['Nissan V6 Head', 'Nissan L4 Head'],
  'Other Makes': ['Jeep Head', 'Mazda Head', 'Hyundai Head', 'Subaru Head', 'Mitsubishi Head'],
};

interface CylinderHead {
  id: string;
  name: string;
  slug: string;
  engine_make_size: string | null;
  displacement: string | null;
  price_usd: number;
  image_url: string | null;
}

export default function CylinderHeadsATK() {
  const [searchParams] = useSearchParams();
  const initialMakeGroup = searchParams.get('make') || '';

  const [heads, setHeads] = useState<CylinderHead[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price_asc' | 'price_desc'>('name');
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});
  const [displacementsByCategory, setDisplacementsByCategory] = useState<Record<string, string[]>>({});
  const [selectedDisplacement, setSelectedDisplacement] = useState('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(initialMakeGroup ? [initialMakeGroup] : []));

  useSEO({
    title: `ATK Remanufactured Cylinder Heads${selectedCategory ? ` — ${selectedCategory}` : ''} | ${BUSINESS.name}`,
    description: `Browse ATK remanufactured cylinder heads${selectedCategory ? ` — ${selectedCategory}` : ''}. Pressure tested, warranty-backed. ${BUSINESS.phone}.`,
  });

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchQuery), 400);
    return () => clearTimeout(t);
  }, [searchQuery]);

  useEffect(() => {
    supabase
      .from('cylinder_heads')
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

  useEffect(() => {
    setLoading(true);
    let query = supabase
      .from('cylinder_heads')
      .select('id, name, slug, engine_make_size, displacement, price_usd, image_url', { count: 'exact' })
      .eq('active', true);

    if (selectedCategory) query = query.eq('engine_make_size', selectedCategory);
    if (selectedDisplacement) query = query.eq('displacement', selectedDisplacement);
    if (debouncedSearch) query = query.ilike('name', `%${debouncedSearch}%`);

    if (sortBy === 'price_asc') query = query.order('price_usd', { ascending: true });
    else if (sortBy === 'price_desc') query = query.order('price_usd', { ascending: false });
    else query = query.order('name', { ascending: true });

    const from = (currentPage - 1) * PAGE_SIZE;
    query = query.range(from, from + PAGE_SIZE - 1);

    query.then(({ data, count }) => {
      setHeads((data as CylinderHead[]) || []);
      setTotalCount(count || 0);
      setLoading(false);
    });
  }, [currentPage, selectedCategory, selectedDisplacement, debouncedSearch, sortBy]);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  function handleCategorySelect(cat: string) {
    setSelectedCategory(cat === selectedCategory ? '' : cat);
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
    <nav aria-label="Filter by cylinder head type" className="space-y-1">
      <button
        onClick={() => { setSelectedCategory(''); setCurrentPage(1); setMobileFilterOpen(false); }}
        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${!selectedCategory ? 'bg-accent text-accent-foreground' : 'hover:bg-secondary text-foreground'}`}
      >
        All Cylinder Heads <span className="text-xs opacity-70">({Object.values(categoryCounts).reduce((a, b) => a + b, 0)})</span>
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

      <section className="bg-primary text-primary-foreground py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-2xl md:text-4xl font-extrabold mt-3 mb-2">
            ATK Remanufactured <span className="text-accent">Cylinder Heads</span>
          </h1>
          <p className="text-primary-foreground/70 text-sm md:text-base">
            {totalCount > 0 ? `${totalCount.toLocaleString()} cylinder heads` : 'Loading...'} available
            {selectedCategory ? ` in ${selectedCategory}` : ''}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <button
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          className="lg:hidden flex items-center gap-2 mb-4 text-sm font-semibold text-accent"
        >
          <Filter className="w-4 h-4" />
          {mobileFilterOpen ? 'Hide Filters' : 'Show Filters'}
        </button>

        <div className="flex gap-6">
          <aside className={`${mobileFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 shrink-0`}>
            <ScrollArea className="lg:h-[calc(100vh-200px)] lg:sticky lg:top-24">
              <div className="pr-3">{sidebar}</div>
            </ScrollArea>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search cylinder heads..."
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

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl h-72 animate-pulse" />
                ))}
              </div>
            ) : heads.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <p className="text-lg font-semibold mb-2">No cylinder heads found</p>
                <p className="text-sm">Try adjusting your filters or search query.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {heads.map(head => (
                    <Link
                      key={head.id}
                      to={`/remanufactured-cylinder-heads/atk/${head.slug}`}
                      className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-md transition-all"
                    >
                      <div className="aspect-[4/3] bg-secondary/50 overflow-hidden">
                        {head.image_url ? (
                          <img
                            src={head.image_url}
                            alt={head.name}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.svg'; }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">No Image</div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors mb-1">
                          {head.name}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          {head.displacement && <span className="bg-secondary px-2 py-0.5 rounded-full">{head.displacement}</span>}
                          {head.engine_make_size && <span className="bg-secondary px-2 py-0.5 rounded-full">{head.engine_make_size}</span>}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-accent">
                            {head.price_usd > 0 ? formatCad(head.price_usd, CYLINDER_HEAD_MARKUP) : 'Call for Pricing'}
                          </span>
                          <span className="text-xs text-accent font-medium group-hover:underline">View Details →</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-8">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => { setCurrentPage(p => p - 1); window.scrollTo(0, 0); }}
                      className="p-2 rounded-lg border border-border hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-sm text-muted-foreground px-3">Page {currentPage} of {totalPages}</span>
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

      <CallToAction title="Need Help Finding the Right Cylinder Head?" linkTo="/request-a-part" linkLabel="Request a Quote" />
    </>
  );
}
