import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CallToAction } from '@/components/layout/CallToAction';

const faqs = [
  { q: 'Do your used parts come with a warranty?', a: 'Yes. Engines and transmissions come with up to a 90-day warranty. Most other parts carry a 30 to 60-day warranty.' },
  { q: 'Can you ship parts outside Edmonton?', a: 'Yes. We offer local delivery across the Edmonton metro area and can ship anywhere in Alberta and across Canada.' },
  { q: 'How do I know if a part will fit my vehicle?', a: 'Our team checks fitment before every sale. Provide your year, make, model, and trim, and we\'ll confirm compatibility.' },
  { q: 'Do you buy junk cars or salvage vehicles?', a: 'Yes. We buy cars, trucks, and SUVs in any condition — running or not. We offer free towing in the Edmonton area.' },
  { q: 'What payment methods do you accept?', a: 'Cash, debit, Visa, Mastercard, and e-Transfer. Shop accounts may qualify for net-30 terms.' },
  { q: 'Can I visit and pull parts myself?', a: 'We are full-service — our team pulls and prepares parts for you to ensure quality and safety.' },
  { q: 'Do you have parts for trucks and heavy-duty vehicles?', a: 'Yes. We stock parts for F-150 through F-350, Silverado, Sierra, Ram, Tacoma, Tundra, and other truck models.' },
  { q: 'How do I request a part?', a: 'Call us at 780-555-0199, text us, or use the part request form on our website. We respond quickly.' },
  { q: 'What makes and models do you carry?', a: 'Ford, Chevrolet, GMC, Toyota, Honda, Dodge, Ram, Hyundai, Kia, Nissan, and more. Search our inventory online.' },
  { q: 'Do you offer wholesale pricing for shops?', a: 'Yes. We work with repair shops, body shops, and fleet operators with competitive wholesale pricing and delivery.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">Frequently Asked Questions</h1>
          <p className="text-primary-foreground/80 mt-2 text-lg">Common questions about buying used auto parts in Edmonton.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg bg-card">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left">
                <span className="font-semibold text-sm pr-4">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="w-4 h-4 shrink-0 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 shrink-0 text-muted-foreground" />}
              </button>
              {openIndex === i && <div className="px-5 pb-4"><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
      <CallToAction title="Still Have Questions?" description="Call or text us — we're happy to help." />
    </div>
  );
}
