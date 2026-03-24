import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Phone, MessageCircle, Shield, Clock, Wrench, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS } from '@/lib/constants';
import heroYard from '@/assets/hero-yard.jpg';

const trustChips = [
  { icon: Clock, label: BUSINESS.establishedText },
  { icon: MapPin, label: 'Edmonton Auto Recycler' },
  { icon: Shield, label: 'Warranty-Backed Parts' },
  { icon: Wrench, label: 'Parts Sourcing Available' },
];

const quickLinks = [
  { label: 'Engines', to: '/used-engines-edmonton' },
  { label: 'Transmissions', to: '/used-transmissions-edmonton' },
  { label: 'Body Parts', to: '/used-body-parts-edmonton' },
  { label: 'Tires & Rims', to: '/used-tires-rims-edmonton' },
  { label: 'Truck Parts', to: '/used-truck-parts-edmonton' },
  { label: 'Latest Arrivals', to: '/latest-arrivals' },
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

  const inputClass = "px-3 py-2.5 bg-background text-foreground text-sm rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-muted-foreground";

  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img src={heroYard} alt="Eskimo Auto & Truck Parts yard in Edmonton" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left content */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Trust chips */}
            <div className="flex flex-wrap gap-2 mb-5">
              {trustChips.map((chip, i) => (
                <motion.span
                  key={chip.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-foreground/80 bg-primary-foreground/10 px-2.5 py-1 rounded-full backdrop-blur-sm border border-primary-foreground/5"
                >
                  <chip.icon className="w-3 h-3" />
                  {chip.label}
                </motion.span>
              ))}
            </div>

            <h1 className="text-3xl md:text-[2.75rem] font-extrabold text-primary-foreground leading-[1.1] mb-4">
              Edmonton's Trusted Source for
              <span className="text-accent block mt-1"> Quality Used Auto & Truck Parts</span>
            </h1>
            <p className="text-primary-foreground/70 mb-7 max-w-lg text-sm md:text-base leading-relaxed">
              Engines, transmissions, body panels, tires and more — tested, warrantied, and ready for pickup or shipping. Serving Edmonton since 1984.
            </p>

            {/* Search module */}
            <motion.form
              onSubmit={handleSearch}
              className="mb-5 bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-3 border border-primary-foreground/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                <input type="text" value={year} onChange={e => setYear(e.target.value)} placeholder="Year" className={inputClass} />
                <input type="text" value={make} onChange={e => setMake(e.target.value)} placeholder="Make" className={inputClass} />
                <input type="text" value={model} onChange={e => setModel(e.target.value)} placeholder="Model" className={inputClass} />
                <input type="text" value={part} onChange={e => setPart(e.target.value)} placeholder="Part needed" className={inputClass} />
                <button type="submit" className="col-span-2 sm:col-span-1 bg-accent text-accent-foreground px-4 py-2.5 rounded-md font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>
            </motion.form>

            {/* Quick category links */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-7 text-xs">
              <span className="text-primary-foreground/40 font-medium">Popular:</span>
              {quickLinks.map(link => (
                <Link key={link.to} to={link.to} className="text-primary-foreground/60 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-accent/20"
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS.phone}
              </a>
              <a
                href={`sms:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-foreground/10 transition-all backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Text Us for a Part
              </a>
              <Link
                to="/search-inventory"
                className="flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-foreground/10 transition-all backdrop-blur-sm"
              >
                <Search className="w-4 h-4" />
                Browse Inventory
              </Link>
            </div>
          </motion.div>

          {/* Right visual panel */}
          <motion.div
            className="hidden lg:block lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-primary-foreground/10 aspect-[4/3] shadow-2xl">
              <img src={heroYard} alt="Eskimo Auto Parts recycling yard, Edmonton Alberta" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary-foreground font-extrabold text-xl mb-1">40+ Years in Edmonton</p>
                <p className="text-primary-foreground/70 text-sm">Quality parts · Fair prices · Real warranty</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
