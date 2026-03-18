import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { inventoryProvider } from '@/lib/mock-inventory';
import type { Part } from '@/lib/inventory-adapter';
import { Phone, MessageCircle, ArrowLeft, Shield, Camera } from 'lucide-react';
import { PartRequestForm } from '@/components/forms/PartRequestForm';
import { BUSINESS } from '@/lib/constants';

export default function PartDetailPage() {
  const { id } = useParams();
  const [part, setPart] = useState<Part | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) inventoryProvider.getPartById(id).then(p => { setPart(p); setLoading(false); });
  }, [id]);

  useEffect(() => {
    if (part) document.title = `${part.description} | Eskimo Auto & Truck Parts Edmonton`;
  }, [part]);

  if (loading) return <div className="max-w-4xl mx-auto px-4 py-16 text-center text-muted-foreground">Loading...</div>;
  if (!part) return <div className="max-w-4xl mx-auto px-4 py-16 text-center"><h2 className="text-xl font-bold mb-2">Part Not Found</h2><Link to="/search-inventory" className="text-accent hover:underline">Back to Search</Link></div>;

  return (
    <div className="pb-20 lg:pb-0">
      <div className="max-w-5xl mx-auto px-4 py-5">
        <Link to="/search-inventory" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Search
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-muted rounded-lg flex flex-col items-center justify-center">
            <Camera className="w-16 h-16 text-muted-foreground/20 mb-2" />
            <span className="text-xs text-muted-foreground/40">Photo coming soon</span>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-2">{part.description}</h1>
            <p className="text-muted-foreground text-sm mb-3">{part.year} {part.make} {part.model}</p>
            <p className="text-2xl font-extrabold text-foreground mb-4">${part.price.toLocaleString()}</p>
            
            <div className="space-y-2 text-sm mb-5">
              <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Stock #</span><span className="font-medium">{part.stockNumber}</span></div>
              <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Condition</span><span className="font-medium">{part.condition}</span></div>
              <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Availability</span><span className="font-medium text-success">{part.availability}</span></div>
              {part.mileage && <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Mileage</span><span className="font-medium">{part.mileage.toLocaleString()} km</span></div>}
              {part.warranty && <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Warranty</span><span className="font-medium flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-success" />{part.warranty}</span></div>}
              {part.fitmentNotes && <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Fitment</span><span className="font-medium">{part.fitmentNotes}</span></div>}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-2.5 rounded-md font-bold text-sm hover:opacity-90 transition-opacity">
                <Phone className="w-4 h-4" /> Call to Order
              </a>
              <a href={`sms:${BUSINESS.phoneRaw}?body=Hi, I'm interested in part %23${part.stockNumber}: ${part.description}`} className="flex items-center justify-center gap-2 border border-border px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-muted transition-colors">
                <MessageCircle className="w-4 h-4" /> Text About This Part
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <PartRequestForm />
        </div>
      </div>
    </div>
  );
}
