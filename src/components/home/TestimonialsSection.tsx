import { Star, Quote } from 'lucide-react';
import { ScrollReveal, StaggerChildren, staggerItem } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'M.R.', role: 'Edmonton Mechanic', text: 'Been sourcing parts from Eskimo for over 10 years. Fair prices, honest condition ratings, and they always come through. Best recycler in the city.', rating: 5 },
  { name: 'S.K.', role: 'Vehicle Owner, Sherwood Park', text: 'Needed a transmission for my Civic. Eskimo had one in stock, tested and warrantied. Saved me thousands compared to going through the dealer.', rating: 5 },
  { name: 'D.T.', role: 'Body Shop Owner, Edmonton', text: 'We source body panels from Eskimo regularly. Good quality OEM parts, decent selection, and reliable service. They know what shops need.', rating: 5 },
  { name: 'J.L.', role: 'Fleet Manager, Edmonton Area', text: 'Managing a fleet means parts need to be affordable and available fast. Eskimo has been solid for us — good pricing and they understand the urgency.', rating: 5 },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <p className="text-accent text-sm font-semibold tracking-wider uppercase text-center mb-3">Reviews</p>
          <h2 className="text-center mb-3">What Edmonton Drivers Say</h2>
          <p className="text-center text-muted-foreground mb-14 text-sm max-w-lg mx-auto">
            Trusted by mechanics, shops, and vehicle owners across Edmonton
          </p>
        </ScrollReveal>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.12}>
          {testimonials.map(t => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              className="relative glass rounded-2xl p-6 card-hover border-l-2 border-l-accent/40"
            >
              <Quote className="w-8 h-8 text-accent/10 absolute top-5 right-5" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-sm md:text-[0.95rem] text-foreground/80 leading-relaxed mb-5">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                  <span className="text-sm font-bold text-accent">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
