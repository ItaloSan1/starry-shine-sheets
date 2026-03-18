import { Link } from 'react-router-dom';
import type { Part } from '@/lib/inventory-adapter';
import { Phone, Package, Shield } from 'lucide-react';

const PHONE = '780-555-0199';

export function PartCard({ part }: { part: Part }) {
  const conditionColor = part.condition.startsWith('A') ? 'text-success' : part.condition.startsWith('B') ? 'text-accent' : 'text-muted-foreground';

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
      <div className="aspect-video bg-muted flex items-center justify-center">
        <Package className="w-10 h-10 text-muted-foreground/30" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <Link to={`/search-inventory/${part.id}`} className="font-bold text-sm hover:text-accent transition-colors line-clamp-2">
            {part.description}
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mb-2">{part.year} {part.make} {part.model}</p>
        
        <div className="flex flex-wrap gap-2 mb-3 text-xs">
          <span className={`font-medium ${conditionColor}`}>{part.condition}</span>
          <span className="text-muted-foreground">#{part.stockNumber}</span>
          {part.warranty && (
            <span className="flex items-center gap-0.5 text-success">
              <Shield className="w-3 h-3" /> {part.warranty}
            </span>
          )}
        </div>

        {part.fitmentNotes && (
          <p className="text-xs text-muted-foreground mb-3 italic">{part.fitmentNotes}</p>
        )}

        <div className="flex items-center justify-between">
          <span className="text-lg font-extrabold text-primary">${part.price.toLocaleString()}</span>
          <div className="flex gap-1.5">
            <a
              href={`tel:${PHONE}`}
              className="bg-accent text-accent-foreground px-3 py-1.5 rounded text-xs font-bold hover:opacity-90 transition-opacity"
            >
              Call
            </a>
            <Link
              to={`/search-inventory/${part.id}`}
              className="bg-primary text-primary-foreground px-3 py-1.5 rounded text-xs font-bold hover:opacity-90 transition-opacity"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
