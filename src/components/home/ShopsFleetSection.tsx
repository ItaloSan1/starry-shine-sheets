import { Link } from 'react-router-dom';
import { Wrench, Building2, Truck } from 'lucide-react';
import partsCounter from '@/assets/parts-counter.jpg';

const audiences = [
  { icon: Wrench, title: 'Mechanics & Repair Shops', desc: 'Reliable parts supply with competitive pricing. We understand you need parts fast and right the first time.' },
  { icon: Building2, title: 'Body Shops', desc: 'Quality OEM body panels, bumpers, hoods, fenders, and lights. Better fit than aftermarket, at used part prices.' },
  { icon: Truck, title: 'Fleet Operators', desc: 'Keep your fleet moving with affordable replacement parts. Ask about volume pricing and account options.' },
];

export function ShopsFleetSection() {
  return (
    <section className="py-12 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <h2 className="text-xl md:text-2xl font-bold mb-2">For Shops, Mechanics & Fleet Buyers</h2>
            <p className="text-muted-foreground mb-6 text-sm">We're the parts supplier Edmonton pros rely on</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {audiences.map(a => (
                <div key={a.title} className="bg-card border border-border rounded-lg p-4">
                  <a.icon className="w-6 h-6 text-accent mb-2" />
                  <h3 className="font-bold text-sm mb-1">{a.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Link to="/for-shops-fleet" className="text-accent font-semibold text-sm hover:underline">
                Learn about our shop & fleet programs →
              </Link>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={partsCounter} alt="Technician inspecting parts at Eskimo Auto counter" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
