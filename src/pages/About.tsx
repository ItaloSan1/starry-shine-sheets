import { CallToAction } from '@/components/layout/CallToAction';
import { MapPin, Clock, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">About Eskimo Auto & Truck Parts</h1>
          <p className="text-primary-foreground/80 mt-2 text-lg">Edmonton's trusted auto recycler since 1985.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Eskimo Auto & Truck Parts has been serving Edmonton and the surrounding area for nearly four decades. What started as a small salvage operation has grown into one of Edmonton's most trusted auto recyclers, supplying quality used parts to drivers, mechanics, body shops, and fleet operators across Alberta.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">We take pride in doing things right — every part is inspected before sale, our pricing is fair and transparent, and we back what we sell with a real warranty. Our team knows vehicles inside and out, and we're here to help you find the right part the first time.</p>
        </section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Clock, label: '38+ Years', desc: 'In business' },
            { icon: Users, label: 'Thousands', desc: 'Parts in stock' },
            { icon: MapPin, label: 'Edmonton', desc: 'Locally owned' },
            { icon: Award, label: 'Licensed', desc: 'Certified recycler' },
          ].map(s => (
            <div key={s.label} className="text-center border border-border rounded-lg p-4">
              <s.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="font-bold text-lg">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <CallToAction title="Ready to Find Your Part?" linkTo="/search-inventory" linkLabel="Search Inventory" />
    </div>
  );
}
