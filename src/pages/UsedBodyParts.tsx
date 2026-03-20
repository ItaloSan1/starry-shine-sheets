import { Link } from 'react-router-dom';
import { Phone, Shield, Building2, Wrench, Search } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { PartRequestForm } from '@/components/forms/PartRequestForm';
import { CallToAction } from '@/components/layout/CallToAction';
import { BUSINESS } from '@/lib/constants';

const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Used Body Parts Edmonton' }];

export default function UsedBodyParts() {
  useSEO({
    title: 'Used Body Parts Edmonton | Eskimo Auto & Truck Parts',
    description: `Used body panels, doors, fenders, hoods, bumpers, and lights in Edmonton. Warranty-backed. Since ${BUSINESS.established}. Call ${BUSINESS.phone}.`,
  });

  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative bg-primary text-primary-foreground py-10 overflow-hidden">
        <div className="absolute inset-0">
          <img src={bodyParts} alt="Used body parts warehouse Eskimo Auto Parts Edmonton" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Used Body Parts in Edmonton</h1>
          <p className="text-primary-foreground/70 max-w-2xl">Doors, fenders, hoods, bumpers, mirrors, headlights, and more. Quality recycled parts at fair prices.</p>
        </div>
      </section>
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap gap-6 text-sm">
          <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-accent" /> Since {BUSINESS.established}</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-accent" /> Warranty-Backed</span>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumbs items={breadcrumbs} />
        <BreadcrumbSchema items={breadcrumbs} />
        <div className="prose prose-sm max-w-none mb-8">
          <h2 className="text-lg font-bold mb-3">Recycled Body Panels and Collision Parts</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Need a replacement door, fender, hood, or bumper? Used OEM body parts are often the best value — original factory fit and finish at a fraction of new prices. We carry body parts for cars, trucks, and SUVs from major domestic and import manufacturers.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-lg p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div><p className="font-bold text-sm">Looking for a body part?</p><p className="text-xs text-muted-foreground">Tell us what you need — we can check color and fitment.</p></div>
          <div className="flex gap-2 shrink-0">
            <Link to="/search-inventory?category=body" className="flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-bold hover:opacity-90 transition-opacity"><Search className="w-3.5 h-3.5" /> Search</Link>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-1.5 border border-border px-4 py-2 rounded-md text-sm font-semibold hover:bg-muted transition-colors"><Phone className="w-3.5 h-3.5" /> Call</a>
          </div>
        </div>
        <PartRequestForm />
      </div>
      <CallToAction title="Need a Body Part?" description={`Call or text ${BUSINESS.phone}. Since ${BUSINESS.established}.`} linkTo="/request-a-part" linkLabel="Request a Part" />
    </div>
  );
}
