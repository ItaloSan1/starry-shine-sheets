import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerChildren, staggerItem } from '@/components/ui/ScrollReveal';
import { Cog, ArrowRight } from 'lucide-react';
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
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <p className="text-accent text-sm font-semibold tracking-wider uppercase text-center mb-3">Categories</p>
          <h2 className="text-center mb-3">Shop by Part Type</h2>
          <p className="text-center text-muted-foreground mb-12 text-sm max-w-lg mx-auto">
            Find the exact part you need from our Edmonton inventory
          </p>
        </ScrollReveal>
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5" staggerDelay={0.08}>
          {categories.map(cat => (
            <motion.div key={cat.to} variants={staggerItem}>
              <Link
                to={cat.to}
                className="group relative rounded-2xl overflow-hidden border border-border/50 aspect-[3/2] block card-hover"
              >
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-40 group-hover:opacity-50"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="font-bold text-base md:text-lg text-foreground mb-1">{cat.label}</h3>
                  <p className="text-[11px] md:text-xs text-foreground/40 mb-2">{cat.desc}</p>
                  <span className="inline-flex items-center gap-1 text-accent text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Browse <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
