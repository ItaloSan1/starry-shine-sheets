import { Link } from 'react-router-dom';
import { Phone, Shield, Building2, Wrench, Search } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { PartRequestForm } from '@/components/forms/PartRequestForm';
import { CallToAction } from '@/components/layout/CallToAction';
import { BUSINESS } from '@/lib/constants';

const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Used Transmissions Edmonton' }];

export default function UsedTransmissions() {
  useSEO({
    title: 'Used Transmissions Edmonton | Eskimo Auto & Truck Parts',
    description: `Quality used transmissions for cars and trucks in Edmonton. Automatic and manual. Warranty-backed. Since ${BUSINESS.established}. Call ${BUSINESS.phone}.`,
  });

  return (
    <div className="pb-20 lg:pb-0">
      <section className="bg-primary text-primary-foreground py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Used Transmissions in Edmonton</h1>
          <p className="text-primary-foreground/70 max-w-2xl">Automatic and manual transmissions for cars and trucks. Warranty-backed.</p>
        </div>
      </section>
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap gap-6 text-sm">
          <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-accent" /> Since {BUSINESS.established}</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-accent" /> Warranty-Backed</span>
          <span className="flex items-center gap-1.5"><Wrench className="w-4 h-4 text-accent" /> Fitment Verified</span>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumbs items={breadcrumbs} />
        <BreadcrumbSchema items={breadcrumbs} />
        <div className="prose prose-sm max-w-none mb-8">
          <h2 className="text-lg font-bold mb-3">Replacement Transmissions at Recycler Prices</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Whether you need an automatic or manual transmission, Eskimo Auto & Truck Parts has options for domestic and import vehicles. We carry transmissions for cars, trucks, and SUVs — and verify fitment before every sale.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Every transmission includes a warranty. We also carry transfer cases and related drivetrain components. If we don't have your transmission in stock, we can often source it through our recycler network.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-lg p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div><p className="font-bold text-sm">Need a transmission?</p><p className="text-xs text-muted-foreground">Search or call — we check fitment for your specific vehicle.</p></div>
          <div className="flex gap-2 shrink-0">
            <Link to="/search-inventory?category=transmission" className="flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-bold hover:opacity-90 transition-opacity"><Search className="w-3.5 h-3.5" /> Search</Link>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-1.5 border border-border px-4 py-2 rounded-md text-sm font-semibold hover:bg-muted transition-colors"><Phone className="w-3.5 h-3.5" /> Call</a>
          </div>
        </div>
        <PartRequestForm />
      </div>
      <CallToAction title="Transmission Trouble?" description={`Call or text ${BUSINESS.phone}. Warranty-backed. Since ${BUSINESS.established}.`} linkTo="/request-a-part" linkLabel="Request a Part" />
    </div>
  );
}
