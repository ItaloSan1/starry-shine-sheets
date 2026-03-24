import { Shield, Clock, Wrench, Building2, Star } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const stats = [
  { icon: Building2, label: `Since ${BUSINESS.established}`, sub: '40+ Years Serving Edmonton' },
  { icon: Wrench, label: 'Huge Inventory', sub: 'Cars, Trucks & SUVs' },
  { icon: Shield, label: 'Warranty-Backed', sub: 'On Every Part Sold' },
  { icon: Clock, label: 'Parts Sourcing', sub: 'Western Canada Network' },
];

export function TrustBar() {
  return (
    <section className="bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-4 py-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.08} direction="up">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <stat.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-sm">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.sub}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          {/* Google Reviews badge */}
          <ScrollReveal delay={0.35} direction="up">
            <div className="flex items-center gap-3 col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-accent fill-accent" />
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Google Reviews</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
