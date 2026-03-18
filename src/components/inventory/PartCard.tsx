import { Link } from 'react-router-dom';
import type { Part } from '@/lib/inventory-adapter';
import { Phone, MessageCircle, Camera, Shield } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export function PartCard({ part }: { part: Part }) {
  const conditionColor = part.condition.startsWith('A') ? 'text-success' : part.condition.startsWith('B') ? 'text-accent' : 'text-muted-foreground';

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow flex flex-col">
      <div className="aspect-[16/10] bg-muted flex flex-col items-center justify-center text-muted-foreground/30">
        <Camera className="w-8 h-8 mb-1" />
        <span className="text-[10px] text-muted-foreground/40">Photo coming soon</span>
        {/* TODO: Replace with real part/donor vehicle image */}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <Link to={`/search-inventory/${part.id}`} className="font-bold text-sm hover:text-accent transition-colors line-clamp-2 mb-1">
          {part.description}
        </Link>
        <p className="text-xs text-muted-foreground mb-2">{part.year} {part.make} {part.model}</p>
        
        <div className="flex flex-wrap gap-1.5 mb-3 text-[11px]">
          <span className={`font-semibold ${conditionColor}`}>{part.condition}</span>
          <span className="text-muted-foreground">#{part.stockNumber}</span>
          {part.warranty && (
            <span className="flex items-center gap-0.5 text-success">
              <Shield className="w-3 h-3" /> Warranty
            </span>
          )}
        </div>

        {part.fitmentNotes && (
          <p className="text-[11px] text-muted-foreground mb-3 italic">{part.fitmentNotes}</p>
        )}

        <div className="mt-auto flex items-end justify-between pt-2">
          <span className="text-lg font-extrabold text-foreground">${part.price.toLocaleString()}</span>
          <div className="flex gap-1">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="bg-accent text-accent-foreground px-2.5 py-1.5 rounded text-[11px] font-bold hover:opacity-90 transition-opacity"
            >
              Call
            </a>
            <a
              href={`sms:${BUSINESS.phoneRaw}?body=Hi, I'm interested in part %23${part.stockNumber}: ${part.description}`}
              className="bg-primary text-primary-foreground px-2.5 py-1.5 rounded text-[11px] font-bold hover:opacity-90 transition-opacity"
            >
              Text
            </a>
            <Link
              to={`/search-inventory/${part.id}`}
              className="border border-border text-foreground px-2.5 py-1.5 rounded text-[11px] font-bold hover:bg-muted transition-colors"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
