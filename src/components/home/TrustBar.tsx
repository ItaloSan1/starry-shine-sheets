import { Shield, ThumbsUp, Truck, Clock } from 'lucide-react';

const items = [
  { icon: Shield, label: 'Warranty on Parts', desc: 'Up to 90-day warranty' },
  { icon: ThumbsUp, label: 'Quality Tested', desc: 'Every part inspected' },
  { icon: Clock, label: 'Fast Service', desc: 'Same-day pickup available' },
  { icon: Truck, label: 'Local Delivery', desc: 'Edmonton & area delivery' },
];

export function TrustBar() {
  return (
    <section className="bg-secondary py-8 border-y border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(item => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
