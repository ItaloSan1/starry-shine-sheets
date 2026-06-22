import { CallToAction } from '@/components/layout/CallToAction';
import { Truck, Search, Globe } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import deliveryTruck from '@/assets/delivery-truck.jpg';

export default function DeliveryPartsSourcing() {
  useSEO({
    title: 'Delivery & Parts Sourcing | Eskimo Auto & Truck Parts Edmonton',
    description: 'Local delivery across Edmonton and parts sourcing from our recycler network across Western Canada. Call (780) 473-2424.',
  });

  return (
    <div className="pb-20 lg:pb-0">
      <div className="relative bg-secondary text-foreground py-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={deliveryTruck} alt="Auto parts delivery truck" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-foreground">Delivery & Parts Sourcing</h1>
          <p className="text-foreground/70 mt-2 text-sm md:text-base">Local delivery across Edmonton and parts sourcing from our network across Western Canada.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <Truck className="w-7 h-7 text-accent mb-3" />
            <h2 className="text-lg font-bold mb-3">Local Delivery</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">We deliver parts across the Edmonton metro area including Sherwood Park, St. Albert, Spruce Grove, Leduc, and Fort Saskatchewan. Contact us for delivery details and rates.</p>
            <p className="text-sm text-muted-foreground leading-relaxed">For shops with regular orders, ask about scheduled delivery runs.</p>
          </div>
          <div>
            <Search className="w-7 h-7 text-accent mb-3" />
            <h2 className="text-lg font-bold mb-3">Parts Sourcing</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">Can't find what you need in our yard? We'll source it. Eskimo has relationships with auto recyclers across Alberta, British Columbia, Saskatchewan, and beyond.</p>
            <p className="text-sm text-muted-foreground leading-relaxed">Just tell us what you need — year, make, model, and part — and we'll handle the rest. One call, one contact, one invoice.</p>
          </div>
        </div>

        <div className="bg-secondary rounded-lg p-5 mb-8">
          <Globe className="w-7 h-7 text-accent mb-3" />
          <h2 className="text-lg font-bold mb-3">Shipping Across Canada</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">Need a part shipped outside Edmonton? We ship anywhere in Alberta and across Canada via freight and courier. Contact us for rates and timelines.</p>
        </div>
      </div>
      <CallToAction title="Need a Part Delivered?" description="Call us and we'll arrange delivery or shipping." />
    </div>
  );
}
