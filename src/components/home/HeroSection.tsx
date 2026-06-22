import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Phone, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS } from '@/lib/constants';

const quickLinks = [
  { label: 'Engines', to: '/used-engines-edmonton' },
  { label: 'Transmissions', to: '/used-transmissions-edmonton' },
  { label: 'Body Parts', to: '/used-body-parts-edmonton' },
  { label: 'Tires & Rims', to: '/used-tires-rims-edmonton' },
  { label: 'Truck Parts', to: '/used-truck-parts-edmonton' },
  { label: 'Remanufactured', to: '/remanufactured-engines' },
];

export function HeroSection() {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [part, setPart] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = [year, make, model, part].filter(Boolean).join(' ');
    navigate(`/search-inventory${q ? `?q=${encodeURIComponent(q)}` : ''}`);
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Radial glow from center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px] animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center py-20">
        {/* Trust chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium text-accent glass rounded-full px-4 py-2 border-accent/20">
            {BUSINESS.establishedText} &mdash; Edmonton, Alberta
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block text-foreground">Quality Auto Parts.</span>
          <span className="block text-gradient">Worldwide Delivery.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-foreground/50 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Used & remanufactured parts from Edmonton's most trusted auto recycler.
          Engines, transmissions, body panels, tires — tested, warrantied, shipped.
        </motion.p>

        {/* Search Bar */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, type: 'spring', stiffness: 100 }}
          className="glass rounded-2xl p-2 max-w-3xl mx-auto mb-6 glow"
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2">
              <input
                type="text" value={year} onChange={e => setYear(e.target.value)}
                placeholder="Year"
                className="bg-background/50 text-foreground text-sm rounded-xl px-4 py-3 border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 placeholder:text-muted-foreground transition-all"
              />
              <input
                type="text" value={make} onChange={e => setMake(e.target.value)}
                placeholder="Make"
                className="bg-background/50 text-foreground text-sm rounded-xl px-4 py-3 border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 placeholder:text-muted-foreground transition-all"
              />
              <input
                type="text" value={model} onChange={e => setModel(e.target.value)}
                placeholder="Model"
                className="bg-background/50 text-foreground text-sm rounded-xl px-4 py-3 border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 placeholder:text-muted-foreground transition-all"
              />
              <input
                type="text" value={part} onChange={e => setPart(e.target.value)}
                placeholder="Part needed"
                className="bg-background/50 text-foreground text-sm rounded-xl px-4 py-3 border border-border/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 placeholder:text-muted-foreground transition-all"
              />
            </div>
            <button
              type="submit"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-glow transition-all shrink-0"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </motion.form>

        {/* Quick category pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {quickLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-xs font-medium text-foreground/40 hover:text-accent px-3 py-1.5 rounded-full border border-border/30 hover:border-accent/30 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-xl font-semibold text-sm hover:shadow-glow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            Call {BUSINESS.phone}
          </a>
          <Link
            to="/latest-arrivals"
            className="flex items-center gap-2 glass text-foreground px-7 py-3.5 rounded-xl font-semibold text-sm hover:border-accent/30 transition-all"
          >
            Browse Latest Arrivals
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce"
      >
        <ChevronDown className="w-5 h-5 text-foreground/30" />
      </motion.div>
    </section>
  );
}
