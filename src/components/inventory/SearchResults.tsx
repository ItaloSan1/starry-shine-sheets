import type { Part } from '@/lib/inventory-adapter';
import { PartCard } from './PartCard';

interface SearchResultsProps {
  parts: Part[];
  total: number;
  loading?: boolean;
}

export function SearchResults({ parts, total, loading }: SearchResultsProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border border-border rounded-lg p-4 animate-pulse">
            <div className="aspect-video bg-muted rounded mb-3" />
            <div className="h-4 bg-muted rounded w-3/4 mb-2" />
            <div className="h-3 bg-muted rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-4">{total} part{total !== 1 ? 's' : ''} found</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {parts.map(part => (
          <PartCard key={part.id} part={part} />
        ))}
      </div>
    </div>
  );
}
