import { Link } from 'react-router-dom';
import { CallToAction } from '@/components/layout/CallToAction';
import { PartRequestForm } from '@/components/forms/PartRequestForm';

export default function UsedEngines() {
  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">Used Engines in Edmonton</h1>
          <p className="text-primary-foreground/80 mt-2 text-lg">Tested, warrantied replacement engines for cars and trucks — gas and diesel.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Quality Used Engines at Recycler Prices</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">A replacement engine is one of the biggest purchases you can make for your vehicle. At Eskimo, we take engine quality seriously. Every used engine we sell is compression tested, visually inspected, and comes with up to a 90-day warranty. We carry gas and diesel engines for popular makes including Ford EcoBoost, Chevy LS and EcoTec, Toyota, Honda, Dodge HEMI, Cummins, Duramax, and Power Stroke diesel.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Our team confirms fitment before every sale so you can buy with confidence. We offer same-day pickup from our Edmonton location or local delivery.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Engines Currently in Stock</h2>
          <p className="text-muted-foreground mb-4"><Link to="/search-inventory?category=engine" className="text-accent font-semibold hover:underline">Browse our current engine inventory</Link> or call us to check availability for your specific vehicle.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['Ford 3.5L EcoBoost', 'Ford 5.0L Coyote', 'Ford 6.7L Power Stroke', 'Chevy 5.3L V8', 'Chevy 6.6L Duramax', 'Toyota 3.5L V6', 'Toyota 5.7L V8', 'Honda 1.5T / 2.0T', 'Dodge 5.7L HEMI', 'Ram 6.7L Cummins'].map(e => (
              <div key={e} className="bg-secondary rounded-md px-4 py-3 text-sm font-medium">{e}</div>
            ))}
          </div>
        </section>

        <PartRequestForm />
      </div>
      <CallToAction title="Need an Engine Quote?" description="Tell us your year, make, and model. We'll check stock and give you a price." />
    </div>
  );
}
