import { Link } from 'react-router-dom';
import { Wrench, Building2, Truck } from 'lucide-react';

const audiences = [
  { icon: Wrench, title: 'Mechanics & Repair Shops', desc: 'Reliable parts supply with competitive wholesale pricing. We know you need parts fast — same-day availability on most items.' },
  { icon: Building2, title: 'Body Shops', desc: 'Quality body panels, bumpers, hoods, fenders, and lights. OEM fit at used part prices. Keep your repair costs down.' },
  { icon: Truck, title: 'Fleet Operators', desc: 'Keep your fleet running with affordable replacement parts. Volume pricing and priority sourcing for regular accounts.' },
];

export function ShopsFleetSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">For Shops, Mechanics & Fleet Buyers</h2>
        <p className="text-center text-muted-foreground mb-10">We're the parts supplier Edmonton pros rely on</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map(a => (
            <div key={a.title} className="bg-card border border-border rounded-lg p-6">
              <a.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/for-shops-fleet" className="text-accent font-semibold text-sm hover:underline">
            Learn about our shop & fleet programs →
          </Link>
        </div>
      </div>
    </section>
  );
}
