import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { inventoryProvider } from '@/lib/mock-inventory';
import type { Vehicle } from '@/lib/inventory-adapter';
import { Car, ArrowRight } from 'lucide-react';

export function LatestArrivals() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    inventoryProvider.getLatestArrivals(4).then(setVehicles);
  }, []);

  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Latest Arrivals</h2>
            <p className="text-muted-foreground mt-1">Fresh vehicles being dismantled — parts available now</p>
          </div>
          <Link to="/latest-arrivals" className="hidden md:flex items-center gap-1 text-accent font-semibold text-sm hover:underline">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {vehicles.map(v => (
            <Link
              key={v.id}
              to={`/latest-arrivals/${v.id}`}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Car className="w-12 h-12 text-muted-foreground/40" />
              </div>
              <div className="p-4">
                <p className="font-bold text-sm">{v.year} {v.make} {v.model}</p>
                {v.trim && <p className="text-xs text-muted-foreground">{v.trim}</p>}
                <div className="flex items-center justify-between mt-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    v.status === 'Available' ? 'bg-success/10 text-success' : 'bg-accent/10 text-accent'
                  }`}>{v.status}</span>
                  {v.mileage && <span className="text-xs text-muted-foreground">{v.mileage.toLocaleString()} km</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center md:hidden">
          <Link to="/latest-arrivals" className="text-accent font-semibold text-sm hover:underline">
            View All Arrivals →
          </Link>
        </div>
      </div>
    </section>
  );
}
