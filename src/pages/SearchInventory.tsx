import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from '@/components/inventory/SearchForm';
import { SearchResults } from '@/components/inventory/SearchResults';
import { EmptyState } from '@/components/inventory/EmptyState';
import { PartRequestForm } from '@/components/forms/PartRequestForm';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { useSEO } from '@/hooks/useSEO';
import { inventoryProvider } from '@/lib/mock-inventory';
import type { Part, SearchFilters } from '@/lib/inventory-adapter';
import { X } from 'lucide-react';
import partsWarehouse from '@/assets/parts-warehouse.jpg';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Search Inventory' },
];

export default function SearchInventory() {
  useSEO({
    title: 'Search Used Auto Parts Inventory | Eskimo Auto & Truck Parts',
    description: 'Search thousands of quality used auto and truck parts in Edmonton. Engines, transmissions, body parts, tires & rims. Warranty-backed. Call (780) 473-2424.',
  });

  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<SearchFilters>(() => {
    const q = searchParams.get('q');
    const cat = searchParams.get('category');
    return { query: q || undefined, partCategory: cat || undefined };
  });
  const [parts, setParts] = useState<Part[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('newest');

  const doSearch = async () => {
    setLoading(true);
    const result = await inventoryProvider.searchParts(filters);
    let sorted = [...result.parts];
    if (sortBy === 'price-low') sorted.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high') sorted.sort((a, b) => b.price - a.price);
    setParts(sorted);
    setTotal(result.total);
    setLoading(false);
  };

  useEffect(() => { doSearch(); }, [sortBy]);

  const activeFilters = Object.entries(filters)
    .filter(([, v]) => v !== undefined && v !== '')
    .map(([k, v]) => ({ key: k as keyof SearchFilters, label: `${k}: ${v}` }));

  const removeFilter = (key: keyof SearchFilters) => {
    setFilters(prev => ({ ...prev, [key]: undefined }));
  };

  return (
    <div className="pb-20 lg:pb-0">
      <div className="relative bg-secondary text-foreground py-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={partsWarehouse} alt="Eskimo Auto Parts inventory warehouse" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-bold text-foreground">Search Our Inventory</h1>
          <p className="text-foreground/60 mt-1 text-sm">Find quality used auto and truck parts in Edmonton</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-5">
        <Breadcrumbs items={breadcrumbs} />
        <BreadcrumbSchema items={breadcrumbs} />
        <SearchForm filters={filters} onFilterChange={setFilters} onSearch={doSearch} />

        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {activeFilters.map(f => (
              <button key={f.key} onClick={() => removeFilter(f.key)} className="inline-flex items-center gap-1 text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full hover:bg-accent/20 transition-colors">
                {f.label}
                <X className="w-3 h-3" />
              </button>
            ))}
          </div>
        )}

        <div className="mt-5">
          {!loading && parts.length === 0 ? (
            <EmptyState />
          ) : (
            <SearchResults parts={parts} total={total} loading={loading} sortBy={sortBy} onSortChange={setSortBy} />
          )}
        </div>
        <div className="mt-10">
          <PartRequestForm />
        </div>
      </div>
    </div>
  );
}
