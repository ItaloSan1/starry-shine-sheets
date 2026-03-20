import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { inventoryProvider } from '@/lib/mock-inventory';
import type { Vehicle } from '@/lib/inventory-adapter';
import { Car } from 'lucide-react';
import { CallToAction } from '@/components/layout/CallToAction';
import { useSEO } from '@/hooks/useSEO';
import recyclerYard from '@/assets/recycler-yard.jpg';

export default function LatestArrivals() {
  useSEO({
    title: 'Latest Vehicle Arrivals | Eskimo Auto & Truck Parts Edmonton',
    description: 'See the latest vehicles arriving at our Edmonton yard. Fresh parts being pulled now. Call (780) 473-2424.',
  });

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    inventoryProvider.getLatestArrivals(20).then(setVehicles);
  }, []);

  return (
    <div className="pb-20 lg:pb-0">
      <div className="relative bg-primary text-primary-foreground py-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={recyclerYard} alt="Eskimo Auto recycler yard latest arrivals" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-bold text-primary-foreground">Latest Arrivals</h1>
          <p className="text-primary-foreground/70 mt-1 text-sm">Fresh vehicles recently arrived at our Edmonton yard — parts are being pulled now</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles.map(v => (
            <Link key={v.id} to={`/latest-arrivals/${v.id}`} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[16/10] bg-muted flex items-center justify-center">
                <Car className="w-10 h-10 text-muted-foreground/30" />
              </div>
              <div className="p-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-bold text-sm">{v.year} {v.make} {v.model}</p>
                    {v.trim && <p className="text-xs text-muted-foreground">{v.trim}</p>}
                  </div>
                  <span className="text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded shrink-0">#{v.stockNumber}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${v.status === 'Available' ? 'bg-success/10 text-success' : 'bg-accent/10 text-accent'}`}>
                    {v.status === 'Dismantling' ? 'Now Dismantling' : v.status}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    {v.mileage && <span>{v.mileage.toLocaleString()} km</span>}
                    <span>Arrived {new Date(v.dateArrived).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {v.partsAvailable.slice(0, 3).map(p => (
                    <span key={p} className="text-[10px] bg-secondary px-2 py-0.5 rounded text-secondary-foreground">{p}</span>
                  ))}
                  {v.partsAvailable.length > 3 && <span className="text-[10px] text-muted-foreground">+{v.partsAvailable.length - 3} more</span>}
                </div>
                <p className="text-xs text-accent font-medium mt-2">View Parts from This Vehicle →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <CallToAction title="Looking for a Specific Part?" description="Can't find it in our latest arrivals? Call us — we source parts from our network across Western Canada." linkTo="/search-inventory" linkLabel="Search Full Inventory" />
    </div>
  );
}
