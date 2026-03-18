import { Phone, MessageCircle } from 'lucide-react';

const PHONE = '780-555-0199';

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-primary border-t border-primary-foreground/10 shadow-[0_-2px_10px_rgba(0,0,0,0.2)]">
      <div className="grid grid-cols-2 divide-x divide-primary-foreground/10">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center gap-2 py-3.5 text-primary-foreground font-bold text-sm hover:bg-primary-foreground/10 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href={`sms:${PHONE}`}
          className="flex items-center justify-center gap-2 py-3.5 text-accent font-bold text-sm hover:bg-primary-foreground/10 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Text Us
        </a>
      </div>
    </div>
  );
}
