import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mongoInventoryProvider } from '@/lib/mongo-inventory';
import type { Vehicle } from '@/lib/inventory-adapter';
import { Phone, MessageCircle, ArrowLeft, Car, Tag, ChevronLeft, ChevronRight, X, Fuel, Cog, Gauge, Globe, Truck, ImageIcon, ZoomIn } from 'lucide-react';
import { BlurImage } from '@/components/ui/BlurImage';
import { BUSINESS } from '@/lib/constants';
import { RequestPartForm } from '@/components/forms/RequestPartForm';
import { useSEO } from '@/hooks/useSEO';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';

interface ExtendedVehicle extends Vehicle {
  images?: string[];
  engineType?: string;
  engineSize?: string;
  drivetrain?: string;
  bodyStyle?: string;
  fuelType?: string;
  transmissionType?: string;
  countryOfOrigin?: string;
  vehicleType?: string;
}

function VehicleImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [hdMode, setHdMode] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0 });
  const panOffset = useRef({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);
  const hasImages = images.length > 0;

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    panOffset.current = { x: 0, y: 0 };
  }, []);

  // Reset zoom when changing images
  useEffect(() => { resetZoom(); }, [selectedImage, resetZoom]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setZoom(prev => {
      const next = prev - e.deltaY * 0.002;
      return Math.min(Math.max(next, 1), 5);
    });
  }, []);

  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoom > 1) {
      resetZoom();
    } else {
      // Zoom to 2.5x centered on click position
      const rect = imgRef.current?.getBoundingClientRect();
      if (rect) {
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * -rect.width;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -rect.height;
        setZoom(2.5);
        setPan({ x, y });
        panOffset.current = { x, y };
      }
    }
  }, [zoom, resetZoom]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (zoom <= 1) return;
    e.stopPropagation();
    setIsPanning(true);
    panStart.current = { x: e.clientX - panOffset.current.x, y: e.clientY - panOffset.current.y };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [zoom]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isPanning) return;
    const x = e.clientX - panStart.current.x;
    const y = e.clientY - panStart.current.y;
    setPan({ x, y });
    panOffset.current = { x, y };
  }, [isPanning]);

  const handlePointerUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  return (
    <div>
      <div
        className="aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer relative"
        onClick={() => hasImages && setLightboxOpen(true)}
      >
          <BlurImage
            src={hasImages ? images[selectedImage] : undefined}
            alt={alt}
            wrapperClassName="aspect-video rounded-lg"
            className={hdMode ? 'object-contain' : 'object-cover'}
            fallback={<Car className="w-16 h-16 text-muted-foreground/20" />}
          />
        {hasImages && (
          <button
            onClick={e => { e.stopPropagation(); setHdMode(!hdMode); }}
            className={`absolute top-2 right-2 flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full transition-colors ${
              hdMode ? 'bg-accent text-accent-foreground' : 'bg-black/50 text-white hover:bg-black/70'
            }`}
            aria-label={hdMode ? 'Switch to standard quality' : 'Switch to HD quality'}
          >
            <ImageIcon className="w-3 h-3" />
            HD
          </button>
        )}
        {images.length > 1 && (
          <>
            <button
              onClick={e => { e.stopPropagation(); setSelectedImage(prev => (prev - 1 + images.length) % images.length); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={e => { e.stopPropagation(); setSelectedImage(prev => (prev + 1) % images.length); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
              aria-label="Next image"
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
              aria-label={`View image ${i + 1}`}
            >
              <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox with Magnification */}
      {lightboxOpen && hasImages && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => { setLightboxOpen(false); resetZoom(); }}
        >
          {/* Controls bar */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            {zoom > 1 && (
              <button
                onClick={e => { e.stopPropagation(); resetZoom(); }}
                className="text-white text-xs bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20"
              >
                Reset Zoom
              </button>
            )}
            <span className="text-white/60 text-xs">
              {zoom > 1 ? `${Math.round(zoom * 100)}%` : 'Double-click or scroll to zoom'}
            </span>
            <button
              onClick={e => { e.stopPropagation(); setLightboxOpen(false); resetZoom(); }}
              className="text-white p-2 hover:bg-white/10 rounded-full"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Zoom hint icon */}
          {zoom <= 1 && (
            <div className="absolute top-4 left-4 flex items-center gap-1.5 text-white/50 text-xs z-10">
              <ZoomIn className="w-4 h-4" />
              <span>Scroll or double-click to magnify</span>
            </div>
          )}

          <button
            onClick={e => { e.stopPropagation(); setSelectedImage(prev => (prev - 1 + images.length) % images.length); }}
            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div
            className="max-w-[90vw] max-h-[85vh] overflow-hidden"
            style={{ cursor: zoom > 1 ? (isPanning ? 'grabbing' : 'grab') : 'zoom-in' }}
            onWheel={handleWheel}
            onClick={e => e.stopPropagation()}
            onDoubleClick={handleDoubleClick}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            <img
              ref={imgRef}
              src={images[selectedImage]}
              alt={alt}
              className="max-w-[90vw] max-h-[85vh] object-contain select-none"
              style={{
                transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                transition: isPanning ? 'none' : 'transform 0.2s ease-out',
              }}
              draggable={false}
            />
          </div>

          <button
            onClick={e => { e.stopPropagation(); setSelectedImage(prev => (prev + 1) % images.length); }}
            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <span className="absolute bottom-4 text-white text-sm">{selectedImage + 1} / {images.length}</span>
        </div>
      )}
    </div>
  );
}

function VehicleSpecs({ specs }: { specs: { icon: any; label: string; value: string }[] }) {
  if (specs.length === 0) return null;
  return (
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
  );
}

function VehicleJsonLd({ vehicle }: { vehicle: ExtendedVehicle }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${vehicle.year} ${vehicle.make} ${vehicle.model} Used Parts`,
    description: `Quality used parts from a ${vehicle.year} ${vehicle.make} ${vehicle.model}. Available at Eskimo Auto & Truck Parts Edmonton.`,
    brand: { '@type': 'Brand', name: vehicle.make },
    sku: vehicle.stockNumber,
    offers: {
      '@type': 'Offer',
      availability: vehicle.status === 'Available' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
      seller: {
        '@type': 'AutoPartsStore',
        name: BUSINESS.name,
        telephone: BUSINESS.phone,
      },
    },
    ...(vehicle.images && vehicle.images.length > 0 ? { image: vehicle.images[0] } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function VehicleDetailPage() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState<ExtendedVehicle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      mongoInventoryProvider.getVehicleById(id).then(v => {
        setVehicle(v);
        setLoading(false);
      }).catch(() => setLoading(false));
    }
  }, [id]);

  const pageTitle = vehicle
    ? `${vehicle.year} ${vehicle.make} ${vehicle.model} Parts | Eskimo Auto Edmonton`
    : 'Vehicle Details | Eskimo Auto & Truck Parts Edmonton';
  const pageDesc = vehicle
    ? `Used parts from a ${vehicle.year} ${vehicle.make} ${vehicle.model} at Eskimo Auto & Truck Parts Edmonton. Stock #${vehicle.stockNumber}. Warranty-backed. Call (780) 473-2424.`
    : 'View vehicle details and available used parts at Eskimo Auto & Truck Parts Edmonton.';

  useSEO({ title: pageTitle, description: pageDesc });

  if (loading) return <div className="max-w-4xl mx-auto px-4 py-16 text-center text-muted-foreground">Loading vehicle details...</div>;
  if (!vehicle) return <div className="max-w-4xl mx-auto px-4 py-16 text-center"><h2 className="text-xl font-bold mb-2">Vehicle Not Found</h2><Link to="/latest-arrivals" className="text-accent hover:underline">Back to Arrivals</Link></div>;

  const images = vehicle.images && vehicle.images.length > 0 ? vehicle.images : [];

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
      <VehicleJsonLd vehicle={vehicle} />
      <BreadcrumbSchema items={[
        { label: 'Home', to: '/' },
        { label: 'Latest Arrivals', to: '/latest-arrivals' },
        { label: `${vehicle.year} ${vehicle.make} ${vehicle.model}` },
      ]} />

      <div className="max-w-5xl mx-auto px-4 py-5">
        <nav aria-label="Breadcrumb">
          <Link to="/latest-arrivals" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Latest Arrivals
          </Link>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VehicleImageGallery images={images} alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} used parts at Eskimo Auto Edmonton`} />

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

            <VehicleSpecs specs={specs} />

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

        <section className="mt-10" aria-label="Request parts form">
          <h2 className="text-lg font-bold mb-4">Request Parts from This Vehicle</h2>
          <RequestPartForm
            prefillYear={String(vehicle.year)}
            prefillMake={vehicle.make}
            prefillModel={vehicle.model}
            prefillStockNumber={vehicle.stockNumber}
          />
        </section>
      </div>
    </div>
  );
}