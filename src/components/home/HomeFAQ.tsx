import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: 'Do your used parts come with a warranty?', a: 'Yes. All parts come with a warranty — terms vary by part category. Specific warranty details are provided at the time of purchase.' },
  { q: 'Can you ship parts outside Edmonton?', a: 'Yes. We offer delivery across the Edmonton metro area and can ship anywhere in Alberta and across Canada. Contact us for rates.' },
  { q: 'How do I know if a part will fit my vehicle?', a: 'Our team checks fitment before every sale. Provide your year, make, model, and trim, and we\'ll confirm compatibility before you buy.' },
  { q: 'Do you buy junk cars or salvage vehicles?', a: 'Yes. We buy cars, trucks, and SUVs in any condition — running or not. Contact us for a quote.' },
  { q: 'What payment methods do you accept?', a: 'We accept cash, debit, Visa, Mastercard, and e-Transfer. Ask about account options for shops and fleet buyers.' },
  { q: 'Can I visit your yard and pull parts myself?', a: 'We are a full-service operation — our team pulls and prepares parts for you. This ensures quality control and safety.' },
];

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 bg-secondary">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2">Frequently Asked Questions</h2>
        <p className="text-center text-muted-foreground mb-8 text-sm">Common questions about buying used auto parts in Edmonton</p>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden bg-card">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-3.5 text-left"
              >
                <span className="font-semibold text-sm pr-4">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="w-4 h-4 shrink-0 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 shrink-0 text-muted-foreground" />}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
