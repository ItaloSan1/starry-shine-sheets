import { Link } from 'react-router-dom';
import { Wrench, Building2, Truck } from 'lucide-react';
import { ScrollReveal, StaggerChildren, staggerItem } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import partsCounter from '@/assets/parts-counter.jpg';

const audiences = [
  { icon: Wrench, title: 'Mechanics & Repair Shops', desc: 'Reliable parts supply with competitive pricing. We understand you need parts fast and right the first time.' },
  { icon: Building2, title: 'Body Shops', desc: 'Quality OEM body panels, bumpers, hoods, fenders, and lights. Better fit than aftermarket, at used part prices.' },
  { icon: Truck, title: 'Fleet Operators', desc: 'Keep your fleet moving with affordable replacement parts. Ask about volume pricing and account options.' },
];

export function ShopsFleetSection() {
  return (
    <section className="py-14 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2">For Shops, Mechanics & Fleet Buyers</h2>
              <p className="text-muted-foreground mb-8 text-sm">We're the parts supplier Edmonton pros rely on</p>
            </ScrollReveal>
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-4" staggerDelay={0.1}>
              {audiences.map(a => (
                <motion.div key={a.title} variants={staggerItem} className="bg-card border border-border rounded-xl p-5 card-hover">
                  <a.icon className="w-7 h-7 text-accent mb-3" />
                  <h3 className="font-bold text-sm mb-1">{a.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
                </motion.div>
              ))}
            </StaggerChildren>
            <ScrollReveal delay={0.3}>
              <div className="mt-6">
                <Link to="/for-shops-fleet" className="text-accent font-bold text-sm hover:underline">
                  Learn about our shop & fleet programs →
                </Link>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="right" className="hidden lg:block lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img src={partsCounter} alt="Technician inspecting parts at Eskimo Auto counter" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
