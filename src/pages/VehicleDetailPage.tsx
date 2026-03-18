import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { inventoryProvider } from '@/lib/mock-inventory';
import type { Vehicle } from '@/lib/inventory-adapter';
import { Phone, ArrowLeft, Car, Tag } from 'lucide-react';

const PHONE = '780-555-0199';

export default function VehicleDetailPage() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) inventoryProvider.getVehicleById(id).then(v => { setVehicle(v); setLoading(false); });
  }, [id]);

  if (loading) return <div className="max-w-4xl mx-auto px-4 py-16 text-center text-muted-foreground">Loading...</div>;
  if (!vehicle) return <div className="max-w-4xl mx-auto px-4 py-16 text-center"><h2 className="text-xl font-bold mb-2">Vehicle Not Found</h2><Link to="/latest-arrivals" className="text-accent hover:underline">Back to Arrivals</Link></div>;

  return (
    <div className="pb-20 lg:pb-0">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Link to="/latest-arrivals" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Latest Arrivals
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <Car className="w-20 h-20 text-muted-foreground/20" />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-1">{vehicle.year} {vehicle.make} {vehicle.model}</h1>
            {vehicle.trim && <p className="text-muted-foreground mb-4">{vehicle.trim}</p>}
            <span className={`inline-block text-xs px-3 py-1 rounded-full font-medium mb-4 ${vehicle.status === 'Available' ? 'bg-success/10 text-success' : 'bg-accent/10 text-accent'}`}>{vehicle.status}</span>
            
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Stock #</span><span className="font-medium">{vehicle.stockNumber}</span></div>
              {vehicle.color && <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Color</span><span className="font-medium">{vehicle.color}</span></div>}
              {vehicle.mileage && <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Mileage</span><span className="font-medium">{vehicle.mileage.toLocaleString()} km</span></div>}
              <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Arrived</span><span className="font-medium">{new Date(vehicle.dateArrived).toLocaleDateString()}</span></div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-sm mb-2 flex items-center gap-1"><Tag className="w-4 h-4" /> Parts Available</h3>
              <div className="flex flex-wrap gap-2">
                {vehicle.partsAvailable.map(p => (
                  <span key={p} className="text-xs bg-secondary px-3 py-1 rounded-full text-secondary-foreground">{p}</span>
                ))}
              </div>
            </div>

            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity">
              <Phone className="w-4 h-4" /> Call About This Vehicle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
