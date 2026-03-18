import { Shield, ThumbsUp, Wrench, MapPin } from 'lucide-react';

const items = [
  { icon: Shield, label: 'Warranty on Parts', desc: 'Terms vary by category' },
  { icon: ThumbsUp, label: 'Quality Tested', desc: 'Every part inspected' },
  { icon: Wrench, label: 'Parts Sourcing', desc: 'If we don\'t have it, we\'ll find it' },
  { icon: MapPin, label: 'Since 1984', desc: 'Edmonton\'s trusted recycler' },
];

export function TrustBar() {
  return (
    <section className="bg-secondary py-6 border-y border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(item => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-accent" />
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
