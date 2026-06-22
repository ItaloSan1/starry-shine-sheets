import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import type { TireRecord } from '@/hooks/useTireInventory';
import { useState } from 'react';

interface TireDetailModalProps {
  tire: TireRecord | null;
  open: boolean;
  onClose: () => void;
}

export function TireDetailModal({ tire, open, onClose }: TireDetailModalProps) {
  const [imgIdx, setImgIdx] = useState(0);

  if (!tire) return null;

  const images = tire.images ?? [];

  return (
    <Dialog open={open} onOpenChange={v => !v && onClose()}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="font-mono text-accent">{tire.full_size}</span>
            <span>{tire.brand} {tire.model ?? ''}</span>
          </DialogTitle>
        </DialogHeader>

        {/* Images */}
        {images.length > 0 && (
          <div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted mb-2">
              <img src={images[imgIdx] ?? images[0]} alt="" className="w-full h-full object-cover" />
            </div>
            {images.length > 1 && (
              <div className="flex gap-1.5">
                {images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-colors ${i === imgIdx ? 'border-accent' : 'border-border'}`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Specs */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mt-2">
          <div><span className="text-muted-foreground">Size:</span> <strong>{tire.full_size}</strong></div>
          <div><span className="text-muted-foreground">Season:</span> <strong>{tire.season}</strong></div>
          <div><span className="text-muted-foreground">Condition:</span> <strong>{tire.condition}</strong></div>
          <div><span className="text-muted-foreground">Quantity:</span> <strong>{tire.quantity}</strong></div>
          {tire.tread_depth_mm && (
            <div><span className="text-muted-foreground">Tread:</span> <strong>{tire.tread_depth_mm}mm ({tire.tread_depth_32nds}/32")</strong></div>
          )}
          {tire.speed_rating && (
            <div><span className="text-muted-foreground">Speed:</span> <strong>{tire.speed_rating}</strong></div>
          )}
          {tire.load_index && (
            <div><span className="text-muted-foreground">Load:</span> <strong>{tire.load_index}</strong></div>
          )}
          <div><span className="text-muted-foreground">Stock#:</span> <strong className="font-mono">{tire.stock_number}</strong></div>
        </div>

        {tire.notes && (
          <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg mt-2">{tire.notes}</p>
        )}

        {/* Price & CTAs */}
        <div className="mt-3 border-t border-border pt-3">
          <p className="text-2xl font-bold mb-3">${tire.price}<span className="text-sm text-muted-foreground font-normal">/ea</span></p>
          <div className="flex gap-2">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="flex-1">
              <Button className="w-full" size="lg">
                <Phone className="w-4 h-4" /> Call Now
              </Button>
            </a>
            <a href={`sms:${BUSINESS.phoneRaw}?body=Hi, I'm interested in tire ${tire.stock_number} (${tire.full_size} ${tire.brand})`} className="flex-1">
              <Button variant="outline" className="w-full" size="lg">
                <MessageSquare className="w-4 h-4" /> Text Us
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
