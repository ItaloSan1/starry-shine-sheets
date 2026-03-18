import { Link } from 'react-router-dom';
import { CallToAction } from '@/components/layout/CallToAction';
import { Recycle, Leaf, Award, MapPin } from 'lucide-react';

export default function AutoRecycler() {
  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">Edmonton Auto Recycler</h1>
          <p className="text-primary-foreground/80 mt-2 text-lg">Responsible vehicle recycling that puts quality used parts back on the road and keeps waste out of landfills.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Professional Auto Recycling in Edmonton</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Eskimo Auto & Truck Parts is a full-service auto recycler serving Edmonton and surrounding communities. We acquire end-of-life and salvage vehicles, carefully dismantle them, and make quality parts available for reuse. Fluids are drained and recycled responsibly, metals go to certified processors, and usable parts get a second life in another vehicle.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Auto recycling is good for the environment and good for your wallet. By choosing a recycled part, you're saving money and reducing the environmental impact of manufacturing new components.</p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {[
            { icon: Recycle, title: 'Responsible Recycling', desc: 'All fluids, metals, and hazardous materials handled according to Alberta environmental regulations.' },
            { icon: Leaf, title: 'Environmental Impact', desc: 'Every reused part reduces the energy, water, and raw materials needed to manufacture a new one.' },
            { icon: Award, title: 'Licensed & Insured', desc: 'Fully licensed auto recycler operating under Alberta regulations since 1985.' },
            { icon: MapPin, title: 'Local Operation', desc: 'Edmonton-based. We know this community and we serve it with integrity.' },
          ].map(item => (
            <div key={item.title} className="flex gap-3">
              <item.icon className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <section>
          <h2 className="text-xl font-bold mb-3">Have a Vehicle to Recycle?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">We buy cars, trucks, and SUVs in any condition. Running, not running, accident-damaged, or end-of-life — we'll give you a fair cash offer and handle the pickup. <Link to="/sell-your-vehicle" className="text-accent font-semibold hover:underline">Get a free quote now</Link>.</p>
        </section>
      </div>
      <CallToAction title="Edmonton's Trusted Auto Recycler Since 1985" description="Whether you need a part or want to sell a vehicle, Eskimo is here to help." linkTo="/sell-your-vehicle" linkLabel="Sell Your Vehicle" />
    </div>
  );
}
