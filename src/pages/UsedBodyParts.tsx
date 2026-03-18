import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CallToAction } from '@/components/layout/CallToAction';
import { PartRequestForm } from '@/components/forms/PartRequestForm';

export default function UsedBodyParts() {
  useEffect(() => { document.title = 'Used Body Parts Edmonton | Eskimo Auto & Truck Parts'; }, []);

  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-primary-foreground">Used Body Parts in Edmonton</h1>
          <p className="text-primary-foreground/80 mt-2 text-sm md:text-base">Doors, bumpers, hoods, fenders, headlights, and more — OEM quality at used prices.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">OEM Body Panels and Exterior Parts</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">Body repair doesn't have to drain your wallet. Eskimo stocks a wide selection of used body parts pulled from late-model vehicles at our Edmonton yard. Our parts are OEM — original manufacturer quality — which means better fit and finish compared to aftermarket panels.</p>
          <p className="text-sm text-muted-foreground leading-relaxed">We supply body shops, collision centers, and vehicle owners across Edmonton and area. Serving the community since 1984.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Body Parts We Carry</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {['Doors', 'Bumper Covers', 'Hoods', 'Fenders', 'Headlights', 'Taillights', 'Grilles', 'Mirrors', 'Trunk Lids', 'Tailgates', 'Quarter Panels', 'Sliding Doors'].map(p => (
              <div key={p} className="bg-secondary rounded-md px-3 py-2.5 text-sm font-medium">{p}</div>
            ))}
          </div>
        </section>

        <PartRequestForm />
      </div>
      <CallToAction title="Need a Body Part for a Repair?" description="Call or text us with your year, make, model, and the part you need. We'll check stock and color match." />
    </div>
  );
}
