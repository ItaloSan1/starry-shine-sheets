import { Link } from 'react-router-dom';
import { Phone, Shield, Building2, Search, Wrench } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { PartRequestForm } from '@/components/forms/PartRequestForm';
import { CallToAction } from '@/components/layout/CallToAction';
import { BUSINESS } from '@/lib/constants';
import engineParts from '@/assets/engine-parts.jpg';

const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Used Engines Edmonton' }];
const categories = [
  { to: '/used-transmissions-edmonton', label: 'Transmissions' },
  { to: '/used-auto-parts-edmonton', label: 'Auto Parts' },
  { to: '/used-truck-parts-edmonton', label: 'Truck Parts' },
  { to: '/used-body-parts-edmonton', label: 'Body Parts' },
  { to: '/used-tires-rims-edmonton', label: 'Tires & Rims' },
];

export default function UsedEngines() {
  useSEO({
    title: 'Used Engines Edmonton | Eskimo Auto & Truck Parts',
    description: `Tested used engines for cars and trucks in Edmonton. Gas and diesel. Warranty-backed. Since ${BUSINESS.established}. Call ${BUSINESS.phone}.`,
  });

  return (
    <div className="pb-20 lg:pb-0">
      <section className="bg-primary text-primary-foreground py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Used Engines in Edmonton</h1>
          <p className="text-primary-foreground/70 max-w-2xl">Tested replacement engines for cars and trucks. Gas and diesel. Every engine comes with a warranty.</p>
        </div>
      </section>
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap gap-6 text-sm">
          <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-accent" /> Since {BUSINESS.established}</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-accent" /> Warranty-Backed</span>
          <span className="flex items-center gap-1.5"><Wrench className="w-4 h-4 text-accent" /> Tested Before Sale</span>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumbs items={breadcrumbs} />
        <BreadcrumbSchema items={breadcrumbs} />
        <div className="prose prose-sm max-w-none mb-8">
          <h2 className="text-lg font-bold mb-3">Replacement Engines at Recycler Prices</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Need a replacement engine? Eskimo Auto & Truck Parts carries used engines for a wide range of domestic and import vehicles. Our engines are pulled from late-model donor vehicles and come with documented mileage when available.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Every engine we sell includes a warranty — terms vary by engine type and are provided at purchase. Our team verifies fitment for your specific year, make, and model before the sale.</p>
          <h2 className="text-lg font-bold mb-3 mt-8">Engine Types We Carry</h2>
          <ul className="text-muted-foreground space-y-1 mb-4 list-disc pl-5">
            <li>4-cylinder, V6, V8, and diesel engines</li><li>Ford, GM/Chevy, Dodge/Chrysler, Toyota, Honda, Nissan, Hyundai, and more</li><li>Truck engines — F-150, Silverado, Ram, Sierra, Tacoma</li><li>Complete longblock and shortblock assemblies</li><li>Engine components — cylinder heads, blocks, intakes, turbos</li>
          </ul>
          <h2 className="text-lg font-bold mb-3 mt-8">Why Buy a Used Engine?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">A quality used engine is often the most cost-effective repair option — significantly less than a rebuilt or new engine, with proven reliability. Combined with our warranty, it's a practical choice for keeping your vehicle on the road.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-lg p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div><p className="font-bold text-sm">Looking for a specific engine?</p><p className="text-xs text-muted-foreground">Tell us your year, make, model, and engine size.</p></div>
          <div className="flex gap-2 shrink-0">
            <Link to="/search-inventory?category=engine" className="flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-bold hover:opacity-90 transition-opacity"><Search className="w-3.5 h-3.5" /> Search Engines</Link>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-1.5 border border-border px-4 py-2 rounded-md text-sm font-semibold hover:bg-muted transition-colors"><Phone className="w-3.5 h-3.5" /> Call</a>
          </div>
        </div>
        <div className="mb-8"><h3 className="font-bold text-sm mb-3">Browse by Category</h3><div className="flex flex-wrap gap-2">{categories.map(cat => (<Link key={cat.to} to={cat.to} className="text-sm bg-muted hover:bg-accent/10 hover:text-accent px-4 py-2 rounded-md transition-colors">{cat.label}</Link>))}</div></div>
        <PartRequestForm />
      </div>
      <CallToAction title="Need a Used Engine in Edmonton?" description={`Call or text ${BUSINESS.phone}. Warranty-backed engines since ${BUSINESS.established}.`} linkTo="/request-a-part" linkLabel="Request a Part" />
    </div>
  );
}
