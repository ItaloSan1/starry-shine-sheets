import { Link } from 'react-router-dom';
import { CallToAction } from '@/components/layout/CallToAction';
import { PartRequestForm } from '@/components/forms/PartRequestForm';

export default function UsedAutoParts() {
  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">Used Auto Parts in Edmonton</h1>
          <p className="text-primary-foreground/80 mt-2 text-lg">Quality recycled car parts at a fraction of the cost — tested, warrantied, and ready for pickup or delivery.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Save Money with Quality Used Auto Parts</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Whether you're a DIY mechanic, a repair shop, or just looking to fix your daily driver without breaking the bank, Eskimo Auto & Truck Parts has the used car parts you need. We stock thousands of tested components from popular makes like Ford, Chevrolet, Toyota, Honda, and Dodge — all pulled from late-model vehicles at our Edmonton recycling facility.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Every part we sell is inspected for quality and comes with a warranty. From engines and transmissions to doors, bumpers, headlights, and electrical components, we carry a full range of replacement parts to keep your vehicle on the road.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Parts We Carry</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['Engines', 'Transmissions', 'Body Panels', 'Doors', 'Bumpers', 'Headlights & Taillights', 'Wheels & Tires', 'Mirrors', 'Starters & Alternators', 'Radiators', 'Suspension Parts', 'Interior Parts'].map(p => (
              <div key={p} className="bg-secondary rounded-md px-4 py-3 text-sm font-medium">{p}</div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Popular Makes in Stock</h2>
          <p className="text-muted-foreground leading-relaxed">We regularly dismantle Ford, Chevrolet, GMC, Toyota, Honda, Dodge, Ram, Hyundai, Kia, Nissan, Subaru, Volkswagen, and more. <Link to="/search-inventory" className="text-accent font-semibold hover:underline">Search our current inventory</Link> to see what's available today.</p>
        </section>

        <PartRequestForm />
      </div>
      <CallToAction title="Need a Specific Part?" description="Call or text us — if we don't have it, we'll find it for you." linkTo="/search-inventory" linkLabel="Search Inventory" />
    </div>
  );
}
