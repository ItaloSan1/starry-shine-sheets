import { Link } from 'react-router-dom';
import { DollarSign, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function SellVehicleCTA() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <div className="glass rounded-3xl p-8 md:p-14 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/3 rounded-full blur-[80px]" />

            {/* Accent border line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <DollarSign className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl mb-3">Got a Vehicle to Sell?</h2>
                <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
                  We buy cars, trucks, and SUVs — running or not. Get a fair cash offer from Edmonton's trusted auto recycler.
                </p>
              </div>
              <Link
                to="/sell-your-vehicle"
                className="flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-sm hover:shadow-glow-lg transition-all shrink-0"
              >
                Get Your Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
