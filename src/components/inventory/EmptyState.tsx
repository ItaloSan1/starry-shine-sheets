import { Link } from 'react-router-dom';
import { Search, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export function EmptyState() {
  return (
    <div className="text-center py-12 glass rounded-lg">
      <Search className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
      <h3 className="font-bold text-lg mb-2">No parts found for this search</h3>
      <p className="text-muted-foreground text-sm max-w-md mx-auto mb-2">
        Don't see what you need? We can source many parts from our recycler network across Western Canada.
      </p>
      <p className="text-muted-foreground text-sm mb-6">
        Call or text us at <a href={`tel:${BUSINESS.phoneRaw}`} className="text-accent font-semibold hover:underline">{BUSINESS.phone}</a> — or submit a request online.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/request-a-part"
          className="bg-accent text-accent-foreground px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
        >
          Request a Part
        </Link>
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="flex items-center justify-center gap-2 border border-border px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-muted transition-colors"
        >
          <Phone className="w-4 h-4" /> Call Us
        </a>
        <a
          href={`sms:${BUSINESS.phoneRaw}`}
          className="flex items-center justify-center gap-2 border border-border px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-muted transition-colors"
        >
          <MessageSquare className="w-4 h-4" /> Text Us
        </a>
      </div>
    </div>
  );
}
