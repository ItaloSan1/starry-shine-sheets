import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { firebaseInventoryProvider } from '@/lib/firebase-inventory';
import type { Vehicle } from '@/lib/inventory-adapter';
import { Phone, MessageCircle, ArrowLeft, Car, Tag, ChevronLeft, ChevronRight, X, Fuel, Cog, Gauge, Globe, Truck } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { RequestPartForm } from '@/components/forms/RequestPartForm';

export default function VehicleDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState<(Vehicle & { images?: string[]; engineType?: string; engineSize?: string; drivetrain?: string; bodyStyle?: string; fuelType?: string; transmissionType?: string; countryOfOrigin?: string; vehicleType?: string }) | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (id) {
      firebaseInventoryProvider.getVehicleById(id).then(v => {
        setVehicle(v);
        setLoading(false);
      });
    }
  }, [id]);

  useEffect(() => {
    if (vehicle) document.title = `${vehicle.year} ${vehicle.make} ${vehicle.model} | Eskimo Auto & Truck Parts Edmonton`;
  }, [vehicle]);

  if (loading) return <div className="max-w-4xl mx-auto px-4 py-16 text-center text-muted-foreground">Loading vehicle details...</div>;
  if (!vehicle) return <div className="max-w-4xl mx-auto px-4 py-16 text-center"><h2 className="text-xl font-bold mb-2">Vehicle Not Found</h2><Link to="/latest-arrivals" className="text-accent hover:underline">Back to Arrivals</Link></div>;

  const images = vehicle.images && vehicle.images.length > 0 ? vehicle.images : [];
  const hasImages = images.length > 0;

  const specs = [
    vehicle.engineType && { icon: Cog, label: 'Engine', value: vehicle.engineType },
    vehicle.drivetrain && { icon: Truck, label: 'Drivetrain', value: vehicle.drivetrain },
    vehicle.bodyStyle && { icon: Car, label: 'Body Style', value: vehicle.bodyStyle },
    vehicle.fuelType && { icon: Fuel, label: 'Fuel Type', value: vehicle.fuelType },
    vehicle.transmissionType && { icon: Gauge, label: 'Transmission', value: vehicle.transmissionType },
    vehicle.countryOfOrigin && { icon: Globe, label: 'Origin', value: vehicle.countryOfOrigin },
  ].filter(Boolean) as { icon: any; label: string; value: string }[];

  return (
    <div className="pb-20 lg:pb-0">
      <div className="max-w-5xl mx-auto px-4 py-5">
        <Link to="/latest-arrivals" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Latest Arrivals
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div
              className="aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer relative"
              onClick={() => hasImages && setLightboxOpen(true)}
            >
              {hasImages ? (
                <img
                  src={images[selectedImage]}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Car className="w-16 h-16 text-muted-foreground/20" />
                </div>
              )}
              {images.length > 1 && (
                <>
                  <button
                    onClick={e => { e.stopPropagation(); setSelectedImage(prev => (prev - 1 + images.length) % images.length); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={e => { e.stopPropagation(); setSelectedImage(prev => (prev + 1) % images.length); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
                    {selectedImage + 1}/{images.length}
                  </span>
                </>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-colors ${
                      i === selectedImage ? 'border-accent' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Vehicle Info */}
          <div>
            <h1 className="text-xl font-bold mb-1">{vehicle.year} {vehicle.make} {vehicle.model}</h1>
            {vehicle.trim && <p className="text-muted-foreground text-sm mb-3">{vehicle.trim}</p>}
            <span className={`inline-block text-xs px-3 py-1 rounded-full font-medium mb-4 ${vehicle.status === 'Available' ? 'bg-success/10 text-success' : 'bg-accent/10 text-accent'}`}>
              {vehicle.status === 'Dismantling' ? 'Now Dismantling' : vehicle.status}
            </span>

            <div className="space-y-2 text-sm mb-5">
              <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Stock #</span><span className="font-medium">{vehicle.stockNumber}</span></div>
              {vehicle.color && <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Color</span><span className="font-medium">{vehicle.color}</span></div>}
              {vehicle.mileage && <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Mileage</span><span className="font-medium">{vehicle.mileage.toLocaleString()} km</span></div>}
              <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Arrived</span><span className="font-medium">{new Date(vehicle.dateArrived).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span></div>
            </div>

            {/* VIN-decoded specs */}
            {specs.length > 0 && (
              <div className="mb-5">
                <h3 className="font-bold text-sm mb-3">Vehicle Specifications</h3>
                <div className="grid grid-cols-2 gap-2">
                  {specs.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-2 bg-secondary rounded-md p-2.5">
                      <Icon className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] text-muted-foreground">{label}</p>
                        <p className="text-xs font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {vehicle.partsAvailable && vehicle.partsAvailable.length > 0 && (
              <div className="mb-5">
                <h3 className="font-bold text-sm mb-2 flex items-center gap-1"><Tag className="w-4 h-4" /> Parts Available</h3>
                <div className="flex flex-wrap gap-2">
                  {vehicle.partsAvailable.map(p => (
                    <span key={p} className="text-xs bg-secondary px-3 py-1 rounded-full text-secondary-foreground">{p}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-2.5 rounded-md font-bold text-sm hover:opacity-90 transition-opacity">
                <Phone className="w-4 h-4" /> Call About This Vehicle
              </a>
              <a href={`sms:${BUSINESS.phoneRaw}?body=Hi, I'm interested in parts from stock %23${vehicle.stockNumber}: ${vehicle.year} ${vehicle.make} ${vehicle.model}`} className="flex items-center justify-center gap-2 border border-border px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-muted transition-colors">
                <MessageCircle className="w-4 h-4" /> Text About This Vehicle
              </a>
            </div>
          </div>
        </div>

        {/* Request Parts Form */}
        <div className="mt-10">
          <h2 className="text-lg font-bold mb-4">Request Parts from This Vehicle</h2>
          <RequestPartForm
            prefillYear={String(vehicle.year)}
            prefillMake={vehicle.make}
            prefillModel={vehicle.model}
            prefillStockNumber={vehicle.stockNumber}
          />
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && hasImages && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={e => { e.stopPropagation(); setSelectedImage(prev => (prev - 1 + images.length) % images.length); }}
            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <img
            src={images[selectedImage]}
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={e => { e.stopPropagation(); setSelectedImage(prev => (prev + 1) % images.length); }}
            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <span className="absolute bottom-4 text-white text-sm">{selectedImage + 1} / {images.length}</span>
        </div>
      )}
    </div>
  );
}
