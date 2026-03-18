import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CallToAction } from '@/components/layout/CallToAction';
import { PartRequestForm } from '@/components/forms/PartRequestForm';

export default function UsedAutoParts() {
  useEffect(() => { document.title = 'Used Auto Parts Edmonton | Eskimo Auto & Truck Parts'; }, []);

  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-primary-foreground">Used Auto Parts in Edmonton</h1>
          <p className="text-primary-foreground/80 mt-2 text-sm md:text-base">Quality recycled car parts at a fraction of the cost — tested, warrantied, and ready for pickup or delivery.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Save Money with Quality Used Auto Parts</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">Whether you're a DIY mechanic, a repair shop, or just looking to fix your daily driver without breaking the bank, Eskimo Auto & Truck Parts has the used car parts you need. We stock thousands of tested components from popular makes like Ford, Chevrolet, Toyota, Honda, and Dodge — all pulled from late-model vehicles at our Edmonton recycling facility.</p>
          <p className="text-sm text-muted-foreground leading-relaxed">Every part we sell is inspected for quality and comes with a warranty. From engines and transmissions to doors, bumpers, headlights, and electrical components — we carry a full range of replacement parts. Serving Edmonton since 1984.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Parts We Carry</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {['Engines', 'Transmissions', 'Body Panels', 'Doors', 'Bumpers', 'Headlights & Taillights', 'Wheels & Tires', 'Mirrors', 'Starters & Alternators', 'Radiators', 'Suspension Parts', 'Interior Parts'].map(p => (
              <div key={p} className="bg-secondary rounded-md px-3 py-2.5 text-sm font-medium">{p}</div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Popular Makes in Stock</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">We regularly dismantle Ford, Chevrolet, GMC, Toyota, Honda, Dodge, Ram, Hyundai, Kia, Nissan, Subaru, Volkswagen, and more. <Link to="/search-inventory" className="text-accent font-semibold hover:underline">Search our current inventory</Link> to see what's available today.</p>
        </section>

        <PartRequestForm />
      </div>
      <CallToAction title="Need a Specific Part?" description="Call or text us — if we don't have it, we can source it from our network." linkTo="/search-inventory" linkLabel="Search Inventory" />
    </div>
  );
}
