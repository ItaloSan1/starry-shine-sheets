import { Link } from 'react-router-dom';
import { Settings, Cog, PanelTop, CircleDot, Zap, Wrench } from 'lucide-react';

const categories = [
  { icon: Settings, label: 'Engines', desc: 'Gas & diesel engines for cars and trucks', to: '/used-engines-edmonton' },
  { icon: Cog, label: 'Transmissions', desc: 'Automatic & manual transmissions', to: '/used-transmissions-edmonton' },
  { icon: PanelTop, label: 'Body Parts', desc: 'Doors, bumpers, hoods, fenders, lights', to: '/used-body-parts-edmonton' },
  { icon: CircleDot, label: 'Tires & Rims', desc: 'OEM wheels and quality used tires', to: '/used-tires-rims-edmonton' },
  { icon: Zap, label: 'Auto Parts', desc: 'Full range of used car parts', to: '/used-auto-parts-edmonton' },
  { icon: Wrench, label: 'Truck Parts', desc: 'Light & heavy truck parts', to: '/used-truck-parts-edmonton' },
];

export function CategoryCards() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Shop by Part Category</h2>
        <p className="text-center text-muted-foreground mb-10">Find the exact part you need from our Edmonton inventory</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.to}
              to={cat.to}
              className="group border border-border rounded-lg p-5 hover:border-accent hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-3 group-hover:bg-accent/10 transition-colors">
                <cat.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-bold text-base mb-1">{cat.label}</h3>
              <p className="text-sm text-muted-foreground">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
