import { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { inventoryProvider } from '@/lib/mock-inventory';
import type { SearchFilters } from '@/lib/inventory-adapter';

interface SearchFormProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
  onSearch: () => void;
}

const CATEGORIES = [
  { value: 'engine', label: 'Engines' },
  { value: 'transmission', label: 'Transmissions' },
  { value: 'body', label: 'Body Parts' },
  { value: 'tires-rims', label: 'Tires & Rims' },
  { value: 'electrical', label: 'Electrical' },
  { value: 'suspension', label: 'Suspension' },
  { value: 'interior', label: 'Interior' },
  { value: 'other', label: 'Other' },
];

export function SearchForm({ filters, onFilterChange, onSearch }: SearchFormProps) {
  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [partTypes, setPartTypes] = useState<string[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    inventoryProvider.getMakes().then(setMakes);
    inventoryProvider.getYears().then(setYears);
    inventoryProvider.getPartTypes().then(setPartTypes);
  }, []);

  useEffect(() => {
    if (filters.make) {
      inventoryProvider.getModels(filters.make).then(setModels);
    } else {
      setModels([]);
    }
  }, [filters.make]);

  const update = (key: keyof SearchFilters, value: string | number | undefined) => {
    const next = { ...filters, [key]: value || undefined };
    if (key === 'make') next.model = undefined;
    onFilterChange(next);
  };

  const clearAll = () => {
    onFilterChange({});
    onSearch();
  };

  const hasFilters = Object.values(filters).some(v => v !== undefined && v !== '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  const selectClass = "w-full px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent";
  const inputClass = selectClass;

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-4 md:p-6">
      {/* Main row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-3">
        <select value={filters.year || ''} onChange={e => update('year', e.target.value ? Number(e.target.value) : undefined)} className={selectClass}>
          <option value="">Any Year</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <select value={filters.make || ''} onChange={e => update('make', e.target.value)} className={selectClass}>
          <option value="">Any Make</option>
          {makes.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <select value={filters.model || ''} onChange={e => update('model', e.target.value)} disabled={!filters.make} className={`${selectClass} disabled:opacity-50`}>
          <option value="">Any Model</option>
          {models.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <select value={filters.partCategory || ''} onChange={e => update('partCategory', e.target.value)} className={selectClass}>
          <option value="">Any Category</option>
          {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
        </select>
        <select value={filters.partType || ''} onChange={e => update('partType', e.target.value)} className={selectClass}>
          <option value="">Any Part Type</option>
          {partTypes.map(pt => <option key={pt} value={pt}>{pt}</option>)}
        </select>
        <button type="submit" className="w-full bg-accent text-accent-foreground px-4 py-2.5 rounded-md font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          <Search className="w-4 h-4" />
          Search
        </button>
      </div>

      {/* Advanced toggle */}
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => setShowAdvanced(!showAdvanced)} className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          {showAdvanced ? 'Less Filters' : 'More Filters'}
        </button>
        {hasFilters && (
          <button type="button" onClick={clearAll} className="text-sm text-accent hover:underline flex items-center gap-1">
            <X className="w-3.5 h-3.5" /> Clear All
          </button>
        )}
      </div>

      {/* Advanced filters */}
      {showAdvanced && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-3 pt-3 border-t border-border">
          <input
            type="text"
            value={filters.stockNumber || ''}
            onChange={e => update('stockNumber', e.target.value)}
            placeholder="Stock Number"
            className={inputClass}
          />
          <select value={filters.condition || ''} onChange={e => update('condition', e.target.value)} className={selectClass}>
            <option value="">Any Condition</option>
            <option value="A - Excellent">A - Excellent</option>
            <option value="B - Good">B - Good</option>
            <option value="C - Fair">C - Fair</option>
          </select>
          <select value={filters.availability || ''} onChange={e => update('availability', e.target.value)} className={selectClass}>
            <option value="">In Stock (default)</option>
            <option value="In Stock">In Stock</option>
            <option value="On Hold">On Hold</option>
            <option value="Sold">Sold</option>
          </select>
          <input
            type="number"
            value={filters.minPrice || ''}
            onChange={e => update('minPrice', e.target.value ? Number(e.target.value) : undefined)}
            placeholder="Min Price ($)"
            className={inputClass}
          />
          <input
            type="number"
            value={filters.maxPrice || ''}
            onChange={e => update('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
            placeholder="Max Price ($)"
            className={inputClass}
          />
        </div>
      )}
    </form>
  );
}
