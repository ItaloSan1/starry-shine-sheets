import { SellVehicleForm } from '@/components/forms/SellVehicleForm';
import { Phone, DollarSign, Truck, Clock } from 'lucide-react';

const PHONE = '780-555-0199';

export default function SellYourVehicle() {
  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-3">Sell Your Vehicle in Edmonton</h1>
          <p className="text-primary-foreground/80 text-lg">We buy cars, trucks, and SUVs — running or not. Get a fair cash offer today.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: DollarSign, title: 'Fair Cash Offers', desc: 'Competitive pricing based on current market value and salvage potential.' },
            { icon: Truck, title: 'Free Towing', desc: 'We pick up your vehicle at no charge anywhere in the Edmonton area.' },
            { icon: Clock, title: 'Fast & Easy', desc: 'Most offers made same day. Quick paperwork, quick payment.' },
          ].map(item => (
            <div key={item.title} className="text-center p-4">
              <item.icon className="w-8 h-8 text-accent mx-auto mb-2" />
              <h3 className="font-bold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <SellVehicleForm />
        <p className="text-center text-sm text-muted-foreground mt-6">
          Prefer to call? Reach us at <a href={`tel:${PHONE}`} className="text-accent font-semibold hover:underline">{PHONE}</a>
        </p>
      </div>
    </div>
  );
}
