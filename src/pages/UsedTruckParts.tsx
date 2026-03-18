import { Link } from 'react-router-dom';
import { CallToAction } from '@/components/layout/CallToAction';
import { PartRequestForm } from '@/components/forms/PartRequestForm';

export default function UsedTruckParts() {
  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">Used Truck Parts in Edmonton</h1>
          <p className="text-primary-foreground/80 mt-2 text-lg">Reliable used parts for pickups, heavy-duty trucks, and commercial vehicles — in stock and ready to go.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Edmonton's Source for Used Truck Parts</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Trucks take a beating on Alberta roads, and replacement parts shouldn't cost a fortune. At Eskimo Auto & Truck Parts, we specialize in quality used parts for Ford F-150, F-250, F-350, Chevy Silverado, GMC Sierra, Dodge Ram, Toyota Tacoma, Toyota Tundra, and other popular truck models.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Our truck parts inventory includes engines (gas and diesel), transmissions, transfer cases, truck beds, tailgates, bumpers, grilles, mirrors, suspension components, and more. Every part is pulled from trucks in our Edmonton yard and inspected before sale.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Truck Models We Stock</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['Ford F-150 / F-250 / F-350', 'Chevy Silverado 1500–3500', 'GMC Sierra', 'Dodge Ram 1500–3500', 'Toyota Tacoma', 'Toyota Tundra', 'Ford Ranger', 'Nissan Frontier / Titan', 'Jeep Gladiator'].map(t => (
              <div key={t} className="bg-secondary rounded-md px-4 py-3 text-sm font-medium">{t}</div>
            ))}
          </div>
        </section>

        <PartRequestForm />
      </div>
      <CallToAction title="Need a Truck Part Fast?" description="We know time is money. Call us and we'll get your part pulled and ready." linkTo="/search-inventory" linkLabel="Search Truck Parts" />
    </div>
  );
}
