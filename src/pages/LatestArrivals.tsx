import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { inventoryProvider } from '@/lib/mock-inventory';
import type { Vehicle } from '@/lib/inventory-adapter';
import { Car } from 'lucide-react';
import { CallToAction } from '@/components/layout/CallToAction';

export default function LatestArrivals() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    inventoryProvider.getLatestArrivals(20).then(setVehicles);
  }, []);

  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">Latest Arrivals</h1>
          <p className="text-primary-foreground/70 mt-1">Fresh vehicles recently arrived at our Edmonton yard — parts are being pulled now</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles.map(v => (
            <Link key={v.id} to={`/latest-arrivals/${v.id}`} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Car className="w-12 h-12 text-muted-foreground/30" />
              </div>
              <div className="p-4">
                <p className="font-bold text-sm">{v.year} {v.make} {v.model}</p>
                {v.trim && <p className="text-xs text-muted-foreground">{v.trim}</p>}
                <div className="flex items-center justify-between mt-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${v.status === 'Available' ? 'bg-success/10 text-success' : 'bg-accent/10 text-accent'}`}>{v.status}</span>
                  {v.mileage && <span className="text-xs text-muted-foreground">{v.mileage.toLocaleString()} km</span>}
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {v.partsAvailable.slice(0, 3).map(p => (
                    <span key={p} className="text-xs bg-secondary px-2 py-0.5 rounded text-secondary-foreground">{p}</span>
                  ))}
                  {v.partsAvailable.length > 3 && <span className="text-xs text-muted-foreground">+{v.partsAvailable.length - 3} more</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <CallToAction title="Looking for a Specific Part?" description="Can't find it in our latest arrivals? Call us — we source parts from our network across Western Canada." linkTo="/search-inventory" linkLabel="Search Full Inventory" />
    </div>
  );
}
