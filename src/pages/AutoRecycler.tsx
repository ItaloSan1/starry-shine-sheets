import { Link } from 'react-router-dom';
import { Phone, Shield, Building2, Recycle, Search } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { PartRequestForm } from '@/components/forms/PartRequestForm';
import { CallToAction } from '@/components/layout/CallToAction';
import { BUSINESS } from '@/lib/constants';

const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Auto Recycler Edmonton' }];

export default function AutoRecycler() {
  useSEO({
    title: 'Auto Recycler Edmonton | Eskimo Auto & Truck Parts',
    description: `Edmonton's trusted auto recycler since ${BUSINESS.established}. We buy vehicles, recycle responsibly, and sell quality used parts. Call ${BUSINESS.phone}.`,
  });

  return (
    <div className="pb-20 lg:pb-0">
      <section className="bg-primary text-primary-foreground py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Auto Recycler in Edmonton</h1>
          <p className="text-primary-foreground/70 max-w-2xl">Edmonton's trusted auto recycler since {BUSINESS.established}. We buy vehicles, recycle responsibly, and sell quality used parts.</p>
        </div>
      </section>
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap gap-6 text-sm">
          <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-accent" /> Since {BUSINESS.established}</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-accent" /> Warranty-Backed Parts</span>
          <span className="flex items-center gap-1.5"><Recycle className="w-4 h-4 text-accent" /> Responsible Recycling</span>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumbs items={breadcrumbs} />
        <BreadcrumbSchema items={breadcrumbs} />
        <div className="prose prose-sm max-w-none mb-8">
          <h2 className="text-lg font-bold mb-3">Full-Service Auto Recycling</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Eskimo Auto & Truck Parts is a full-service auto recycling facility in Edmonton. We purchase end-of-life vehicles, carefully dismantle them, and make quality used parts available to the public, repair shops, and fleet operators.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Our recycling process follows environmental best practices — fluids are drained and disposed of properly, hazardous materials are handled according to regulations, and recyclable metals are processed responsibly.</p>
          <h2 className="text-lg font-bold mb-3 mt-8">Want to sell your vehicle?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">We buy cars, trucks, and SUVs in any condition — running or not. <Link to="/sell-your-vehicle" className="text-accent hover:underline">Get a quote →</Link></p>
        </div>
        <div className="bg-muted/50 border border-border rounded-lg p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div><p className="font-bold text-sm">Looking for used parts?</p><p className="text-xs text-muted-foreground">Search our inventory or request the part you need.</p></div>
          <div className="flex gap-2 shrink-0">
            <Link to="/search-inventory" className="flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-bold hover:opacity-90 transition-opacity"><Search className="w-3.5 h-3.5" /> Search Parts</Link>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-1.5 border border-border px-4 py-2 rounded-md text-sm font-semibold hover:bg-muted transition-colors"><Phone className="w-3.5 h-3.5" /> Call</a>
          </div>
        </div>
        <PartRequestForm />
      </div>
      <CallToAction title="Edmonton's Trusted Auto Recycler" description={`Serving Edmonton since ${BUSINESS.established}. Call ${BUSINESS.phone}.`} linkTo="/sell-your-vehicle" linkLabel="Sell Your Vehicle" />
    </div>
  );
}
