import { Recycle, Search, DollarSign, Users, MapPin, Shield } from 'lucide-react';
import partsWarehouse from '@/assets/parts-warehouse.jpg';

const reasons = [
  { icon: Search, title: 'Huge Inventory', desc: 'Thousands of quality-tested parts in stock from popular makes — Ford, Chevy, Toyota, Honda, Dodge, and more.' },
  { icon: DollarSign, title: 'Fair Pricing', desc: 'Save 50–80% compared to new OEM parts. Competitive pricing so you get the best value in Edmonton.' },
  { icon: Shield, title: 'Warranty-Backed Parts', desc: 'Every part comes with a warranty. Specific terms vary by part category — ask us for details at time of purchase.' },
  { icon: Recycle, title: 'Parts Sourcing Network', desc: 'Can\'t find it in our yard? We source parts from recyclers across Western Canada. One call, one invoice.' },
  { icon: MapPin, title: 'Eco-Friendly Recycling', desc: 'We responsibly recycle end-of-life vehicles, keeping usable parts in circulation and metals out of landfills.' },
  { icon: Users, title: 'Trusted Since 1984', desc: 'Over four decades of experience serving Edmonton drivers, mechanics, body shops, and fleet operators.' },
];

export function WhyEskimo() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="hidden lg:block">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={partsWarehouse} alt="Eskimo Auto Parts warehouse with organized shelving" className="w-full h-80 object-cover" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Why Choose Eskimo Auto & Truck Parts?</h2>
            <p className="text-muted-foreground mb-6 text-sm">Edmonton's trusted auto recycler for over 40 years</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map(r => (
                <div key={r.title} className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <r.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-0.5">{r.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
