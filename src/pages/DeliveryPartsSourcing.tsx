import { CallToAction } from '@/components/layout/CallToAction';
import { Truck, Search, Globe } from 'lucide-react';

export default function DeliveryPartsSourcing() {
  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">Delivery & Parts Sourcing</h1>
          <p className="text-primary-foreground/80 mt-2 text-lg">Local delivery across Edmonton and parts sourcing from our network across Western Canada.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <Truck className="w-8 h-8 text-accent mb-3" />
            <h2 className="text-xl font-bold mb-3">Local Delivery</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We deliver parts across the Edmonton metro area including Sherwood Park, St. Albert, Spruce Grove, Leduc, and Fort Saskatchewan. Delivery fees depend on size and distance — contact us for a quote.</p>
            <p className="text-muted-foreground leading-relaxed">For shops with regular orders, we offer scheduled delivery runs to keep your workflow uninterrupted.</p>
          </div>
          <div>
            <Search className="w-8 h-8 text-accent mb-3" />
            <h2 className="text-xl font-bold mb-3">Parts Sourcing</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Can't find what you need in our yard? We'll source it. Eskimo has relationships with auto recyclers across Alberta, British Columbia, Saskatchewan, and beyond. If the part exists, we'll track it down and get it to you.</p>
            <p className="text-muted-foreground leading-relaxed">Just tell us what you need — year, make, model, and part — and we'll handle the rest. One call, one contact, one invoice.</p>
          </div>
        </div>

        <div className="bg-secondary rounded-lg p-6 mb-10">
          <Globe className="w-8 h-8 text-accent mb-3" />
          <h2 className="text-xl font-bold mb-3">Shipping Across Canada</h2>
          <p className="text-muted-foreground leading-relaxed">Need a part shipped outside Edmonton? We ship anywhere in Alberta and across Canada via freight and courier services. Contact us for shipping rates and timelines.</p>
        </div>
      </div>
      <CallToAction title="Need a Part Delivered?" description="Call us and we'll arrange delivery or shipping to your door." />
    </div>
  );
}
