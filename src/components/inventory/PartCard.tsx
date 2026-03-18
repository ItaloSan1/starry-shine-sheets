import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Camera, Shield } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import type { Part } from '@/lib/inventory-adapter';

const statusColors: Record<string, string> = {
  'In Stock': 'bg-accent/15 text-accent',
  'Call to Confirm': 'bg-muted text-muted-foreground',
  'On Hold': 'bg-muted text-muted-foreground',
};

function getStatus(part: Part): string {
  if (part.stockNumber?.startsWith('OH')) return 'On Hold';
  if (part.price > 500) return 'Call to Confirm';
  return 'In Stock';
}

export function PartCard({ part }: { part: Part }) {
  const status = getStatus(part);
  const statusColor = statusColors[status] || statusColors['In Stock'];
  const conditionColor = part.condition.startsWith('A') ? 'text-accent' : 'text-muted-foreground';

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow flex flex-col">
      <div className="aspect-[16/10] bg-muted flex flex-col items-center justify-center text-muted-foreground/30">
        <Camera className="w-8 h-8 mb-1" />
        <span className="text-[10px] text-muted-foreground/40">Photo coming soon</span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        {/* Status badge + Stock number */}
        <div className="flex items-center justify-between mb-2">
          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${statusColor}`}>{status}</span>
          <span className="text-[11px] text-muted-foreground">#{part.stockNumber}</span>
        </div>

        <Link to={`/search-inventory/${part.id}`} className="font-bold text-sm hover:text-accent transition-colors line-clamp-2 mb-1">
          {part.description}
        </Link>
        <p className="text-xs text-muted-foreground mb-1">{part.year} {part.make} {part.model}</p>

        {/* Donor vehicle if available */}
        {part.donorVehicle && (
          <p className="text-[11px] text-muted-foreground mb-1">Donor: {part.donorVehicle}</p>
        )}

        <div className="flex flex-wrap gap-1.5 mb-2 text-[11px]">
          <span className={`font-semibold ${conditionColor}`}>{part.condition}</span>
          {part.warranty && (
            <span className="flex items-center gap-0.5 text-accent">
              <Shield className="w-3 h-3" /> Warranty
            </span>
          )}
        </div>

        {part.fitmentNotes && (
          <p className="text-[11px] text-muted-foreground mb-2 italic">{part.fitmentNotes}</p>
        )}

        <div className="mt-auto pt-2">
          <span className="text-lg font-extrabold text-foreground block mb-2">${part.price.toLocaleString()}</span>
          <div className="flex gap-1">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex-1 flex items-center justify-center gap-1 bg-accent text-accent-foreground px-2 py-1.5 rounded text-[11px] font-bold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-3 h-3" /> Call
            </a>
            <a
              href={`sms:${BUSINESS.phoneRaw}?body=${encodeURIComponent(`Hi, I'm interested in part #${part.stockNumber}: ${part.description}`)}`}
              className="flex-1 flex items-center justify-center gap-1 bg-primary text-primary-foreground px-2 py-1.5 rounded text-[11px] font-bold hover:opacity-90 transition-opacity"
            >
              <MessageSquare className="w-3 h-3" /> Text
            </a>
            <Link
              to={`/request-a-part?stock=${part.stockNumber || ''}`}
              className="flex-1 flex items-center justify-center gap-1 border border-border text-foreground px-2 py-1.5 rounded text-[11px] font-bold hover:bg-muted transition-colors"
            >
              Request
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
