import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Phone, MessageCircle, Shield, Clock, Wrench, MapPin } from 'lucide-react';
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
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroYard} alt="Eskimo Auto & Truck Parts yard in Edmonton" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left content — spans 3 cols */}
          <div className="lg:col-span-3">
            {/* Trust chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              {trustChips.map(chip => (
                <span key={chip.label} className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-foreground/80 bg-primary-foreground/10 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  <chip.icon className="w-3 h-3" />
                  {chip.label}
                </span>
              ))}
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold text-primary-foreground leading-tight mb-3">
              Edmonton's Trusted Source for
              <span className="text-accent"> Quality Used Auto & Truck Parts</span>
            </h1>
            <p className="text-primary-foreground/75 mb-6 max-w-lg text-sm md:text-base">
              Engines, transmissions, body panels, tires and more — tested, warrantied, and ready for pickup or shipping. Serving Edmonton since 1984.
            </p>

            {/* Search module */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                <input type="text" value={year} onChange={e => setYear(e.target.value)} placeholder="Year" className={inputClass} />
                <input type="text" value={make} onChange={e => setMake(e.target.value)} placeholder="Make" className={inputClass} />
                <input type="text" value={model} onChange={e => setModel(e.target.value)} placeholder="Model" className={inputClass} />
                <input type="text" value={part} onChange={e => setPart(e.target.value)} placeholder="Part needed" className={inputClass} />
                <button type="submit" className="col-span-2 sm:col-span-1 bg-accent text-accent-foreground px-4 py-2.5 rounded-md font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>
            </form>

            {/* Quick category links */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6 text-xs">
              <span className="text-primary-foreground/50">Popular:</span>
              {quickLinks.map(link => (
                <Link key={link.to} to={link.to} className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS.phone}
              </a>
              <a
                href={`sms:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Text Us for a Part
              </a>
              <Link
                to="/search-inventory"
                className="flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm"
              >
                <Search className="w-4 h-4" />
                Browse Inventory
              </Link>
            </div>
          </div>

          {/* Right visual panel — spans 2 cols */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="relative rounded-lg overflow-hidden border border-primary-foreground/10 aspect-[4/3] shadow-2xl">
              <img src={heroYard} alt="Eskimo Auto Parts recycling yard, Edmonton Alberta" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-primary-foreground font-bold text-lg mb-1">40+ Years in Edmonton</p>
                <p className="text-primary-foreground/70 text-sm">Quality parts · Fair prices · Real warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
