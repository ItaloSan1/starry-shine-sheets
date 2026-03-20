import { Link } from 'react-router-dom';
import engineParts from '@/assets/engine-parts.jpg';
import partsWarehouse from '@/assets/parts-warehouse.jpg';
import tiresRims from '@/assets/tires-rims.jpg';
import partsCounter from '@/assets/parts-counter.jpg';
import heroYard from '@/assets/hero-yard.jpg';
import yardAerial from '@/assets/yard-aerial.jpg';

const categories = [
  { img: engineParts, label: 'Engines', desc: 'Gas & diesel engines for cars and trucks', to: '/used-engines-edmonton' },
  { img: partsWarehouse, label: 'Transmissions', desc: 'Automatic & manual transmissions', to: '/used-transmissions-edmonton' },
  { img: partsCounter, label: 'Body Parts', desc: 'Doors, bumpers, hoods, fenders, lights', to: '/used-body-parts-edmonton' },
  { img: tiresRims, label: 'Tires & Rims', desc: 'OEM wheels and quality used tires', to: '/used-tires-rims-edmonton' },
  { img: heroYard, label: 'Auto Parts', desc: 'Full range of used car parts', to: '/used-auto-parts-edmonton' },
  { img: yardAerial, label: 'Truck Parts', desc: 'Light & heavy truck parts', to: '/used-truck-parts-edmonton' },
];

export function CategoryCards() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2">Shop by Part Category</h2>
        <p className="text-center text-muted-foreground mb-8 text-sm">Find the exact part you need from our Edmonton inventory</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {categories.map(cat => (
            <Link
              key={cat.to}
              to={cat.to}
              className="group relative rounded-lg overflow-hidden border border-border hover:border-accent hover:shadow-lg transition-all aspect-[4/3]"
            >
              <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <h3 className="font-bold text-sm md:text-base text-primary-foreground mb-0.5">{cat.label}</h3>
                <p className="text-[11px] md:text-xs text-primary-foreground/70">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
