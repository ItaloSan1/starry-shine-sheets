import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useSEO } from '@/hooks/useSEO';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CallToAction } from '@/components/layout/CallToAction';
import { BUSINESS } from '@/lib/constants';
import { Shield, Award, Wrench, ChevronRight } from 'lucide-react';

const MANUFACTURER_GROUPS = [
  { label: 'GM / Chevrolet', icon: '🇺🇸' },
  { label: 'Ford', icon: '🔵' },
  { label: 'Chrysler / Mopar', icon: '⭐' },
  { label: 'Toyota / Lexus', icon: '🔴' },
  { label: 'Honda / Acura', icon: '🟡' },
  { label: 'Nissan / Infiniti', icon: '⚫' },
  { label: 'Other Makes', icon: '🔧' },
];

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Remanufactured Cylinder Heads' },
];

export default function CylinderHeads() {
  useSEO({
    title: 'Remanufactured Cylinder Heads Edmonton | ATK | Eskimo Auto Parts',
    description: `Shop remanufactured cylinder heads at ${BUSINESS.name}. GM, Ford, Chrysler, Toyota & more. Factory-spec rebuilt, tested, and warranty-backed. Call ${BUSINESS.phone}.`,
  });

  const [totalHeads, setTotalHeads] = useState(0);

  useEffect(() => {
    supabase
      .from('cylinder_heads')
      .select('id', { count: 'exact', head: true })
      .eq('active', true)
      .then(({ count }) => setTotalHeads(count || 0));
  }, []);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <section className="bg-secondary text-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
            Remanufactured Cylinder Heads <span className="text-accent">Edmonton</span>
          </h1>
          <p className="text-foreground/60 max-w-2xl text-lg">
            {totalHeads > 0 ? `${totalHeads} cylinder heads` : 'Factory-spec remanufactured cylinder heads'} available.
            Every unit is pressure tested, resurfaced, and warranty-backed.
          </p>
        </div>
      </section>

      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent" /> Full Warranty Coverage</span>
          <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent" /> Pressure Tested & Certified</span>
          <span className="flex items-center gap-2"><Wrench className="w-5 h-5 text-accent" /> Professional-Grade Quality</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Browse ATK Cylinder Heads</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/remanufactured-cylinder-heads/atk"
            className="group glass rounded-xl p-6 hover:border-accent hover:shadow-md transition-all col-span-1 sm:col-span-2"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl mr-2">🔧</span>
                <span className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">All ATK Cylinder Heads</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {totalHeads > 0 ? `${totalHeads} cylinder heads` : 'Browse the full catalog'} — filter by make and displacement
            </p>
          </Link>
        </div>
      </section>

      <section className="bg-secondary/30 py-12">
        <div className="max-w-4xl mx-auto px-4 prose prose-sm text-foreground">
          <h2 className="text-xl font-bold mb-4">What Is a Remanufactured Cylinder Head?</h2>
          <p>
            A <strong>remanufactured cylinder head</strong> is completely disassembled, cleaned, and inspected. Critical surfaces are re-machined to original factory specifications. Valve seats are recut, guides are replaced where needed, and the entire assembly is pressure tested to verify it seals under operating conditions. The result is a cylinder head that performs like new — without the new price tag.
          </p>
          <p>
            Unlike a used cylinder head pulled from a salvage vehicle, a remanufactured unit has known tolerances and verified integrity. Unlike a simple valve job, every wearing surface in a remanufactured head has been addressed.
          </p>
          <h3 className="text-lg font-bold mt-6 mb-2">Why Choose ATK Cylinder Heads?</h3>
          <p>
            ATK is North America's largest dedicated powertrain remanufacturer. Their cylinder heads undergo the same rigorous testing and quality standards as their engines. Every unit ships ready to install with new valve seals and springs where applicable. When you order through {BUSINESS.name}, you get ATK's manufacturing quality backed by our local expertise and support.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-3">Not Sure Which Cylinder Head Fits Your Vehicle?</h2>
        <p className="text-muted-foreground mb-6">Tell us your year, make, model, and engine size — our parts specialists will match you with the right remanufactured cylinder head and get you a quote the same day.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center justify-center bg-accent text-accent-foreground font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Call {BUSINESS.phone}
          </a>
          <Link to="/request-a-part" className="inline-flex items-center justify-center border border-accent text-accent font-bold px-6 py-3 rounded-lg hover:bg-accent/10 transition-colors">
            Request a Free Quote
          </Link>
        </div>
      </section>

      <CallToAction title="Need a Part? We Can Help." linkTo="/request-a-part" linkLabel="Request a Part" />
    </>
  );
}
