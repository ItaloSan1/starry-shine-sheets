import { Link } from 'react-router-dom';
import { Wrench, Building2, Truck, ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggerChildren, staggerItem } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';

const audiences = [
  { icon: Wrench, title: 'Mechanics & Repair Shops', desc: 'Reliable parts supply with competitive pricing. We understand you need parts fast and right the first time.' },
  { icon: Building2, title: 'Body Shops', desc: 'Quality OEM body panels, bumpers, hoods, fenders, and lights. Better fit than aftermarket, at used prices.' },
  { icon: Truck, title: 'Fleet Operators', desc: 'Keep your fleet moving with affordable replacement parts. Ask about volume pricing and account options.' },
];

export function ShopsFleetSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <p className="text-accent text-sm font-semibold tracking-wider uppercase text-center mb-3">B2B</p>
          <h2 className="text-center mb-3">For Shops, Mechanics & Fleets</h2>
          <p className="text-center text-muted-foreground mb-14 text-sm max-w-lg mx-auto">
            We're the parts supplier Edmonton pros rely on
          </p>
        </ScrollReveal>
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8" staggerDelay={0.1}>
          {audiences.map(a => (
            <motion.div key={a.title} variants={staggerItem} className="glass rounded-2xl p-6 card-hover group">
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:shadow-glow-sm transition-all duration-300">
                <a.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-bold text-sm mb-2">{a.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </StaggerChildren>
        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <Link to="/for-shops-fleet" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
              Learn about our shop & fleet programs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
