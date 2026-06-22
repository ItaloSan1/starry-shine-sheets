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
    description: `Shop 1,000+ remanufactured engines at ${BUSINESS.name}. GM, Ford, Chrysler, Toyota, Honda & more. Every engine is factory-spec rebuilt, dyno tested, and warranty-backed. Call ${BUSINESS.phone}.`,
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
      <section className="bg-secondary text-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
            Remanufactured Engines <span className="text-accent">Edmonton</span>
          </h1>
          <p className="text-foreground/60 max-w-2xl text-lg">
            Over {totalEngines > 0 ? totalEngines.toLocaleString() : '1,000'} factory-spec remanufactured crate engines.
            Every unit is dyno tested, warranty-backed, and available for shipping across Edmonton and Alberta.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent" /> Full Warranty Coverage</span>
          <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent" /> Dyno Tested & Certified</span>
          <span className="flex items-center gap-2"><Wrench className="w-5 h-5 text-accent" /> Professional-Grade Quality</span>
        </div>
      </section>

      {/* Browse by Manufacturer */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Browse by Vehicle Manufacturer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MANUFACTURER_GROUPS.map(group => {
            const count = getGroupCount(group);
            return (
              <Link
                key={group.label}
                to={`/remanufactured-engines/atk?make=${encodeURIComponent(group.label)}`}
                className="group glass rounded-xl p-5 hover:border-accent hover:shadow-md transition-all"
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
          <h2 className="text-xl font-bold mb-4">Understanding Your Engine Options: Remanufactured, Used, and Rebuilt</h2>
          <p>
            A <strong>remanufactured engine</strong> goes through a complete teardown. Every internal component is inspected, measured, and either re-machined to original tolerances or replaced with new parts. The assembled unit is then put through dynamometer testing to verify power output, oil pressure, and compression — the same benchmarks a factory-new engine must meet. The result is a powerplant that delivers like-new performance and durability at a fraction of the cost.
          </p>
          <p>
            A <strong>used engine</strong> is removed directly from a donor vehicle and sold in its current condition. Pricing is lower, but the remaining service life is uncertain. At {BUSINESS.name}, we carry both options and help you weigh the trade-offs based on your vehicle, budget, and driving needs.
          </p>
          <p>
            A <strong>rebuilt engine</strong> sits between the two: only the worn or failed parts are replaced, while the rest of the assembly stays as-is. It's a practical repair, but without the full re-machining that a remanufactured unit receives.
          </p>
          <h3 className="text-lg font-bold mt-6 mb-2">Why We Supply ATK Engines</h3>
          <p>
            ATK is the largest dedicated engine remanufacturer in North America. Every unit they produce is assembled in the United States, tested on a dynamometer before it ships, and covered by a comprehensive warranty. With over 1,000 applications spanning domestic and import vehicles — GM, Ford, Chrysler, Toyota, Honda, Nissan, Subaru, and others — we can match virtually any vehicle on the road today. When you order through {BUSINESS.name}, you get ATK's manufacturing quality backed by our local parts expertise and customer support.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-3">Not Sure Which Engine Fits Your Vehicle?</h2>
        <p className="text-muted-foreground mb-6">Tell us your year, make, model, and engine size — our parts specialists will match you with the right remanufactured engine and get you a quote the same day.</p>
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
