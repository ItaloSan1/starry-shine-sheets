import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { inventoryProvider } from '@/lib/mock-inventory';
import type { Part } from '@/lib/inventory-adapter';
import { Phone, MessageCircle, ArrowLeft, Shield, Package } from 'lucide-react';
import { PartRequestForm } from '@/components/forms/PartRequestForm';

const PHONE = '780-555-0199';

export default function PartDetailPage() {
  const { id } = useParams();
  const [part, setPart] = useState<Part | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) inventoryProvider.getPartById(id).then(p => { setPart(p); setLoading(false); });
  }, [id]);

  if (loading) return <div className="max-w-4xl mx-auto px-4 py-16 text-center text-muted-foreground">Loading...</div>;
  if (!part) return <div className="max-w-4xl mx-auto px-4 py-16 text-center"><h2 className="text-xl font-bold mb-2">Part Not Found</h2><Link to="/search-inventory" className="text-accent hover:underline">Back to Search</Link></div>;

  return (
    <div className="pb-20 lg:pb-0">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Link to="/search-inventory" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Search
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
            <Package className="w-20 h-20 text-muted-foreground/20" />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">{part.description}</h1>
            <p className="text-muted-foreground mb-4">{part.year} {part.make} {part.model}</p>
            <p className="text-3xl font-extrabold text-primary mb-4">${part.price.toLocaleString()}</p>
            
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Stock #</span><span className="font-medium">{part.stockNumber}</span></div>
              <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Condition</span><span className="font-medium">{part.condition}</span></div>
              <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Availability</span><span className="font-medium text-success">{part.availability}</span></div>
              {part.mileage && <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Mileage</span><span className="font-medium">{part.mileage.toLocaleString()} km</span></div>}
              {part.warranty && <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Warranty</span><span className="font-medium flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-success" />{part.warranty}</span></div>}
              {part.fitmentNotes && <div className="flex justify-between py-2 border-b border-border"><span className="text-muted-foreground">Fitment</span><span className="font-medium">{part.fitmentNotes}</span></div>}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity">
                <Phone className="w-4 h-4" /> Call to Order
              </a>
              <a href={`sms:${PHONE}?body=Hi, I'm interested in part ${part.stockNumber}: ${part.description}`} className="flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-md font-semibold text-sm hover:bg-muted transition-colors">
                <MessageCircle className="w-4 h-4" /> Text About This Part
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <PartRequestForm />
        </div>
      </div>
    </div>
  );
}
