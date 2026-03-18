import type { Part } from '@/lib/inventory-adapter';
import { PartCard } from './PartCard';
import { BUSINESS } from '@/lib/constants';

interface SearchResultsProps {
  parts: Part[];
  total: number;
  loading?: boolean;
  sortBy?: string;
  onSortChange?: (sort: string) => void;
}

export function SearchResults({ parts, total, loading, sortBy = 'newest', onSortChange }: SearchResultsProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border border-border rounded-lg p-4 animate-pulse">
            <div className="aspect-[16/10] bg-muted rounded mb-3" />
            <div className="h-4 bg-muted rounded w-3/4 mb-2" />
            <div className="h-3 bg-muted rounded w-1/2 mb-2" />
            <div className="h-3 bg-muted rounded w-1/3" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <p className="text-sm font-medium text-foreground">
            Showing {parts.length} of {total} part{total !== 1 ? 's' : ''}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Need fitment help? Call <a href={`tel:${BUSINESS.phoneRaw}`} className="text-accent hover:underline">{BUSINESS.phone}</a> or <a href={`sms:${BUSINESS.phoneRaw}`} className="text-accent hover:underline">text us</a>.
          </p>
        </div>
        {onSortChange && (
          <select
            value={sortBy}
            onChange={e => onSortChange(e.target.value)}
            className="text-sm px-3 py-1.5 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {parts.map(part => (
          <PartCard key={part.id} part={part} />
        ))}
      </div>
    </div>
  );
}
