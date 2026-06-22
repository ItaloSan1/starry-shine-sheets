import { CallToAction } from '@/components/layout/CallToAction';
import { PartRequestForm } from '@/components/forms/PartRequestForm';
import { Wrench, Building2, Truck, Percent, Clock, Users } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { useSEO } from '@/hooks/useSEO';
import mechanicShop from '@/assets/mechanic-shop.jpg';

export default function ForShopsFleet() {
  useSEO({
    title: 'For Shops, Mechanics & Fleet | Eskimo Auto & Truck Parts Edmonton',
    description: `Competitive pricing and priority sourcing for repair shops, body shops, and fleet operators in Edmonton. Call ${BUSINESS.phone}.`,
  });

  return (
    <div className="pb-20 lg:pb-0">
      <div className="relative bg-secondary text-foreground py-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={mechanicShop} alt="Auto mechanic shop partner" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-foreground">For Shops, Mechanics & Fleet Buyers</h1>
          <p className="text-foreground/70 mt-2 text-sm md:text-base">Reliable parts, competitive pricing, and fast turnaround for automotive professionals.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Your Parts Partner in Edmonton</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">Eskimo Auto & Truck Parts works with repair shops, body shops, and fleet operators across the Edmonton area. We understand that downtime costs money, parts need to be right the first time, and pricing needs to make jobs profitable. Ask about account options with competitive pricing and delivery. Serving the trade since 1984.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            { icon: Percent, title: 'Competitive Pricing', desc: 'Volume-friendly rates for regular accounts. Keep your repair margins healthy.' },
            { icon: Clock, title: 'Priority Sourcing', desc: 'Account holders get priority when we source parts from our network.' },
            { icon: Truck, title: 'Shop Delivery', desc: 'Delivery to shops in the Edmonton area. Contact us for details.' },
            { icon: Users, title: 'Dedicated Support', desc: 'A team that knows your business, your vehicles, and your needs.' },
          ].map(item => (
            <div key={item.title} className="flex gap-3 border border-border rounded-lg p-4">
              <item.icon className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Open an Account</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">Call us at <a href={`tel:${BUSINESS.phoneRaw}`} className="text-accent font-semibold hover:underline">{BUSINESS.phone}</a> to set up an account. We'll discuss your needs and get you started.</p>
        </section>

        <PartRequestForm />
      </div>
      <CallToAction title="Ready to Partner with Edmonton's Trusted Recycler?" description="Set up your account today and start saving on quality used parts." />
    </div>
  );
}
