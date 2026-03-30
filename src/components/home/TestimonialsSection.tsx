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
    <section className="py-14 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-1">What Edmonton Drivers Say</h2>
          <p className="text-center text-muted-foreground mb-10 text-sm">Trusted by mechanics, shops, and vehicle owners across Edmonton</p>
        </ScrollReveal>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.12}>
          {testimonials.map(t => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              className="relative border border-border border-l-4 border-l-accent/40 rounded-xl p-6 bg-card card-hover"
            >
              <Quote className="w-10 h-10 text-accent/10 absolute top-5 right-5" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-base text-foreground leading-relaxed mb-4 font-medium">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-accent">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
        <ScrollReveal delay={0.4}>
          <p className="text-center text-xs text-muted-foreground mt-8">
            ⭐ See our <span className="text-accent font-semibold">Google Reviews</span> for more customer feedback
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
