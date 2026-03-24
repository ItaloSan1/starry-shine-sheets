import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Camera, Shield, Eye } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import type { Part } from '@/lib/inventory-adapter';

const statusColors: Record<string, string> = {
  'In Stock': 'bg-success/15 text-success',
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
    <div className="border border-border rounded-xl overflow-hidden bg-card flex flex-col card-hover group">
      <div className="aspect-[16/10] bg-muted flex flex-col items-center justify-center text-muted-foreground/30 relative overflow-hidden">
        <Camera className="w-8 h-8 mb-1" />
        <span className="text-[10px] text-muted-foreground/40">Photo coming soon</span>
        {/* Quick view overlay */}
        <Link
          to={`/search-inventory/${part.id}`}
          className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <span className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-xs font-bold">
            <Eye className="w-3.5 h-3.5" /> Quick View
          </span>
        </Link>
      </div>
      <div className="p-4 flex flex-col flex-1">
        {/* Status badge + Stock number */}
        <div className="flex items-center justify-between mb-2">
          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${statusColor}`}>{status}</span>
          <span className="text-[11px] text-muted-foreground font-mono">#{part.stockNumber}</span>
        </div>

        <Link to={`/search-inventory/${part.id}`} className="font-bold text-sm hover:text-accent transition-colors line-clamp-2 mb-1">
          {part.description}
        </Link>
        <p className="text-xs text-muted-foreground mb-1">{part.year} {part.make} {part.model}</p>

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

        <div className="mt-auto pt-3 border-t border-border">
          <span className="text-lg font-extrabold text-foreground block mb-2.5">${part.price.toLocaleString()}</span>
          <div className="flex gap-1.5">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex-1 flex items-center justify-center gap-1 bg-accent text-accent-foreground px-2 py-2 rounded-lg text-[11px] font-bold hover:brightness-110 transition-all"
            >
              <Phone className="w-3 h-3" /> Call
            </a>
            <a
              href={`sms:${BUSINESS.phoneRaw}?body=${encodeURIComponent(`Hi, I'm interested in part #${part.stockNumber}: ${part.description}`)}`}
              className="flex-1 flex items-center justify-center gap-1 bg-primary text-primary-foreground px-2 py-2 rounded-lg text-[11px] font-bold hover:opacity-90 transition-opacity"
            >
              <MessageSquare className="w-3 h-3" /> Text
            </a>
            <Link
              to={`/request-a-part?stock=${part.stockNumber || ''}`}
              className="flex-1 flex items-center justify-center gap-1 border border-border text-foreground px-2 py-2 rounded-lg text-[11px] font-bold hover:bg-muted transition-colors"
            >
              Request
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
