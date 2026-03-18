import { Link } from 'react-router-dom';
import { Wrench, Building2, Truck } from 'lucide-react';

const audiences = [
  { icon: Wrench, title: 'Mechanics & Repair Shops', desc: 'Reliable parts supply with competitive pricing. We understand you need parts fast and right the first time.' },
  { icon: Building2, title: 'Body Shops', desc: 'Quality OEM body panels, bumpers, hoods, fenders, and lights. Better fit than aftermarket, at used part prices.' },
  { icon: Truck, title: 'Fleet Operators', desc: 'Keep your fleet moving with affordable replacement parts. Ask about volume pricing and account options.' },
];

export function ShopsFleetSection() {
  return (
    <section className="py-12 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2">For Shops, Mechanics & Fleet Buyers</h2>
        <p className="text-center text-muted-foreground mb-8 text-sm">We're the parts supplier Edmonton pros rely on</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {audiences.map(a => (
            <div key={a.title} className="bg-card border border-border rounded-lg p-5">
              <a.icon className="w-7 h-7 text-accent mb-3" />
              <h3 className="font-bold text-base mb-1.5">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/for-shops-fleet" className="text-accent font-semibold text-sm hover:underline">
            Learn about our shop & fleet programs →
          </Link>
        </div>
      </div>
    </section>
  );
}
