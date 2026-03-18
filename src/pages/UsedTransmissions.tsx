import { Link } from 'react-router-dom';
import { CallToAction } from '@/components/layout/CallToAction';
import { PartRequestForm } from '@/components/forms/PartRequestForm';

export default function UsedTransmissions() {
  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">Used Transmissions in Edmonton</h1>
          <p className="text-primary-foreground/80 mt-2 text-lg">Automatic and manual transmissions — tested, warrantied, and fitment-confirmed.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Affordable Used Transmissions You Can Trust</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Transmission replacement is expensive at a dealership. Eskimo saves Edmonton drivers thousands with quality used transmissions pulled from low-mileage vehicles. We carry automatic, manual, and CVT transmissions for cars, trucks, and SUVs. Every unit is inspected and comes with up to a 90-day warranty.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">We carry popular units including Ford 10R80, Chevy 6L80, Toyota Aisin, Honda CVT, Dodge 8HP, Ram G56 manual, and more. <Link to="/search-inventory?category=transmission" className="text-accent font-semibold hover:underline">Search our transmission inventory</Link> or call for a quote.</p>
        </section>

        <PartRequestForm />
      </div>
      <CallToAction title="Transmission Trouble?" description="Don't overpay at the dealer. Call Eskimo for a quality used transmission at a fair price." />
    </div>
  );
}
