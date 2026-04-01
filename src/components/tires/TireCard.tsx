import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import type { TireRecord } from '@/hooks/useTireInventory';

interface TireCardProps {
  tire: TireRecord;
  onClick: () => void;
}

export function TireCard({ tire, onClick }: TireCardProps) {
  const thumb = tire.images && tire.images.length > 0 ? tire.images[0] : null;

  return (
    <div
      className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
      onClick={onClick}
    >
      {/* Image */}
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        {thumb ? (
          <img src={thumb} alt={`${tire.brand} ${tire.model ?? ''} ${tire.full_size}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-4xl font-bold opacity-20">
            {tire.full_size}
          </div>
        )}
        <div className="absolute top-2 left-2">
          <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded">{tire.season}</span>
        </div>
        {tire.quantity > 1 && (
          <div className="absolute top-2 right-2">
            <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded">×{tire.quantity}</span>
          </div>
        )}
      </div>
      {/* Info */}
      <div className="p-3">
        <p className="font-mono text-accent font-bold text-lg leading-tight">{tire.full_size}</p>
        <p className="font-semibold text-sm mt-0.5">{tire.brand} {tire.model ?? ''}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold">${tire.price}<span className="text-xs text-muted-foreground font-normal">/ea</span></span>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            {tire.tread_depth_mm && <span>{tire.tread_depth_32nds}/32"</span>}
            <span>• {tire.condition}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
