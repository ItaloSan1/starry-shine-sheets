import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from '@/components/inventory/SearchForm';
import { SearchResults } from '@/components/inventory/SearchResults';
import { EmptyState } from '@/components/inventory/EmptyState';
import { PartRequestForm } from '@/components/forms/PartRequestForm';
import { inventoryProvider } from '@/lib/mock-inventory';
import type { Part, SearchFilters } from '@/lib/inventory-adapter';

export default function SearchInventory() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<SearchFilters>(() => {
    const q = searchParams.get('q');
    const cat = searchParams.get('category');
    return { query: q || undefined, partCategory: cat || undefined };
  });
  const [parts, setParts] = useState<Part[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const doSearch = async () => {
    setLoading(true);
    const result = await inventoryProvider.searchParts(filters);
    setParts(result.parts);
    setTotal(result.total);
    setLoading(false);
  };

  useEffect(() => { doSearch(); }, []); // initial load

  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">Search Our Inventory</h1>
          <p className="text-primary-foreground/70 mt-1">Find quality used auto and truck parts in Edmonton</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <SearchForm filters={filters} onFilterChange={setFilters} onSearch={doSearch} />
        <div className="mt-6">
          {!loading && parts.length === 0 ? (
            <EmptyState />
          ) : (
            <SearchResults parts={parts} total={total} loading={loading} />
          )}
        </div>
        <div className="mt-12">
          <PartRequestForm />
        </div>
      </div>
    </div>
  );
}
