import { Search, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

interface EmptyStateProps {
  title?: string;
  message?: string;
}

export function EmptyState({ title = 'No Parts Found', message = 'Try adjusting your filters or search terms.' }: EmptyStateProps) {
  return (
    <div className="text-center py-14 px-4">
      <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">{message}</p>
      <p className="text-sm font-medium text-foreground mb-4">
        Don't see it? We can source many parts from our network.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md font-bold text-sm hover:opacity-90 transition-opacity">
          <Phone className="w-4 h-4" />
          Call {BUSINESS.phone}
        </a>
        <a href={`sms:${BUSINESS.phoneRaw}`} className="flex items-center gap-2 border border-border px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-muted transition-colors">
          <MessageCircle className="w-4 h-4" />
          Text Us
        </a>
      </div>
    </div>
  );
}
