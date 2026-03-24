import { Recycle, Search, DollarSign, Users, MapPin, Shield } from 'lucide-react';
import { ScrollReveal, StaggerChildren, staggerItem } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import partsWarehouse from '@/assets/parts-warehouse.jpg';

const reasons = [
  { icon: Search, title: 'Huge Inventory', desc: 'Thousands of quality-tested parts in stock from popular makes — Ford, Chevy, Toyota, Honda, Dodge, and more.' },
  { icon: DollarSign, title: 'Fair Pricing', desc: 'Save 50–80% compared to new OEM parts. Competitive pricing so you get the best value in Edmonton.' },
  { icon: Shield, title: 'Warranty-Backed Parts', desc: 'Every part comes with a warranty. Specific terms vary by part category — ask us for details at time of purchase.' },
  { icon: Recycle, title: 'Parts Sourcing Network', desc: 'Can\'t find it in our yard? We source parts from recyclers across Western Canada. One call, one invoice.' },
  { icon: MapPin, title: 'Eco-Friendly Recycling', desc: 'We responsibly recycle end-of-life vehicles, keeping usable parts in circulation and metals out of landfills.' },
  { icon: Users, title: 'Trusted Since 1984', desc: 'Over four decades of experience serving Edmonton drivers, mechanics, body shops, and fleet operators.' },
];

export function WhyEskimo() {
  return (
    <section className="py-14 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <ScrollReveal direction="left" className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-lg relative group">
              <img src={partsWarehouse} alt="Eskimo Auto Parts warehouse with organized shelving" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Why Choose Eskimo Auto & Truck Parts?</h2>
              <p className="text-muted-foreground mb-8 text-sm">Edmonton's trusted auto recycler for over 40 years</p>
            </ScrollReveal>
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-5" staggerDelay={0.08}>
              {reasons.map(r => (
                <motion.div key={r.title} variants={staggerItem} className="flex gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                    <r.icon className="w-4.5 h-4.5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-0.5">{r.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  );
}
