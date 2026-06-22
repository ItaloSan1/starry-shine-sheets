import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Search } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

const navLinks = [
  { to: '/search-inventory', label: 'Search Inventory', highlight: true },
  { to: '/request-a-part', label: 'Request a Part' },
  { to: '/latest-arrivals', label: 'Latest Arrivals' },
  { to: '/sell-your-vehicle', label: 'Sell Your Vehicle' },
  { to: '/vin-decoder', label: 'VIN Decoder' },
  { to: '/warranty-returns', label: 'Warranty' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <span className="text-xl font-bold tracking-tight text-gradient transition-all duration-300">
            ESKIMO
          </span>
          <span className="hidden sm:block text-[11px] font-medium uppercase tracking-[0.15em] text-foreground/50 group-hover:text-foreground/70 transition-colors">
            Auto & Truck Parts
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 ${
                location.pathname === link.to
                  ? 'text-accent'
                  : 'text-foreground/60 hover:text-foreground'
              } ${link.highlight ? 'flex items-center gap-1.5' : ''}`}
            >
              {link.highlight && <Search className="w-3.5 h-3.5" />}
              {link.label}
              {location.pathname === link.to && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="hidden lg:flex items-center gap-2 glass rounded-lg px-4 py-2 text-sm font-semibold text-foreground hover:text-accent transition-colors glow"
        >
          <Phone className="w-4 h-4 text-accent" />
          {BUSINESS.phone}
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-strong border-t border-border/30">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.to
                    ? 'text-accent bg-accent/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pb-4">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded-lg text-sm font-bold w-full hover:bg-accent/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
