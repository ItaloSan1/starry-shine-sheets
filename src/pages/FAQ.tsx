import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CallToAction } from '@/components/layout/CallToAction';
import { BUSINESS } from '@/lib/constants';
import { useSEO } from '@/hooks/useSEO';
import { FAQSchema } from '@/components/seo/SchemaMarkup';

const faqs = [
  { q: 'Do your used parts come with a warranty?', a: 'Yes. All parts come with a warranty — terms vary by part category. Specific warranty details are provided at the time of purchase.' },
  { q: 'Can you ship parts outside Edmonton?', a: 'Yes. We offer delivery across the Edmonton metro area and can ship anywhere in Alberta and across Canada. Contact us for rates.' },
  { q: 'How do I know if a part will fit my vehicle?', a: 'Our team checks fitment before every sale. Provide your year, make, model, and trim, and we\'ll confirm compatibility.' },
  { q: 'Do you buy junk cars or salvage vehicles?', a: 'Yes. We buy cars, trucks, and SUVs in any condition — running or not. Contact us for a quote.' },
  { q: 'What payment methods do you accept?', a: 'Cash, debit, Visa, Mastercard, and e-Transfer. Ask about account options for shops and fleet buyers.' },
  { q: 'Can I visit and pull parts myself?', a: 'We are full-service — our team pulls and prepares parts for you to ensure quality and safety.' },
  { q: 'Do you have parts for trucks and heavy-duty vehicles?', a: 'Yes. We stock parts for F-150 through F-350, Silverado, Sierra, Ram, Tacoma, Tundra, and other truck models.' },
  { q: 'How do I request a part?', a: `Call us at ${BUSINESS.phone}, text us, or use the part request form on our website. We respond quickly.` },
  { q: 'What makes and models do you carry?', a: 'Ford, Chevrolet, GMC, Toyota, Honda, Dodge, Ram, Hyundai, Kia, Nissan, and more. Search our inventory online.' },
  { q: 'Do you offer pricing for shops?', a: 'Yes. We work with repair shops, body shops, and fleet operators with competitive pricing and delivery options.' },
];

export default function FAQ() {
  useSEO({
    title: 'FAQ | Eskimo Auto & Truck Parts Edmonton',
    description: `Common questions about buying used auto parts in Edmonton. Warranty info, shipping, fitment, and more. Call ${BUSINESS.phone}.`,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pb-20 lg:pb-0">
      <div className="relative bg-primary text-primary-foreground py-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={partsWarehouse} alt="Eskimo Auto Parts warehouse" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-primary-foreground">Frequently Asked Questions</h1>
          <p className="text-primary-foreground/80 mt-2 text-sm md:text-base">Common questions about buying used auto parts in Edmonton.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg bg-card">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between px-5 py-3.5 text-left">
                <span className="font-semibold text-sm pr-4">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="w-4 h-4 shrink-0 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 shrink-0 text-muted-foreground" />}
              </button>
              {openIndex === i && <div className="px-5 pb-4"><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
      <FAQSchema items={faqs.map(f => ({ question: f.q, answer: f.a }))} />
      <CallToAction title="Still Have Questions?" description="Call or text us — we're happy to help." />
    </div>
  );
}
