import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerChildren, staggerItem } from '@/components/ui/ScrollReveal';
import engineParts from '@/assets/engine-parts.jpg';
import partsWarehouse from '@/assets/parts-warehouse.jpg';
import tiresRims from '@/assets/tires-rims.jpg';
import partsCounter from '@/assets/parts-counter.jpg';
import heroYard from '@/assets/hero-yard.jpg';
import yardAerial from '@/assets/yard-aerial.jpg';

const categories = [
  { img: engineParts, label: 'Engines', desc: 'Gas & diesel engines for cars and trucks', to: '/used-engines-edmonton' },
  { img: partsWarehouse, label: 'Transmissions', desc: 'Automatic & manual transmissions', to: '/used-transmissions-edmonton' },
  { img: partsCounter, label: 'Body Parts', desc: 'Doors, bumpers, hoods, fenders, lights', to: '/used-body-parts-edmonton' },
  { img: tiresRims, label: 'Tires & Rims', desc: 'OEM wheels and quality used tires', to: '/used-tires-rims-edmonton' },
  { img: heroYard, label: 'Auto Parts', desc: 'Full range of used car parts', to: '/used-auto-parts-edmonton' },
  { img: yardAerial, label: 'Truck Parts', desc: 'Light & heavy truck parts', to: '/used-truck-parts-edmonton' },
];

export function CategoryCards() {
  return (
    <section className="py-14 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2">Shop by Part Category</h2>
          <p className="text-center text-muted-foreground mb-10 text-sm">Find the exact part you need from our Edmonton inventory</p>
        </ScrollReveal>
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5" staggerDelay={0.08}>
          {categories.map(cat => (
            <motion.div key={cat.to} variants={staggerItem}>
              <Link
                to={cat.to}
                className="group relative rounded-xl overflow-hidden border border-border aspect-[3/2] block card-hover"
              >
                <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                  <h3 className="font-extrabold text-base md:text-lg text-primary-foreground mb-0.5" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{cat.label}</h3>
                  <p className="text-[11px] md:text-xs text-primary-foreground/60" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>{cat.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
