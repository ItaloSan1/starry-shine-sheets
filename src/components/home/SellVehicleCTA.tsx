import { Link } from 'react-router-dom';
import { DollarSign } from 'lucide-react';

export function SellVehicleCTA() {
  return (
    <section className="bg-accent py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <DollarSign className="w-12 h-12 text-accent-foreground mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-3">Got a Vehicle to Sell?</h2>
        <p className="text-accent-foreground/90 text-lg mb-6 max-w-xl mx-auto">
          We buy cars, trucks, and SUVs — running or not. Get a fair cash offer from Edmonton's most trusted auto recycler. Fast pickup, no hassle.
        </p>
        <Link
          to="/sell-your-vehicle"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
        >
          Get Your Free Quote
        </Link>
      </div>
    </section>
  );
}
