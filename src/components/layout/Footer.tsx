import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-primary-foreground mb-3">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-accent transition-colors">{BUSINESS.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-accent transition-colors">{BUSINESS.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>{BUSINESS.fullAddress}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <div>
                  <p>{BUSINESS.hours.weekday}</p>
                  <p>{BUSINESS.hours.saturday}</p>
                  <p>{BUSINESS.hours.sunday}</p>
                  {/* TODO: Confirm hours with business */}
                </div>
              </li>
            </ul>
          </div>

          {/* Parts */}
          <div>
            <h3 className="text-base font-bold text-primary-foreground mb-3">Parts</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/search-inventory" className="hover:text-accent transition-colors">Search Inventory</Link></li>
              <li><Link to="/used-engines-edmonton" className="hover:text-accent transition-colors">Used Engines</Link></li>
              <li><Link to="/used-transmissions-edmonton" className="hover:text-accent transition-colors">Used Transmissions</Link></li>
              <li><Link to="/used-body-parts-edmonton" className="hover:text-accent transition-colors">Body Parts</Link></li>
              <li><Link to="/used-tires-rims-edmonton" className="hover:text-accent transition-colors">Tires & Rims</Link></li>
              <li><Link to="/used-auto-parts-edmonton" className="hover:text-accent transition-colors">All Auto Parts</Link></li>
              <li><Link to="/used-truck-parts-edmonton" className="hover:text-accent transition-colors">Truck Parts</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-primary-foreground mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/sell-your-vehicle" className="hover:text-accent transition-colors">Sell Your Vehicle</Link></li>
              <li><Link to="/auto-recycler-edmonton" className="hover:text-accent transition-colors">Auto Recycling</Link></li>
              <li><Link to="/delivery-parts-sourcing" className="hover:text-accent transition-colors">Delivery & Parts Sourcing</Link></li>
              <li><Link to="/for-shops-fleet" className="hover:text-accent transition-colors">For Shops & Fleet</Link></li>
              <li><Link to="/warranty-returns" className="hover:text-accent transition-colors">Warranty & Returns</Link></li>
              <li><Link to="/latest-arrivals" className="hover:text-accent transition-colors">Latest Arrivals</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-bold text-primary-foreground mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-primary-foreground/50">Serving {BUSINESS.serviceAreas.join(', ')}, and surrounding areas.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p className="mt-1">Edmonton's trusted auto recycler since {BUSINESS.established}.</p>
        </div>
      </div>
    </footer>
  );
}
