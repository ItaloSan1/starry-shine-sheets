import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { mongoInventoryProvider } from '@/lib/mongo-inventory';
import type { Vehicle } from '@/lib/inventory-adapter';
import { ArrowRight, ChevronLeft, ChevronRight, Car } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurImage } from '@/components/ui/BlurImage';
import { thumbUrl } from '@/lib/image-utils';

export function LatestArrivals() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mongoInventoryProvider.getLatestArrivals(8).then(v => {
      setVehicles(v);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const itemsPerPage = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4;
  const totalPages = Math.ceil(vehicles.length / itemsPerPage);

  const nextPage = useCallback(() => {
    setCurrentPage(prev => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (isPaused || totalPages <= 1) return;
    const interval = setInterval(nextPage, 7000);
    return () => clearInterval(interval);
  }, [isPaused, totalPages, nextPage]);

  const currentVehicles = vehicles.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  if (loading) {
    return (
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-8 bg-muted rounded w-48 mb-8 animate-shimmer" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="glass rounded-2xl h-64 animate-shimmer" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (vehicles.length === 0) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">New In</p>
              <h2>Latest Arrivals</h2>
              <p className="text-muted-foreground text-sm mt-1">Fresh vehicles in our yard — parts available now</p>
            </div>
            <div className="flex items-center gap-3">
              {totalPages > 1 && (
                <div className="hidden md:flex items-center gap-2">
                  <button onClick={prevPage} className="p-2 rounded-lg glass hover:border-accent/30 transition-all" aria-label="Previous">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-muted-foreground px-1">{currentPage + 1}/{totalPages}</span>
                  <button onClick={nextPage} className="p-2 rounded-lg glass hover:border-accent/30 transition-all" aria-label="Next">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
              <Link to="/latest-arrivals" className="hidden md:flex items-center gap-1.5 text-accent font-semibold text-sm hover:gap-2.5 transition-all">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {currentVehicles.map(v => (
                <Link
                  key={v.id}
                  to={`/latest-arrivals/${v.id}`}
                  className="glass rounded-2xl overflow-hidden block card-hover group"
                >
                  <BlurImage
                    src={thumbUrl(v.imageUrl || v.images?.[0], 400)}
                    alt={`${v.year} ${v.make} ${v.model}`}
                    wrapperClassName="aspect-[16/10]"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    fallback={<Car className="w-10 h-10 text-muted-foreground/30" />}
                  />
                  <div className="p-4">
                    <p className="font-bold text-sm">{v.year} {v.make} {v.model}</p>
                    {v.trim && <p className="text-xs text-muted-foreground">{v.trim}</p>}
                    <div className="flex items-center justify-between mt-2">
                      <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                        v.status === 'Available' ? 'bg-success/10 text-success' : 'bg-accent/10 text-accent'
                      }`}>{v.status === 'Dismantling' ? 'Now Dismantling' : v.status}</span>
                      {v.mileage && <span className="text-[11px] text-muted-foreground">{v.mileage.toLocaleString()} km</span>}
                    </div>
                    <p className="text-xs text-accent font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Parts →
                    </p>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-1.5 mt-6 md:hidden">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === currentPage ? 'bg-accent w-6' : 'bg-border'}`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        )}

        <div className="mt-6 text-center md:hidden">
          <Link to="/latest-arrivals" className="text-accent font-semibold text-sm">
            View All Arrivals →
          </Link>
        </div>
      </div>
    </section>
  );
}
