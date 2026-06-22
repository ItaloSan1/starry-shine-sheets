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
  { to: '/remanufactured-cylinder-heads', label: 'Cylinder Heads' },
];

const companyLinks = [
  { to: '/latest-arrivals', label: 'Latest Arrivals' },
  { to: '/sell-your-vehicle', label: 'Sell Your Vehicle' },
  { to: '/auto-recycler-edmonton', label: 'Auto Recycler' },
  { to: '/for-shops-fleet', label: 'For Shops & Fleet' },
  { to: '/warranty-returns', label: 'Warranty & Returns' },
  { to: '/vin-decoder', label: 'VIN Decoder' },
  { to: '/about', label: 'About Us' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="relative bg-background pb-20 lg:pb-0">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4 group">
              <span className="text-xl font-bold tracking-tight text-gradient">ESKIMO</span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.15em] text-foreground/40 mt-0.5">
                Auto & Truck Parts
              </span>
            </Link>
            <p className="text-foreground/40 text-sm leading-relaxed">
              Edmonton's trusted auto recycler since {BUSINESS.established}. Quality used & remanufactured parts shipped worldwide.
            </p>
          </div>

          {/* Parts */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-foreground/50 mb-4">Parts</h3>
            <ul className="space-y-2">
              {partsLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-foreground/40 hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-foreground/50 mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-foreground/40 hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-foreground/50 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-foreground/40">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 shrink-0 mt-0.5 text-accent/60" />
                <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-accent transition-colors">{BUSINESS.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 shrink-0 mt-0.5 text-accent/60" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-accent transition-colors">{BUSINESS.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-accent/60" />
                <span>{BUSINESS.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 shrink-0 mt-0.5 text-accent/60" />
                <span>Mon-Fri 8am-5pm · Sat 9am-2pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 mt-10 pt-6 text-center text-xs text-foreground/25">
          <p>&copy; {new Date().getFullYear()} {BUSINESS.name}. Serving Edmonton since {BUSINESS.established}.</p>
        </div>
      </div>
    </footer>
  );
}
