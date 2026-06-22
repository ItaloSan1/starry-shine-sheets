import { Shield, Clock, Wrench, Building2, Star } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const stats = [
  { icon: Building2, value: '40+', label: 'Years in Business' },
  { icon: Wrench, value: '1000s', label: 'Parts in Stock' },
  { icon: Shield, value: '100%', label: 'Warranty-Backed' },
  { icon: Clock, value: 'Canada', label: 'Wide Sourcing Network' },
];

export function TrustBar() {
  return (
    <section className="relative border-t border-border/30">
      {/* Thin accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.08} direction="up">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-1">
                  <stat.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
          {/* Google Reviews */}
          <ScrollReveal delay={0.35} direction="up">
            <div className="flex flex-col items-center text-center gap-2 col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-1">
                <Star className="w-5 h-5 text-accent fill-accent" />
              </div>
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground font-medium">Google Reviews</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
