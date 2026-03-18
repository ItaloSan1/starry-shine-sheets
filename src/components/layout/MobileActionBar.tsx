import { Phone, MessageCircle, Search, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS } from '@/lib/constants';

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-primary border-t border-primary-foreground/10 shadow-[0_-2px_10px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-4 divide-x divide-primary-foreground/10">
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-primary-foreground font-bold text-[11px] hover:bg-primary-foreground/10 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>
        <a
          href={`sms:${BUSINESS.phoneRaw}`}
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-accent font-bold text-[11px] hover:bg-primary-foreground/10 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Text
        </a>
        <Link
          to="/search-inventory"
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-primary-foreground font-bold text-[11px] hover:bg-primary-foreground/10 transition-colors"
        >
          <Search className="w-4 h-4" />
          Search
        </Link>
        <Link
          to="/sell-your-vehicle"
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-primary-foreground font-bold text-[11px] hover:bg-primary-foreground/10 transition-colors"
        >
          <DollarSign className="w-4 h-4" />
          Sell
        </Link>
      </div>
    </div>
  );
}
