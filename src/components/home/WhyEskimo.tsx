import { Recycle, Search, DollarSign, Users, MapPin, Shield } from 'lucide-react';
import { ScrollReveal, StaggerChildren, staggerItem } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';

const reasons = [
  { icon: Search, title: 'Huge Inventory', desc: 'Thousands of quality-tested parts in stock from popular makes — Ford, Chevy, Toyota, Honda, Dodge, and more.' },
  { icon: DollarSign, title: 'Fair Pricing', desc: 'Save 50-80% compared to new OEM parts. Competitive pricing so you get the best value.' },
  { icon: Shield, title: 'Warranty-Backed', desc: 'Every part comes with a warranty. Specific terms vary by category — ask us for details.' },
  { icon: Recycle, title: 'Parts Sourcing Network', desc: 'Can\'t find it? We source parts from recyclers across Western Canada. One call, one invoice.' },
  { icon: MapPin, title: 'Eco-Friendly Recycling', desc: 'We responsibly recycle end-of-life vehicles, keeping usable parts in circulation.' },
  { icon: Users, title: 'Trusted Since 1984', desc: 'Over four decades serving Edmonton drivers, mechanics, body shops, and fleet operators.' },
];

export function WhyEskimo() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <p className="text-accent text-sm font-semibold tracking-wider uppercase text-center mb-3">Why Us</p>
          <h2 className="text-center mb-3">Why Choose Eskimo Auto?</h2>
          <p className="text-center text-muted-foreground mb-14 text-sm max-w-lg mx-auto">
            Edmonton's trusted auto recycler for over 40 years
          </p>
        </ScrollReveal>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
          {reasons.map(r => (
            <motion.div
              key={r.title}
              variants={staggerItem}
              className="glass rounded-2xl p-6 card-hover group"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:shadow-glow-sm transition-all duration-300">
                <r.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-bold text-sm mb-2">{r.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
