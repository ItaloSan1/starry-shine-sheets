import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { inventoryProvider } from '@/lib/mock-inventory';
import type { Vehicle } from '@/lib/inventory-adapter';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggerChildren, staggerItem } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import heroYard from '@/assets/hero-yard.jpg';

export function LatestArrivals() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    inventoryProvider.getLatestArrivals(4).then(setVehicles);
  }, []);

  return (
    <section className="py-14 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold">Latest Arrivals</h2>
              <p className="text-muted-foreground text-sm mt-1">Fresh vehicles being dismantled — parts available now</p>
            </div>
            <Link to="/latest-arrivals" className="hidden md:flex items-center gap-1.5 text-accent font-bold text-sm hover:gap-2.5 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.1}>
          {vehicles.map(v => (
            <motion.div key={v.id} variants={staggerItem}>
              <Link
                to={`/latest-arrivals/${v.id}`}
                className="bg-card border border-border rounded-xl overflow-hidden block card-hover"
              >
                <div className="aspect-[16/10] bg-muted overflow-hidden">
                  <img src={heroYard} alt={`${v.year} ${v.make} ${v.model}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <p className="font-bold text-sm">{v.year} {v.make} {v.model}</p>
                  {v.trim && <p className="text-xs text-muted-foreground">{v.trim}</p>}
                  <div className="flex items-center justify-between mt-2">
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                      v.status === 'Available' ? 'bg-success/10 text-success' : 'bg-accent/10 text-accent'
                    }`}>{v.status === 'Dismantling' ? 'Now Dismantling' : v.status}</span>
                    {v.mileage && <span className="text-[11px] text-muted-foreground">{v.mileage.toLocaleString()} km</span>}
                  </div>
                  <p className="text-xs text-accent font-semibold mt-2.5">View Parts from This Vehicle →</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>
        <div className="mt-6 text-center md:hidden">
          <Link to="/latest-arrivals" className="text-accent font-bold text-sm hover:underline">
            View All Arrivals →
          </Link>
        </div>
      </div>
    </section>
  );
}
