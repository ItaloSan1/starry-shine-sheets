import { Recycle, Search, DollarSign, Users, MapPin, Award } from 'lucide-react';

const reasons = [
  { icon: Search, title: 'Huge Inventory', desc: 'Thousands of quality-tested parts in stock from popular makes — Ford, Chevy, Toyota, Honda, Dodge, and more.' },
  { icon: DollarSign, title: 'Fair Pricing', desc: 'Save 50–80% compared to new OEM parts. We price competitively so you get the best value in Edmonton.' },
  { icon: Award, title: 'Warranty Included', desc: 'Every part comes with a warranty — up to 90 days on engines and transmissions. Buy with confidence.' },
  { icon: MapPin, title: 'Local & Convenient', desc: 'Located right here in Edmonton. Same-day pickup or local delivery available for most parts.' },
  { icon: Recycle, title: 'Eco-Friendly Recycling', desc: 'We responsibly recycle end-of-life vehicles, keeping usable parts in circulation and metals out of landfills.' },
  { icon: Users, title: 'Trusted Since 1985', desc: 'Decades of experience serving Edmonton drivers, mechanics, body shops, and fleet operators.' },
];

export function WhyEskimo() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Why Choose Eskimo Auto & Truck Parts?</h2>
        <p className="text-center text-muted-foreground mb-10">Edmonton's trusted auto recycler for nearly 40 years</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(r => (
            <div key={r.title} className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 mt-0.5">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
