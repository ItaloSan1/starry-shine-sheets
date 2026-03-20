import { Link } from 'react-router-dom';
import { Phone, Shield, Building2, Wrench, Search } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { PartRequestForm } from '@/components/forms/PartRequestForm';
import { CallToAction } from '@/components/layout/CallToAction';
import { BUSINESS } from '@/lib/constants';

const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Used Tires & Rims Edmonton' }];

export default function UsedTiresRims() {
  useSEO({
    title: 'Used Tires & Rims Edmonton | Eskimo Auto & Truck Parts',
    description: `Used tires and rims for cars and trucks in Edmonton. OEM wheels, alloy rims, steel wheels. Since ${BUSINESS.established}. Call ${BUSINESS.phone}.`,
  });

  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative bg-primary text-primary-foreground py-10 overflow-hidden">
        <div className="absolute inset-0">
          <img src={tiresRims} alt="Used tires and rims at Eskimo Auto Parts Edmonton" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Used Tires & Rims in Edmonton</h1>
          <p className="text-primary-foreground/70 max-w-2xl">OEM wheels, alloy rims, steel wheels, and used tires at recycler prices.</p>
        </div>
      </section>
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap gap-6 text-sm">
          <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-accent" /> Since {BUSINESS.established}</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-accent" /> Quality Checked</span>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumbs items={breadcrumbs} />
        <BreadcrumbSchema items={breadcrumbs} />
        <div className="prose prose-sm max-w-none mb-8">
          <h2 className="text-lg font-bold mb-3">Quality Used Wheels and Tires</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Looking for a replacement wheel or a set of winter tires? We carry OEM alloy and steel wheels for cars, trucks, and SUVs. Call us with your bolt pattern, size, and vehicle info — we'll match the right wheel for your vehicle.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-lg p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div><p className="font-bold text-sm">Need tires or rims?</p><p className="text-xs text-muted-foreground">Call us with your tire size or bolt pattern.</p></div>
          <div className="flex gap-2 shrink-0">
            <Link to="/search-inventory?category=tires-rims" className="flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-bold hover:opacity-90 transition-opacity"><Search className="w-3.5 h-3.5" /> Search</Link>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-1.5 border border-border px-4 py-2 rounded-md text-sm font-semibold hover:bg-muted transition-colors"><Phone className="w-3.5 h-3.5" /> Call</a>
          </div>
        </div>
        <PartRequestForm />
      </div>
      <CallToAction title="Need Tires or Rims?" description={`Call or text ${BUSINESS.phone}. Since ${BUSINESS.established}.`} linkTo="/request-a-part" linkLabel="Request a Part" />
    </div>
  );
}
