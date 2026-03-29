import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

const partsLinks = [
  { to: '/search-inventory', label: 'Search Inventory' },
  { to: '/request-a-part', label: 'Request a Part' },
  { to: '/used-auto-parts-edmonton', label: 'Used Auto Parts' },
  { to: '/used-truck-parts-edmonton', label: 'Used Truck Parts' },
  { to: '/used-engines-edmonton', label: 'Used Engines' },
  { to: '/used-transmissions-edmonton', label: 'Used Transmissions' },
  { to: '/used-body-parts-edmonton', label: 'Used Body Parts' },
  { to: '/used-tires-rims-edmonton', label: 'Used Tires & Rims' },
  { to: '/remanufactured-engines', label: 'Remanufactured Engines' },
];

const companyLinks = [
  { to: '/latest-arrivals', label: 'Latest Arrivals' },
  { to: '/sell-your-vehicle', label: 'Sell Your Vehicle' },
  { to: '/auto-recycler-edmonton', label: 'Auto Recycler' },
  { to: '/for-shops-fleet', label: 'For Shops & Fleet' },
  { to: '/warranty-returns', label: 'Warranty & Returns' },
  { to: '/about', label: 'About Us' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            {/* TODO: Replace with: <img src="/logo.png" alt="Eskimo Auto & Truck Parts" className="h-8 mb-3" /> */}
            <Link to="/" className="inline-block font-extrabold text-xl tracking-tight mb-3">
              <span className="text-accent">ESKIMO</span>
              <span className="text-primary-foreground/90 text-xs font-semibold uppercase tracking-wider ml-2">Auto & Truck Parts</span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Edmonton's trusted auto recycler since {BUSINESS.established}. Quality used parts for cars and trucks.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-primary-foreground/80">Parts</h3>
            <ul className="space-y-1.5">
              {partsLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-primary-foreground/80">Company</h3>
            <ul className="space-y-1.5">
              {companyLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-primary-foreground/80">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 shrink-0 mt-0.5" />
                <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-accent transition-colors">{BUSINESS.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 shrink-0 mt-0.5" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-accent transition-colors">{BUSINESS.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{BUSINESS.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" />
                {/* TODO: Confirm business hours */}
                <span>Mon-Fri 8am-5pm · Sat 9am-2pm</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. Serving Edmonton since {BUSINESS.established}.</p>
        </div>
      </div>
    </footer>
  );
}
