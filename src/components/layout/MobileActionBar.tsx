import { Phone, MessageCircle, Search, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS } from '@/lib/constants';

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden glass-strong border-t border-accent/10 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-4">
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-foreground/70 font-semibold text-[11px] hover:text-accent transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>
        <a
          href={`sms:${BUSINESS.phoneRaw}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-accent font-semibold text-[11px] hover:text-accent/80 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Text
        </a>
        <Link
          to="/search-inventory"
          className="flex flex-col items-center justify-center gap-1 py-3 text-foreground/70 font-semibold text-[11px] hover:text-accent transition-colors"
        >
          <Search className="w-4 h-4" />
          Search
        </Link>
        <Link
          to="/sell-your-vehicle"
          className="flex flex-col items-center justify-center gap-1 py-3 text-foreground/70 font-semibold text-[11px] hover:text-accent transition-colors"
        >
          <DollarSign className="w-4 h-4" />
          Sell
        </Link>
      </div>
    </div>
  );
}
