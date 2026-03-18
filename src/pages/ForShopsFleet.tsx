import { CallToAction } from '@/components/layout/CallToAction';
import { PartRequestForm } from '@/components/forms/PartRequestForm';
import { Wrench, Building2, Truck, Percent, Clock, Users } from 'lucide-react';

export default function ForShopsFleet() {
  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">For Shops, Mechanics & Fleet Buyers</h1>
          <p className="text-primary-foreground/80 mt-2 text-lg">Reliable parts, competitive wholesale pricing, and fast turnaround for automotive professionals.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Your Parts Partner in Edmonton</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Eskimo Auto & Truck Parts works with dozens of repair shops, body shops, and fleet operators across the Edmonton area. We understand that downtime costs money, parts need to be right the first time, and pricing needs to make jobs profitable. That's why we offer wholesale accounts with competitive pricing, priority sourcing, and delivery to your shop.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[
            { icon: Percent, title: 'Wholesale Pricing', desc: 'Volume discounts and competitive rates for regular accounts. Keep your repair margins healthy.' },
            { icon: Clock, title: 'Priority Sourcing', desc: 'Account holders get priority when we source parts from our network. Less downtime for you and your customers.' },
            { icon: Truck, title: 'Shop Delivery', desc: 'Regular delivery runs to shops in the Edmonton area. We come to you so your techs stay productive.' },
            { icon: Users, title: 'Dedicated Account Rep', desc: 'A single point of contact who knows your business, your vehicles, and your needs.' },
          ].map(item => (
            <div key={item.title} className="flex gap-3 border border-border rounded-lg p-5">
              <item.icon className="w-7 h-7 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Open a Wholesale Account</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Call us at <a href="tel:780-555-0199" className="text-accent font-semibold hover:underline">780-555-0199</a> to set up a wholesale account. We'll discuss your needs, set up pricing, and get you started. Qualifying shops may be eligible for net-30 payment terms.</p>
        </section>

        <PartRequestForm />
      </div>
      <CallToAction title="Ready to Partner with Edmonton's Trusted Recycler?" description="Set up your shop account today and start saving on quality used parts." />
    </div>
  );
}
