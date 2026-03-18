import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PHONE = '780-555-0199';

const navLinks = [
  { to: '/search-inventory', label: 'Search Inventory', highlight: true },
  { to: '/latest-arrivals', label: 'Latest Arrivals' },
  { to: '/sell-your-vehicle', label: 'Sell Your Vehicle' },
  { to: '/warranty-returns', label: 'Warranty' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-extrabold text-xl tracking-tight shrink-0">
          <span className="text-accent">ESKIMO</span>
          <span className="hidden sm:inline text-primary-foreground/90 text-sm font-semibold">Auto & Truck Parts</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10'
              } ${link.highlight ? 'flex items-center gap-1.5' : ''}`}
            >
              {link.highlight && <Search className="w-4 h-4" />}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Phone CTA */}
        <a
          href={`tel:${PHONE}`}
          className="hidden lg:flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-bold hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          {PHONE}
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-primary-foreground/10"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-primary-foreground/10 bg-primary">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-primary-foreground/20 text-primary-foreground'
                    : 'text-primary-foreground/80 hover:bg-primary-foreground/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pb-4">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded-md text-sm font-bold w-full"
            >
              <Phone className="w-4 h-4" />
              Call {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
