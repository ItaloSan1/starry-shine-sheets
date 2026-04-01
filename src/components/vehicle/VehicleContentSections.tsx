import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Skeleton } from '@/components/ui/skeleton';
import { Car, Cog, Gauge, Info, Wrench } from 'lucide-react';

interface VehicleContentData {
  generation_overview: string | null;
  engine_overview: string | null;
  transmission_overview: string | null;
  vehicle_facts: string | null;
  parts_compatibility: string | null;
}

interface VehicleContentSectionsProps {
  year: number;
  make: string;
  model: string;
  trim?: string;
  engineType?: string;
  displacement?: string;
  transmissionType?: string;
}

const SECTIONS = [
  { key: 'generation_overview', title: 'Generation Overview', icon: Car, id: 'generation' },
  { key: 'engine_overview', title: 'Engine Overview', icon: Cog, id: 'engine' },
  { key: 'transmission_overview', title: 'Transmission Overview', icon: Gauge, id: 'transmission' },
  { key: 'vehicle_facts', title: 'Key Vehicle Facts', icon: Info, id: 'facts' },
  { key: 'parts_compatibility', title: 'Parts Compatibility', icon: Wrench, id: 'compatibility' },
] as const;

export function VehicleContentSections({
  year, make, model, trim, engineType, displacement, transmissionType,
}: VehicleContentSectionsProps) {
  const [content, setContent] = useState<VehicleContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchContent() {
      try {
        const { data, error: fnError } = await supabase.functions.invoke('generate-vehicle-content', {
          body: { year, make, model, trim, engineType, displacement, transmissionType },
        });

        if (cancelled) return;

        if (fnError || !data) {
          console.error('Vehicle content fetch error:', fnError);
          setError(true);
          setLoading(false);
          return;
        }

        setContent(data);
      } catch (e) {
        if (!cancelled) {
          console.error('Vehicle content error:', e);
          setError(true);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchContent();
    return () => { cancelled = true; };
  }, [year, make, model, trim, engineType, displacement, transmissionType]);

  if (error || (!loading && !content)) return null;

  if (loading) {
    return (
      <section className="mt-10 space-y-4" aria-label="Loading vehicle information">
        {[1, 2, 3].map(i => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-20 w-full" />
          </div>
        ))}
      </section>
    );
  }

  const vehicleName = `${year} ${make} ${model}`;
  const availableSections = SECTIONS.filter(s => content?.[s.key]);

  if (availableSections.length === 0) return null;

  return (
    <section className="mt-10" aria-label={`About the ${vehicleName}`}>
      <h2 className="text-lg font-bold mb-4">About the {vehicleName}</h2>

      {/* Desktop: open sections */}
      <div className="hidden md:block space-y-6">
        {availableSections.map(({ key, title, icon: Icon, id }) => (
          <article key={id} id={id} className="bg-secondary/50 rounded-lg p-5">
            <h3 className="flex items-center gap-2 font-semibold text-sm mb-2">
              <Icon className="w-4 h-4 text-accent" />
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {content![key]}
            </p>
          </article>
        ))}
      </div>

      {/* Mobile: accordion */}
      <div className="md:hidden">
        <Accordion type="multiple" defaultValue={['generation']}>
          {availableSections.map(({ key, title, icon: Icon, id }) => (
            <AccordionItem key={id} value={id}>
              <AccordionTrigger className="text-sm">
                <span className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-accent" />
                  {title}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {content![key]}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
