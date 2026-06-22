import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Shield, Building2, Search, Wrench } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { PartRequestForm } from '@/components/forms/PartRequestForm';
import { CallToAction } from '@/components/layout/CallToAction';
import { BUSINESS } from '@/lib/constants';
import partsWarehouse from '@/assets/parts-warehouse.jpg';

const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Used Auto Parts Edmonton' }];
const categories = [
  { to: '/used-engines-edmonton', label: 'Used Engines' },
  { to: '/used-transmissions-edmonton', label: 'Used Transmissions' },
  { to: '/used-body-parts-edmonton', label: 'Body Parts' },
  { to: '/used-tires-rims-edmonton', label: 'Tires & Rims' },
  { to: '/used-truck-parts-edmonton', label: 'Truck Parts' },
];

export default function UsedAutoParts() {
  useSEO({
    title: 'Used Auto Parts Edmonton | Eskimo Auto & Truck Parts',
    description: `Quality used car parts at recycler prices in Edmonton. Engines, transmissions, body panels, electrical, and more. Warranty-backed. Since ${BUSINESS.established}. Call ${BUSINESS.phone}.`,
  });

  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative bg-secondary text-foreground py-10 overflow-hidden">
        <div className="absolute inset-0">
          <img src={partsWarehouse} alt="Eskimo Auto Parts warehouse Edmonton" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Used Auto Parts in Edmonton</h1>
          <p className="text-foreground/60 max-w-2xl">Quality used car parts at recycler prices. Every part inspected and warranty-backed.</p>
        </div>
      </section>
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap gap-6 text-sm">
          <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-accent" /> Since {BUSINESS.established}</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-accent" /> Warranty-Backed</span>
          <span className="flex items-center gap-1.5"><Wrench className="w-4 h-4 text-accent" /> Parts Sourcing Available</span>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumbs items={breadcrumbs} />
        <BreadcrumbSchema items={breadcrumbs} />
        <div className="prose prose-sm max-w-none mb-8">
          <h2 className="text-lg font-bold mb-3">Edmonton's Trusted Source for Used Car Parts</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Eskimo Auto & Truck Parts has been providing quality used auto parts to Edmonton drivers, mechanics, and shops since {BUSINESS.established}. Our yard carries a wide selection of parts from late-model vehicles — including <Link to="/used-engines-edmonton" className="text-accent hover:underline">engines</Link>, <Link to="/used-transmissions-edmonton" className="text-accent hover:underline">transmissions</Link>, <Link to="/used-body-parts-edmonton" className="text-accent hover:underline">body panels</Link>, electrical components, suspension, interior parts, and more.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Every part we sell is inspected and comes with a warranty — terms vary by part category and are provided at the time of purchase. We serve individual vehicle owners, <Link to="/for-shops-fleet" className="text-accent hover:underline">repair shops, and fleet managers</Link> across Edmonton and surrounding areas.</p>
          <h2 className="text-lg font-bold mb-3 mt-8">What We Carry</h2>
          <ul className="text-muted-foreground space-y-1 mb-4 list-disc pl-5">
            <li>Engines and engine components</li><li>Automatic and manual transmissions</li><li>Body panels — doors, fenders, hoods, bumpers, mirrors</li><li>Lighting — headlights, taillights, fog lights</li><li>Electrical — alternators, starters, modules</li><li>Suspension — struts, control arms, steering racks</li><li>Interior — seats, dashboards, consoles</li><li><Link to="/used-tires-rims-edmonton" className="text-accent hover:underline">Tires and rims</Link></li>
          </ul>
        </div>
        <div className="glass border border-border rounded-lg p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div><p className="font-bold text-sm">Looking for a specific part?</p><p className="text-xs text-muted-foreground">Search our inventory or call us — we check fitment before every sale.</p></div>
          <div className="flex gap-2 shrink-0">
            <Link to="/search-inventory" className="flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-bold hover:opacity-90 transition-opacity"><Search className="w-3.5 h-3.5" /> Search Inventory</Link>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-1.5 border border-border px-4 py-2 rounded-md text-sm font-semibold hover:bg-muted transition-colors"><Phone className="w-3.5 h-3.5" /> Call</a>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="font-bold text-sm mb-3">Browse by Category</h3>
          <div className="flex flex-wrap gap-2">{categories.map(cat => (<Link key={cat.to} to={cat.to} className="text-sm bg-muted hover:bg-accent/10 hover:text-accent px-4 py-2 rounded-md transition-colors">{cat.label}</Link>))}</div>
        </div>
        <PartRequestForm />
      </div>
      <CallToAction title="Need a Used Auto Part in Edmonton?" description={`Call or text ${BUSINESS.phone}. Serving Edmonton since ${BUSINESS.established}.`} linkTo="/request-a-part" linkLabel="Request a Part" />
    </div>
  );
}
