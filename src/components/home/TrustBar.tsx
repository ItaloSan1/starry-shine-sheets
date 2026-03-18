import { Shield, Clock, Wrench, Building2 } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

const stats = [
  { icon: Building2, label: `Since ${BUSINESS.established}`, sub: 'Serving Edmonton' },
  /* TODO: Confirm inventory scale with business */
  { icon: Wrench, label: 'Used Auto & Truck Parts', sub: 'Cars, Trucks, SUVs' },
  { icon: Shield, label: 'Warranty-Backed', sub: 'On Every Part Sold' },
  { icon: Clock, label: 'Parts Sourcing', sub: 'From Our Recycler Network' },
];

export function TrustBar() {
  return (
    <section className="bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-4 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                <stat.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-bold text-sm">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
