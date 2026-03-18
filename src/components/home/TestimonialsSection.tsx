import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'M.R.', role: 'Edmonton Mechanic', text: 'Been sourcing parts from Eskimo for over 10 years. Fair prices, honest condition ratings, and they always come through. Best recycler in the city.', rating: 5 },
  { name: 'S.K.', role: 'Vehicle Owner, Sherwood Park', text: 'Needed a transmission for my Civic. Eskimo had one in stock, tested and warrantied. Saved me thousands compared to going through the dealer.', rating: 5 },
  { name: 'D.T.', role: 'Body Shop Owner, Edmonton', text: 'We source body panels from Eskimo regularly. Good quality OEM parts, decent selection, and reliable service. They know what shops need.', rating: 5 },
  { name: 'J.L.', role: 'Fleet Manager, Edmonton Area', text: 'Managing a fleet means parts need to be affordable and available fast. Eskimo has been solid for us — good pricing and they understand the urgency.', rating: 5 },
];

export function TestimonialsSection() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-1">What Edmonton Drivers Say</h2>
        <p className="text-center text-muted-foreground mb-8 text-sm">Reviews from our customers</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map(t => (
            <div key={t.name} className="border border-border rounded-lg p-5 relative">
              <Quote className="w-6 h-6 text-accent/20 absolute top-4 right-4" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">"{t.text}"</p>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">Selected customer feedback. See our Google reviews for more.</p>
      </div>
    </section>
  );
}
