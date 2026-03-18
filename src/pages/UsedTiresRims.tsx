import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CallToAction } from '@/components/layout/CallToAction';
import { PartRequestForm } from '@/components/forms/PartRequestForm';

export default function UsedTiresRims() {
  useEffect(() => { document.title = 'Used Tires & Rims Edmonton | Eskimo Auto & Truck Parts'; }, []);

  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-primary-foreground">Used Tires & Rims in Edmonton</h1>
          <p className="text-primary-foreground/80 mt-2 text-sm md:text-base">OEM wheels and quality used tires for cars and trucks at great prices.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Quality Used Wheels and Tires</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">OEM wheels from the factory fit better and look better than generic aftermarket options. At Eskimo, we pull factory wheels and alloy rims from vehicles we dismantle and offer them at a fraction of dealer pricing. We also carry used tires with good tread life remaining.</p>
          <p className="text-sm text-muted-foreground leading-relaxed">We stock wheels for Ford, Chevy, Toyota, Honda, Dodge, and more. Tell us your bolt pattern, size, and vehicle, and we'll match the right set. <Link to="/search-inventory?category=tires-rims" className="text-accent font-semibold hover:underline">Browse our tire and rim inventory</Link>. Serving Edmonton since 1984.</p>
        </section>

        <PartRequestForm />
      </div>
      <CallToAction title="Need Wheels or Tires?" description="Tell us your vehicle and we'll find the right fit from our inventory." />
    </div>
  );
}
