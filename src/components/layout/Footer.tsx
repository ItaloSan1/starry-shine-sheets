import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const PHONE = '780-555-0199';
const EMAIL = 'info@eskimoautoparts.ca';
const ADDRESS = '12345 Fort Road NW, Edmonton, AB T5B 4H5';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <a href={`tel:${PHONE}`} className="hover:text-accent transition-colors">{PHONE}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <div>
                  <p>Mon–Fri: 8:00 AM – 5:00 PM</p>
                  <p>Sat: 9:00 AM – 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Parts */}
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Parts</h3>
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
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Services</h3>
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
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-primary-foreground/50">Serving Edmonton, Sherwood Park, St. Albert, Spruce Grove, Leduc, and surrounding areas.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Eskimo Auto & Truck Parts. All rights reserved.</p>
          <p className="mt-1">Edmonton's trusted auto recycler since 1985.</p>
        </div>
      </div>
    </footer>
  );
}
