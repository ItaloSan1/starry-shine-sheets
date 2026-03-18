import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PHONE = '780-555-0199';

export function HeroSection() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search-inventory${query ? `?q=${encodeURIComponent(query)}` : ''}`);
  };

  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
          Edmonton's Trusted Source for
          <br />
          <span className="text-accent">Quality Used Auto & Truck Parts</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Engines, transmissions, body panels, tires and more — tested, warrantied, and ready to ship across Alberta. Serving Edmonton since 1985.
        </p>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
          <div className="flex rounded-lg overflow-hidden shadow-lg">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by part, vehicle, or stock number..."
              className="flex-1 px-4 py-3.5 text-foreground bg-background text-base focus:outline-none"
            />
            <button
              type="submit"
              className="bg-accent text-accent-foreground px-6 py-3.5 font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Search className="w-5 h-5" />
              <span className="hidden sm:inline">Search Parts</span>
            </button>
          </div>
        </form>

        {/* Quick CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Call {PHONE}
          </a>
          <a
            href={`sms:${PHONE}`}
            className="flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Text Us for a Part
          </a>
        </div>
      </div>
    </section>
  );
}
