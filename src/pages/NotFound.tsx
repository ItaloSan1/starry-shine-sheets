import { Link } from 'react-router-dom';
import { Search, Phone, Home, ArrowLeft } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 pb-20 lg:pb-0">
      <div className="text-center max-w-md">
        <div className="text-8xl font-extrabold text-accent/20 mb-2">404</div>
        <h1 className="text-2xl md:text-3xl font-extrabold mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Try searching our inventory or head back to the homepage.
        </p>

        {/* Quick search */}
        <div className="glass rounded-xl p-4 mb-6">
          <p className="text-sm font-bold mb-3">Looking for a part?</p>
          <div className="flex gap-2">
            <Link
              to="/search-inventory"
              className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-2.5 rounded-lg font-bold text-sm hover:brightness-110 transition-all"
            >
              <Search className="w-4 h-4" /> Search Inventory
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center justify-center gap-2 border border-border px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-muted transition-colors"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="flex items-center justify-center gap-2 text-sm font-semibold text-accent hover:underline">
            <Home className="w-4 h-4" /> Go to Homepage
          </Link>
          <button onClick={() => window.history.back()} className="flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>

        {/* Popular links */}
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground mb-3 font-medium">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { to: '/used-engines-edmonton', label: 'Engines' },
              { to: '/used-transmissions-edmonton', label: 'Transmissions' },
              { to: '/used-body-parts-edmonton', label: 'Body Parts' },
              { to: '/request-a-part', label: 'Request a Part' },
              { to: '/sell-your-vehicle', label: 'Sell Your Vehicle' },
            ].map(link => (
              <Link key={link.to} to={link.to} className="text-xs text-accent hover:underline px-2 py-1 bg-accent/5 rounded-full">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
