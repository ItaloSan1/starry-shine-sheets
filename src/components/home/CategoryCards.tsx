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
    <section className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2">Shop by Part Category</h2>
        <p className="text-center text-muted-foreground mb-8 text-sm">Find the exact part you need from our Edmonton inventory</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {categories.map(cat => (
            <Link
              key={cat.to}
              to={cat.to}
              className="group border border-border rounded-lg p-4 hover:border-accent hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                <cat.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-bold text-sm mb-0.5">{cat.label}</h3>
              <p className="text-xs text-muted-foreground">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
