import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CallToAction } from '@/components/layout/CallToAction';
import { PartRequestForm } from '@/components/forms/PartRequestForm';

export default function UsedTruckParts() {
  useEffect(() => { document.title = 'Used Truck Parts Edmonton | Eskimo Auto & Truck Parts'; }, []);

  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-primary-foreground">Used Truck Parts in Edmonton</h1>
          <p className="text-primary-foreground/80 mt-2 text-sm md:text-base">Reliable used parts for pickups, heavy-duty trucks, and commercial vehicles — in stock and ready to go.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Edmonton's Source for Used Truck Parts</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">Trucks take a beating on Alberta roads, and replacement parts shouldn't cost a fortune. At Eskimo Auto & Truck Parts, we specialize in quality used parts for Ford F-150, F-250, F-350, Chevy Silverado, GMC Sierra, Dodge Ram, Toyota Tacoma, Toyota Tundra, and other popular truck models.</p>
          <p className="text-sm text-muted-foreground leading-relaxed">Our truck parts inventory includes engines (gas and diesel), transmissions, transfer cases, truck beds, tailgates, bumpers, grilles, mirrors, suspension components, and more. Serving Edmonton since 1984.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Truck Models We Stock</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {['Ford F-150 / F-250 / F-350', 'Chevy Silverado 1500–3500', 'GMC Sierra', 'Dodge Ram 1500–3500', 'Toyota Tacoma', 'Toyota Tundra', 'Ford Ranger', 'Nissan Frontier / Titan', 'Jeep Gladiator'].map(t => (
              <div key={t} className="bg-secondary rounded-md px-3 py-2.5 text-sm font-medium">{t}</div>
            ))}
          </div>
        </section>

        <PartRequestForm />
      </div>
      <CallToAction title="Need a Truck Part?" description="Call us and we'll get your part pulled and ready." linkTo="/search-inventory" linkLabel="Search Truck Parts" />
    </div>
  );
}
