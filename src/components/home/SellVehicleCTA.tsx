import { Link } from 'react-router-dom';
import { DollarSign, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import yardAerial from '@/assets/yard-aerial.jpg';

export function SellVehicleCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={yardAerial} alt="Eskimo Auto Parts yard aerial view" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/95 via-accent/90 to-accent/80" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 py-14 text-center">
        <ScrollReveal>
          <div className="w-14 h-14 rounded-2xl bg-accent-foreground/10 flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-7 h-7 text-accent-foreground" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-accent-foreground mb-3">Got a Vehicle to Sell?</h2>
          <p className="text-accent-foreground/85 text-sm md:text-base mb-6 max-w-xl mx-auto leading-relaxed">
            We buy cars, trucks, and SUVs — running or not. Get a fair cash offer from Edmonton's trusted auto recycler since 1984.
          </p>
          <Link
            to="/sell-your-vehicle"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity shadow-lg"
          >
            Get Your Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
