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
  { label: 'GM / Chevrolet', makes: ['Chevy Small Block', 'Chevy Big Block', 'GM Gen III/IV LS', 'GM V6', 'GM L4', 'GM Diesel', 'GM I6'], icon: '🇺🇸' },
  { label: 'Ford', makes: ['Ford Small Block', 'Ford Modular', 'Ford V6', 'Ford Big Block', 'Ford L4', 'Ford V10', 'Ford I6', 'Ford Diesel', 'Ford Coyote'], icon: '🔵' },
  { label: 'Chrysler / Mopar', makes: ['Chrysler V6', 'Mopar Gen III Hemi', 'Mopar Small Block Magnum', 'Mopar Small Block LA', 'Chrysler V8', 'Chrysler L4'], icon: '⭐' },
  { label: 'Toyota / Lexus', makes: ['Toyota L4', 'Toyota V6', 'Toyota V8'], icon: '🔴' },
  { label: 'Honda / Acura', makes: ['Honda V6', 'Honda L4'], icon: '🟡' },
  { label: 'Nissan / Infiniti', makes: ['Nissan V6', 'Nissan L4', 'Nissan V8'], icon: '⚫' },
  { label: 'Subaru', makes: ['Subaru H4'], icon: '🔷' },
  { label: 'Other Makes', makes: ['Jeep I6', 'AMC/Jeep I6', 'Mazda L4', 'Mazda V6', 'Hyundai L4', 'Hyundai V6', 'Mitsubishi V6', 'Kia V6', 'Kia L4', 'Isuzu L4', 'Isuzu V6', 'Suzuki L4'], icon: '🔧' },
];

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Remanufactured Engines' },
];

export default function RemanufacturedEngines() {
  useSEO({
    title: 'Remanufactured Engines Edmonton | ATK Engines | Eskimo Auto Parts',
    description: `Shop 1,000+ remanufactured engines from ATK Engines at ${BUSINESS.name}. GM, Ford, Chrysler, Toyota, Honda & more. Warranty-backed. Call ${BUSINESS.phone}.`,
  });

  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});
  const [totalEngines, setTotalEngines] = useState(0);

  useEffect(() => {
    supabase
      .from('remanufactured_engines')
      .select('engine_make_size')
      .eq('active', true)
      .then(({ data }) => {
        if (!data) return;
        setTotalEngines(data.length);
        const counts: Record<string, number> = {};
        data.forEach((row: any) => {
          const cat = row.engine_make_size || 'Other';
          counts[cat] = (counts[cat] || 0) + 1;
        });
        setCategoryCounts(counts);
      });
  }, []);

  function getGroupCount(group: typeof MANUFACTURER_GROUPS[0]) {
    return group.makes.reduce((sum, m) => sum + (categoryCounts[m] || 0), 0);
  }

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
            Remanufactured Engines <span className="text-accent">Edmonton</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl text-lg">
            Over {totalEngines > 0 ? totalEngines.toLocaleString() : '1,000'} remanufactured crate engines from ATK Engines.
            Warranty-backed, ready to ship to Edmonton and across Alberta.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent" /> Warranty-Backed</span>
          <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent" /> ATK Certified</span>
          <span className="flex items-center gap-2"><Wrench className="w-5 h-5 text-accent" /> Professional Grade</span>
        </div>
      </section>

      {/* Browse by Manufacturer */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Browse by Vehicle Manufacturer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MANUFACTURER_GROUPS.map(group => {
            const count = getGroupCount(group);
            const filterParam = group.makes[0]; // link to ATK page with first make filter
            return (
              <Link
                key={group.label}
                to={`/remanufactured-engines/atk?make=${encodeURIComponent(group.label)}`}
                className="group bg-card border border-border rounded-xl p-5 hover:border-accent hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl mr-2">{group.icon}</span>
                    <span className="font-bold text-foreground group-hover:text-accent transition-colors">{group.label}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {count > 0 ? `${count} engines` : 'Coming soon'}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {group.makes.slice(0, 3).map(m => (
                    <span key={m} className="text-xs bg-secondary px-2 py-0.5 rounded-full text-secondary-foreground">{m}</span>
                  ))}
                  {group.makes.length > 3 && (
                    <span className="text-xs text-muted-foreground">+{group.makes.length - 3} more</span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-secondary/30 py-12">
        <div className="max-w-4xl mx-auto px-4 prose prose-sm text-foreground">
          <h2 className="text-xl font-bold mb-4">Remanufactured vs. Used vs. Rebuilt Engines</h2>
          <p>
            <strong>Remanufactured engines</strong> are completely disassembled, cleaned, inspected, and rebuilt to original equipment manufacturer (OEM) specifications
            using new and re-machined parts. Every component is tested and measured. This process delivers an engine that meets or exceeds the performance of a brand-new engine.
          </p>
          <p>
            <strong>Used engines</strong> are pulled from salvage vehicles and sold as-is. While they cost less upfront, they carry uncertainty about remaining lifespan,
            hidden damage, and wear. Eskimo Auto carries both used and remanufactured options — we help you choose what fits your budget and situation.
          </p>
          <p>
            <strong>Rebuilt engines</strong> fall in between: worn or damaged parts are replaced, but the engine isn't fully disassembled or re-machined to factory spec.
          </p>
          <h3 className="text-lg font-bold mt-6 mb-2">Why Choose ATK Engines?</h3>
          <p>
            ATK Engines is North America's largest remanufacturer of engines and cylinder heads. Every ATK engine is built in the USA,
            dynamometer tested, and backed by a comprehensive warranty. With over 1,000 applications covering GM, Ford, Chrysler, Toyota, Honda, Nissan, Subaru, and more,
            ATK has the right engine for your vehicle.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-3">Need Help Choosing the Right Engine?</h2>
        <p className="text-muted-foreground mb-6">Our parts specialists can match you with the perfect remanufactured engine for your vehicle.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center justify-center bg-accent text-accent-foreground font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Call {BUSINESS.phone}
          </a>
          <Link to="/request-a-part" className="inline-flex items-center justify-center border border-accent text-accent font-bold px-6 py-3 rounded-lg hover:bg-accent/10 transition-colors">
            Request a Quote
          </Link>
        </div>
      </section>

      <CallToAction title="Need a Part? We Can Help." linkTo="/request-a-part" linkLabel="Request a Part" />
    </>
  );
}
