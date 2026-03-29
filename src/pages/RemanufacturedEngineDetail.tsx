import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useSEO } from '@/hooks/useSEO';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CallToAction } from '@/components/layout/CallToAction';
import { BUSINESS } from '@/lib/constants';
import { formatCad, usdToCad } from '@/lib/pricing';
import { Shield, ArrowLeft } from 'lucide-react';

interface EngineDetail {
  id: string;
  brand: string;
  vendor_part_number: string;
  name: string;
  slug: string;
  engine_make_size: string | null;
  displacement: string | null;
  fits_vehicles: string | null;
  engine_code: string | null;
  config: string | null;
  block_material: string | null;
  head_material: string | null;
  category: string | null;
  price_usd: number;
  image_url: string | null;
}

interface RelatedEngine {
  id: string;
  name: string;
  slug: string;
  displacement: string | null;
  price_usd: number;
  image_url: string | null;
}

export default function RemanufacturedEngineDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [engine, setEngine] = useState<EngineDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState<RelatedEngine[]>([]);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    supabase
      .from('remanufactured_engines')
      .select('id, brand, vendor_part_number, name, slug, engine_make_size, displacement, fits_vehicles, engine_code, config, block_material, head_material, category, price_usd, image_url')
      .eq('slug', slug)
      .eq('active', true)
      .maybeSingle()
      .then(({ data }) => {
        setEngine(data as EngineDetail | null);
        setLoading(false);

        if (data?.engine_make_size) {
          supabase
            .from('remanufactured_engines')
            .select('id, name, slug, displacement, price_usd, image_url')
            .eq('engine_make_size', data.engine_make_size)
            .eq('active', true)
            .neq('id', data.id)
            .limit(4)
            .then(({ data: rel }) => {
              setRelated((rel as RelatedEngine[]) || []);
            });
        }
      });
  }, [slug]);

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Remanufactured Engines', to: '/remanufactured-engines' },
    { label: 'ATK Engines', to: '/remanufactured-engines/atk' },
    { label: engine?.name?.slice(0, 40) || 'Engine Detail' },
  ];

  useSEO({
    title: engine ? `${engine.name} | ATK Remanufactured Engine | ${BUSINESS.name}` : `Remanufactured Engine | ${BUSINESS.name}`,
    description: engine ? `${engine.name}. ${engine.price_usd > 0 ? formatCad(engine.price_usd) : 'Call for Pricing'}. ${engine.displacement || ''} remanufactured engine with warranty. ${BUSINESS.phone}` : 'Loading engine details...',
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-8 h-8 border-3 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!engine) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Engine Not Found</h1>
        <p className="text-muted-foreground mb-6">This engine may no longer be available.</p>
        <Link to="/remanufactured-engines/atk" className="text-accent font-semibold hover:underline">← Browse All ATK Engines</Link>
      </div>
    );
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: engine.name,
    brand: { '@type': 'Brand', name: 'ATK Engines' },
    description: `Remanufactured ${engine.displacement || ''} engine. ${engine.fits_vehicles || ''}`,
    image: engine.image_url || undefined,
    sku: engine.vendor_part_number,
    mpn: engine.vendor_part_number,
    offers: {
      '@type': 'Offer',
      price: usdToCad(engine.price_usd),
      priceCurrency: 'CAD',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: BUSINESS.name },
    },
  };

  const specs = [
    { label: 'Brand', value: engine.brand },
    { label: 'Manufacturer Part #', value: engine.vendor_part_number },
    { label: 'Engine Type', value: engine.engine_make_size },
    { label: 'Displacement', value: engine.displacement },
    { label: 'Engine Code', value: engine.engine_code },
    { label: 'Configuration', value: engine.config },
    { label: 'Block Material', value: engine.block_material },
    { label: 'Head Material', value: engine.head_material },
    { label: 'Category', value: engine.category },
  ].filter(s => s.value);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <section className="bg-primary text-primary-foreground py-6">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link to="/remanufactured-engines/atk" className="inline-flex items-center gap-1 text-sm text-accent hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to ATK Engines
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="aspect-square bg-secondary/30 flex items-center justify-center p-4">
              {engine.image_url ? (
                <img
                  src={engine.image_url}
                  alt={engine.name}
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    if (!img.dataset.fallback) {
                      img.dataset.fallback = '1';
                      img.src = `https://atksales.com/Images/Parts/Medium/${engine.vendor_part_number}.jpg`;
                      return;
                    }
                    img.src = '/placeholder.svg';
                  }}
                />
              ) : (
                <span className="text-muted-foreground">No Image Available</span>
              )}
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-foreground mb-3">{engine.name}</h1>

            <div className="flex items-center gap-3 mb-4">
              {engine.displacement && <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">{engine.displacement}</span>}
              {engine.engine_make_size && <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">{engine.engine_make_size}</span>}
            </div>

            <div className="text-3xl font-extrabold text-accent mb-4">
              {engine.price_usd > 0 ? formatCad(engine.price_usd) : 'Call for Pricing'}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Shield className="w-4 h-4 text-accent" />
              <span>Factory-spec remanufactured powerplant — fully warranted</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                to={`/request-a-part?part=${encodeURIComponent(engine.name)}&stock=${encodeURIComponent(engine.vendor_part_number)}`}
                className="inline-flex items-center justify-center bg-accent text-accent-foreground font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
              >
                Get a Quote on This Engine
              </Link>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center justify-center border border-accent text-accent font-bold px-6 py-3 rounded-lg hover:bg-accent/10 transition-colors text-center"
              >
                Call {BUSINESS.phone}
              </a>
            </div>

            {/* Fits Vehicles */}
            {engine.fits_vehicles && (
              <div className="mb-6">
                <h2 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">Compatible Vehicles</h2>
                <p className="text-sm text-muted-foreground">{engine.fits_vehicles}</p>
              </div>
            )}

            {/* Specs Table */}
            <div className="border border-border rounded-xl overflow-hidden">
              <h2 className="bg-secondary px-4 py-2 text-sm font-bold uppercase tracking-wide">Specifications</h2>
              <table className="w-full text-sm">
                <tbody>
                  {specs.map((s, i) => (
                    <tr key={s.label} className={i % 2 === 0 ? 'bg-card' : 'bg-secondary/30'}>
                      <td className="px-4 py-2 font-medium text-foreground w-1/3">{s.label}</td>
                      <td className="px-4 py-2 text-muted-foreground">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Related Engines */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-8">
          <h2 className="text-xl font-bold mb-4">Related {engine.engine_make_size} Engines</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map(rel => (
              <Link
                key={rel.id}
                to={`/remanufactured-engines/atk/${rel.slug}`}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all"
              >
                <div className="aspect-[4/3] bg-secondary/30 overflow-hidden">
                  {rel.image_url ? (
                    <img src={rel.image_url} alt={rel.name} loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-contain" onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (!img.dataset.fallback) {
                        img.dataset.fallback = '1';
                        const pno = rel.name.match(/ATK\s+(?:Engines\s+)?(\S+)/i)?.[1];
                        if (pno) { img.src = `https://atksales.com/Images/Parts/Medium/${pno}.jpg`; return; }
                      }
                      img.src = '/placeholder.svg';
                    }} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">No Image</div>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-semibold line-clamp-2 group-hover:text-accent transition-colors">{rel.name}</h3>
                  <span className="text-sm font-bold text-accent mt-1 block">{rel.price_usd > 0 ? formatCad(rel.price_usd) : 'Call for Pricing'}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CallToAction title="Looking for Expert Engine Guidance?" linkTo="/request-a-part" linkLabel="Get a Free Quote" />
    </>
  );
}
