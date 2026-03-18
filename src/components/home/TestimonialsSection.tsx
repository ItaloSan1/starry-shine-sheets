import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Mike R.', role: 'Mechanic, Edmonton', text: 'Eskimo has been my go-to parts supplier for over 10 years. Fair prices, honest condition ratings, and they always have what I need. Best auto recycler in Edmonton.', rating: 5 },
  { name: 'Sarah K.', role: 'Vehicle Owner', text: 'Needed a transmission for my 2017 Civic. Eskimo had one in stock, tested and warrantied. Saved me over $2,000 compared to a new one. Installed perfectly.', rating: 5 },
  { name: 'Dave T.', role: 'Body Shop Owner', text: 'We source body panels from Eskimo regularly. Great quality, good selection, and their delivery service saves us time. Highly recommend for any shop in the Edmonton area.', rating: 5 },
  { name: 'Jennifer L.', role: 'Fleet Manager', text: 'Managing a fleet of delivery vans means parts need to be affordable and available fast. Eskimo comes through every time. Their wholesale pricing makes a real difference.', rating: 5 },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">What Our Customers Say</h2>
        <p className="text-center text-muted-foreground mb-10">Trusted by Edmonton drivers, mechanics, and businesses</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="border border-border rounded-lg p-6">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
