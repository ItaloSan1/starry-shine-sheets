import { SellVehicleForm } from '@/components/forms/SellVehicleForm';
import { Phone, MessageCircle, Car, Truck, MapPin } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { useSEO } from '@/hooks/useSEO';
import sellVehicle from '@/assets/sell-vehicle.jpg';

export default function SellYourVehicle() {
  useSEO({
    title: 'Sell Your Vehicle in Edmonton | Eskimo Auto & Truck Parts',
    description: `Sell your car, truck, or SUV to Edmonton's trusted recycler. Running or not. Fair cash offers. Call ${BUSINESS.phone}.`,
  });

  return (
    <div className="pb-20 lg:pb-0">
      <div className="relative bg-secondary text-foreground py-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={sellVehicle} alt="Sell your vehicle for cash Edmonton" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-xl md:text-3xl font-bold text-foreground mb-2">Sell Your Vehicle in Edmonton</h1>
          <p className="text-foreground/70 text-sm md:text-base">We buy cars, trucks, and SUVs — running or not. Get a fair cash offer.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* How it works */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-center">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: '1', title: 'Tell Us About Your Vehicle', desc: 'Fill out the form below or call us with your vehicle details.' },
              { step: '2', title: 'Get a Fair Offer', desc: 'We\'ll review and provide a cash offer based on the vehicle\'s condition and market value.' },
              { step: '3', title: 'We Handle the Rest', desc: 'Accept the offer and we\'ll arrange everything. Quick paperwork, quick payment.' },
            ].map(item => (
              <div key={item.step} className="text-center p-4 border border-border rounded-lg">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm mx-auto mb-2">{item.step}</div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What we buy */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">What Vehicles Do We Buy?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Car, label: 'Cars — any make' },
              { icon: Truck, label: 'Trucks & Pickups' },
              { icon: Car, label: 'SUVs & Vans' },
              { icon: Car, label: 'End-of-Life Vehicles' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2 bg-secondary rounded-md px-3 py-2.5">
                <item.icon className="w-4 h-4 text-accent shrink-0" />
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2">Running, not running, collision-damaged, or scrap — we'll consider it.</p>
        </section>

        {/* Service area */}
        <div className="bg-secondary rounded-lg p-4 mb-8 flex items-start gap-3">
          <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium">Service Area</p>
            <p className="text-xs text-muted-foreground">We buy vehicles from {BUSINESS.serviceAreas.slice(0, 5).join(', ')}, and surrounding areas. Contact us to arrange pickup.</p>
          </div>
        </div>

        <SellVehicleForm />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-2 text-accent font-semibold text-sm hover:underline">
            <Phone className="w-4 h-4" /> Call {BUSINESS.phone}
          </a>
          <a href={`sms:${BUSINESS.phoneRaw}`} className="flex items-center gap-2 text-muted-foreground font-semibold text-sm hover:underline">
            <MessageCircle className="w-4 h-4" /> Text Us
          </a>
        </div>
      </div>
    </div>
  );
}
