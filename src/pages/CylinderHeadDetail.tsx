import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useSEO } from '@/hooks/useSEO';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CallToAction } from '@/components/layout/CallToAction';
import { BUSINESS } from '@/lib/constants';
import { formatCad, usdToCad, CYLINDER_HEAD_MARKUP } from '@/lib/pricing';
import { Shield, ArrowLeft } from 'lucide-react';

interface HeadDetail {
  id: string;
  brand: string;
  vendor_part_number: string;
  name: string;
  slug: string;
  engine_make_size: string | null;
  displacement: string | null;
  fits_vehicles: string | null;
  config: string | null;
  price_usd: number;
  image_url: string | null;
}

interface RelatedHead {
  id: string;
  name: string;
  slug: string;
  displacement: string | null;
  price_usd: number;
  image_url: string | null;
}

export default function CylinderHeadDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [head, setHead] = useState<HeadDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState<RelatedHead[]>([]);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    supabase
      .from('cylinder_heads')
      .select('id, brand, vendor_part_number, name, slug, engine_make_size, displacement, fits_vehicles, config, price_usd, image_url')
      .eq('slug', slug)
      .eq('active', true)
      .maybeSingle()
      .then(({ data }) => {
        setHead(data as HeadDetail | null);
        setLoading(false);
        if (data?.engine_make_size) {
          supabase
            .from('cylinder_heads')
            .select('id, name, slug, displacement, price_usd, image_url')
            .eq('engine_make_size', data.engine_make_size)
            .eq('active', true)
            .neq('id', data.id)
            .limit(4)
            .then(({ data: rel }) => setRelated((rel as RelatedHead[]) || []));
        }
      });
  }, [slug]);

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Cylinder Heads', to: '/remanufactured-cylinder-heads' },
    { label: 'ATK', to: '/remanufactured-cylinder-heads/atk' },
    { label: head?.name?.slice(0, 40) || 'Detail' },
  ];

  useSEO({
    title: head ? `${head.name} | ATK Cylinder Head | ${BUSINESS.name}` : `Cylinder Head | ${BUSINESS.name}`,
    description: head ? `${head.name}. ${formatCad(head.price_usd, CYLINDER_HEAD_MARKUP)}. Remanufactured cylinder head with warranty. ${BUSINESS.phone}` : 'Loading...',
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-8 h-8 border-3 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!head) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Cylinder Head Not Found</h1>
        <p className="text-muted-foreground mb-6">This cylinder head may no longer be available.</p>
        <Link to="/remanufactured-cylinder-heads/atk" className="text-accent font-semibold hover:underline">← Browse All ATK Cylinder Heads</Link>
      </div>
    );
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: head.name,
    brand: { '@type': 'Brand', name: 'ATK' },
    description: `Remanufactured ${head.displacement || ''} cylinder head. ${head.fits_vehicles || ''}`,
    image: head.image_url || undefined,
    sku: head.vendor_part_number,
    offers: {
      '@type': 'Offer',
      price: usdToCad(head.price_usd, CYLINDER_HEAD_MARKUP),
      priceCurrency: 'CAD',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: BUSINESS.name },
    },
  };

  const specs = [
    { label: 'Brand', value: head.brand },
    { label: 'Part #', value: head.vendor_part_number },
    { label: 'Type', value: head.engine_make_size },
    { label: 'Displacement', value: head.displacement },
    { label: 'Configuration', value: head.config },
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
        <Link to="/remanufactured-cylinder-heads/atk" className="inline-flex items-center gap-1 text-sm text-accent hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to ATK Cylinder Heads
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="aspect-square bg-secondary/30 flex items-center justify-center p-4">
              {head.image_url ? (
                <img src={head.image_url} alt={head.name} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  if (!img.dataset.fallback) {
                    img.dataset.fallback = '1';
                    img.src = `https://atksales.com/Images/Parts/Medium/${head.vendor_part_number}.jpg`;
                    return;
                  }
                  img.src = '/placeholder.svg';
                }} />
              ) : (
                <span className="text-muted-foreground">No Image Available</span>
              )}
            </div>
          </div>

          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-foreground mb-3">{head.name}</h1>
            <div className="flex items-center gap-3 mb-4">
              {head.displacement && <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">{head.displacement}</span>}
              {head.engine_make_size && <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">{head.engine_make_size}</span>}
            </div>
            <div className="text-3xl font-extrabold text-accent mb-4">
              {head.price_usd > 0 ? formatCad(head.price_usd, CYLINDER_HEAD_MARKUP) : 'Call for Pricing'}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Shield className="w-4 h-4 text-accent" />
              <span>Factory-spec remanufactured — pressure tested & warranted</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                to={`/request-a-part?part=${encodeURIComponent(head.name)}&stock=${encodeURIComponent(head.vendor_part_number)}`}
                className="inline-flex items-center justify-center bg-accent text-accent-foreground font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
              >
                Get a Quote
              </Link>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center justify-center border border-accent text-accent font-bold px-6 py-3 rounded-lg hover:bg-accent/10 transition-colors text-center">
                Call {BUSINESS.phone}
              </a>
            </div>
            {head.fits_vehicles && (
              <div className="mb-6">
                <h2 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">Compatible Vehicles</h2>
                <p className="text-sm text-muted-foreground">{head.fits_vehicles}</p>
              </div>
            )}
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

      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-8">
          <h2 className="text-xl font-bold mb-4">Related Cylinder Heads</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map(rel => (
              <Link key={rel.id} to={`/remanufactured-cylinder-heads/atk/${rel.slug}`} className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all">
                <div className="aspect-[4/3] bg-secondary/30 overflow-hidden">
                  {rel.image_url ? (
                    <img src={rel.image_url} alt={rel.name} loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-contain" onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (!img.dataset.fallback) {
                        img.dataset.fallback = '1';
                        const pno = rel.name.match(/ATK\s+(\S+)/i)?.[1];
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
                  <span className="text-sm font-bold text-accent mt-1 block">
                    {rel.price_usd > 0 ? formatCad(rel.price_usd, CYLINDER_HEAD_MARKUP) : 'Call for Pricing'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CallToAction title="Looking for Expert Guidance?" linkTo="/request-a-part" linkLabel="Get a Free Quote" />
    </>
  );
}
