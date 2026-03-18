import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CallToAction } from '@/components/layout/CallToAction';
import { PartRequestForm } from '@/components/forms/PartRequestForm';

export default function UsedEngines() {
  useEffect(() => { document.title = 'Used Engines Edmonton | Eskimo Auto & Truck Parts'; }, []);

  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-primary-foreground">Used Engines in Edmonton</h1>
          <p className="text-primary-foreground/80 mt-2 text-sm md:text-base">Tested replacement engines for cars and trucks — gas and diesel. Warranty included.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Quality Used Engines at Recycler Prices</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">A replacement engine is one of the biggest purchases you can make for your vehicle. At Eskimo, we take engine quality seriously. Every used engine we sell is inspected and comes with a warranty — terms provided at purchase. We carry gas and diesel engines for popular makes including Ford EcoBoost, Chevy LS and EcoTec, Toyota, Honda, Dodge HEMI, Cummins, Duramax, and Power Stroke diesel.</p>
          <p className="text-sm text-muted-foreground leading-relaxed">Our team confirms fitment before every sale so you can buy with confidence. Serving Edmonton since 1984.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Engines Currently in Stock</h2>
          <p className="text-sm text-muted-foreground mb-3"><Link to="/search-inventory?category=engine" className="text-accent font-semibold hover:underline">Browse our current engine inventory</Link> or call us to check availability for your specific vehicle.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {['Ford 3.5L EcoBoost', 'Ford 5.0L Coyote', 'Ford 6.7L Power Stroke', 'Chevy 5.3L V8', 'Chevy 6.6L Duramax', 'Toyota 3.5L V6', 'Toyota 5.7L V8', 'Honda 1.5T / 2.0T', 'Dodge 5.7L HEMI', 'Ram 6.7L Cummins'].map(e => (
              <div key={e} className="bg-secondary rounded-md px-3 py-2.5 text-sm font-medium">{e}</div>
            ))}
          </div>
        </section>

        <PartRequestForm />
      </div>
      <CallToAction title="Need an Engine Quote?" description="Tell us your year, make, and model. We'll check stock and give you a price." />
    </div>
  );
}
