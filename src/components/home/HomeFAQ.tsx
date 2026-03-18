import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BUSINESS } from '@/lib/constants';

export const homeFaqData = [
  {
    question: "What types of used parts do you sell?",
    answer: `We sell a wide range of used auto and truck parts including engines, transmissions, body panels, doors, hoods, fenders, lights, tires, rims, electrical components, and more. If we don't have it in stock, we can often source it through our recycler network.`,
  },
  {
    question: "Do your used parts come with a warranty?",
    answer: "Yes — we stand behind every part we sell. Warranty terms vary by part category and are provided at the time of purchase. Contact us for details on specific parts.",
  },
  {
    question: "How do I find out if you have a specific part?",
    answer: `You can search our online inventory, call us at ${BUSINESS.phone}, text us, or submit a part request through our website. Our parts team will check availability and get back to you.`,
  },
  {
    question: "Do you buy vehicles?",
    answer: "Yes, we buy cars, trucks, and SUVs in any condition — running or not. Visit our Sell Your Vehicle page or call us for a quote.",
  },
  {
    question: "Can you ship parts outside Edmonton?",
    answer: "Yes, we can arrange shipping for parts across Alberta and beyond. Contact us for a shipping quote on your specific part.",
  },
  {
    question: "How long have you been in business?",
    answer: `Eskimo Auto & Truck Parts has been serving Edmonton and area since ${BUSINESS.established} — over four decades of experience in auto recycling and used parts.`,
  },
];

export function HomeFAQ() {
  return (
    <section className="py-10 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-2">
          {homeFaqData.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-4">
              <AccordionTrigger className="text-sm font-semibold text-left py-3 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-3">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
