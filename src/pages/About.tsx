import { CallToAction } from '@/components/layout/CallToAction';
import { MapPin, Clock, Users, Award } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { useSEO } from '@/hooks/useSEO';
import yardAerial from '@/assets/yard-aerial.jpg';
import partsWarehouse from '@/assets/parts-warehouse.jpg';

export default function About() {
  useSEO({
    title: 'About | Eskimo Auto & Truck Parts Edmonton',
    description: `Edmonton's trusted auto recycler since ${BUSINESS.established}. Over four decades of quality used auto parts. Visit us at ${BUSINESS.address}.`,
  });

  return (
    <div className="pb-20 lg:pb-0">
      {/* Hero with image */}
      <div className="relative bg-secondary text-foreground py-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src={yardAerial} alt="Eskimo Auto Parts facility aerial view" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-foreground">About Eskimo Auto & Truck Parts</h1>
          <p className="text-foreground/70 mt-2 text-sm md:text-base">Edmonton's trusted auto recycler since {BUSINESS.established}.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <section>
            <h2 className="text-lg font-bold mb-3">Our Story</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">Eskimo Auto & Truck Parts has been serving Edmonton and the surrounding area for over four decades. What started as a small salvage operation in 1984 has grown into one of Edmonton's most trusted auto recyclers, supplying quality used parts to drivers, mechanics, body shops, and fleet operators across Alberta.</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">We take pride in doing things right — every part is inspected before sale, our pricing is fair and transparent, and we back what we sell with a warranty. Our team knows vehicles inside and out, and we're here to help you find the right part the first time.</p>
          </section>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={partsWarehouse} alt="Inside Eskimo Auto Parts warehouse" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Clock, label: '40+ Years', desc: 'In business' },
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
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Visit Us</h2>
          <p className="text-sm text-muted-foreground">{BUSINESS.fullAddress}</p>
          <p className="text-sm text-muted-foreground">{BUSINESS.hours.weekday} | {BUSINESS.hours.saturday} | {BUSINESS.hours.sunday}</p>
          {/* TODO: Confirm hours with business */}
        </section>
      </div>
      <CallToAction title="Ready to Find Your Part?" linkTo="/search-inventory" linkLabel="Search Inventory" />
    </div>
  );
}
