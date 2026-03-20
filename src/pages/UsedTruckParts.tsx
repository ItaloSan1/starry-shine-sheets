import { Link } from 'react-router-dom';
import { Phone, Shield, Building2, Search, Truck } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { PartRequestForm } from '@/components/forms/PartRequestForm';
import { CallToAction } from '@/components/layout/CallToAction';
import { BUSINESS } from '@/lib/constants';
import heroYard from '@/assets/hero-yard.jpg';

const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Used Truck Parts Edmonton' }];
const categories = [
  { to: '/used-engines-edmonton', label: 'Used Engines' },
  { to: '/used-transmissions-edmonton', label: 'Transmissions' },
  { to: '/used-auto-parts-edmonton', label: 'Auto Parts' },
  { to: '/used-body-parts-edmonton', label: 'Body Parts' },
  { to: '/used-tires-rims-edmonton', label: 'Tires & Rims' },
];

export default function UsedTruckParts() {
  useSEO({
    title: 'Used Truck Parts Edmonton | Eskimo Auto & Truck Parts',
    description: `Reliable used truck parts for F-150, Silverado, Ram, Sierra, and more in Edmonton. Warranty-backed. Since ${BUSINESS.established}. Call ${BUSINESS.phone}.`,
  });

  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative bg-primary text-primary-foreground py-10 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroYard} alt="Eskimo Auto truck parts yard Edmonton" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Used Truck Parts in Edmonton</h1>
          <p className="text-primary-foreground/70 max-w-2xl">Reliable used parts for Ford, Chevy, GMC, Ram, Toyota, and more. Every part inspected and warranty-backed.</p>
        </div>
      </section>
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap gap-6 text-sm">
          <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-accent" /> Since {BUSINESS.established}</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-accent" /> Warranty-Backed</span>
          <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-accent" /> Truck Specialists</span>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumbs items={breadcrumbs} />
        <BreadcrumbSchema items={breadcrumbs} />
        <div className="prose prose-sm max-w-none mb-8">
          <h2 className="text-lg font-bold mb-3">Quality Used Truck Parts at Recycler Prices</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Edmonton's trucks work hard — and when they need parts, Eskimo Auto & Truck Parts has you covered. We carry used parts for Ford F-150, F-250, F-350, Chevy Silverado, GMC Sierra, Ram 1500/2500/3500, Toyota Tacoma, Tundra, and more.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Whether you need a replacement <Link to="/used-engines-edmonton" className="text-accent hover:underline">engine</Link>, <Link to="/used-transmissions-edmonton" className="text-accent hover:underline">transmission</Link>, transfer case, bed, tailgate, bumper, or any other truck-specific component — we've got parts in stock or can source them from our recycler network.</p>
          <h2 className="text-lg font-bold mb-3 mt-8">Common Truck Parts We Carry</h2>
          <ul className="text-muted-foreground space-y-1 mb-4 list-disc pl-5">
            <li>Truck engines — gas and diesel</li><li>Automatic and manual transmissions</li><li>Transfer cases and differentials</li><li>Truck beds, tailgates, box sides</li><li>Bumpers — front and rear</li><li>Tow mirrors, headlights, taillights</li><li>Suspension components</li><li>Interior — seats, consoles, clusters</li>
          </ul>
        </div>
        <div className="bg-muted/50 border border-border rounded-lg p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div><p className="font-bold text-sm">Need a truck part?</p><p className="text-xs text-muted-foreground">Search our inventory or call — we verify fitment for your specific truck.</p></div>
          <div className="flex gap-2 shrink-0">
            <Link to="/search-inventory?category=truck" className="flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-bold hover:opacity-90 transition-opacity"><Search className="w-3.5 h-3.5" /> Search Parts</Link>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-1.5 border border-border px-4 py-2 rounded-md text-sm font-semibold hover:bg-muted transition-colors"><Phone className="w-3.5 h-3.5" /> Call</a>
          </div>
        </div>
        <div className="mb-8"><h3 className="font-bold text-sm mb-3">Browse by Category</h3><div className="flex flex-wrap gap-2">{categories.map(cat => (<Link key={cat.to} to={cat.to} className="text-sm bg-muted hover:bg-accent/10 hover:text-accent px-4 py-2 rounded-md transition-colors">{cat.label}</Link>))}</div></div>
        <PartRequestForm />
      </div>
      <CallToAction title="Need a Used Truck Part?" description={`Call or text ${BUSINESS.phone}. Since ${BUSINESS.established}.`} linkTo="/request-a-part" linkLabel="Request a Part" />
    </div>
  );
}
