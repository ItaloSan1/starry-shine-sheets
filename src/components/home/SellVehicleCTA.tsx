import { Link } from 'react-router-dom';
import { DollarSign } from 'lucide-react';

export function SellVehicleCTA() {
  return (
    <section className="bg-accent py-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <DollarSign className="w-10 h-10 text-accent-foreground mx-auto mb-3" />
        <h2 className="text-xl md:text-2xl font-bold text-accent-foreground mb-2">Got a Vehicle to Sell?</h2>
        <p className="text-accent-foreground/90 text-sm md:text-base mb-5 max-w-xl mx-auto">
          We buy cars, trucks, and SUVs — running or not. Get a fair cash offer from Edmonton's trusted auto recycler since 1984.
        </p>
        <Link
          to="/sell-your-vehicle"
          className="inline-block bg-primary text-primary-foreground px-8 py-2.5 rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
        >
          Get Your Free Quote
        </Link>
      </div>
    </section>
  );
}
