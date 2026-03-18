import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CallToAction } from '@/components/layout/CallToAction';
import { PartRequestForm } from '@/components/forms/PartRequestForm';

export default function UsedTransmissions() {
  useEffect(() => { document.title = 'Used Transmissions Edmonton | Eskimo Auto & Truck Parts'; }, []);

  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-primary-foreground">Used Transmissions in Edmonton</h1>
          <p className="text-primary-foreground/80 mt-2 text-sm md:text-base">Automatic and manual transmissions — tested, warrantied, and fitment-confirmed.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Affordable Used Transmissions You Can Trust</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">Transmission replacement is expensive at a dealership. Eskimo saves Edmonton drivers thousands with quality used transmissions pulled from vehicles in our yard. We carry automatic, manual, and CVT transmissions for cars, trucks, and SUVs. Every unit is inspected and comes with a warranty — terms provided at purchase.</p>
          <p className="text-sm text-muted-foreground leading-relaxed">We carry popular units including Ford 10R80, Chevy 6L80, Toyota Aisin, Honda CVT, Dodge 8HP, Ram G56 manual, and more. <Link to="/search-inventory?category=transmission" className="text-accent font-semibold hover:underline">Search our transmission inventory</Link> or call for a quote. Serving Edmonton since 1984.</p>
        </section>

        <PartRequestForm />
      </div>
      <CallToAction title="Transmission Trouble?" description="Don't overpay at the dealer. Call Eskimo for a quality used transmission at a fair price." />
    </div>
  );
}
