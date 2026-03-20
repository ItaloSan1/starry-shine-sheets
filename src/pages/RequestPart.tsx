import { Phone, MessageSquare, ClipboardList, Search, PhoneCall } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { RequestPartForm } from '@/components/forms/RequestPartForm';
import { BUSINESS } from '@/lib/constants';

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Request a Part' },
];

const steps = [
  { icon: ClipboardList, title: 'Submit Your Request', desc: 'Tell us the year, make, model, and part you need.' },
  { icon: Search, title: 'We Check Inventory', desc: 'We search our yard and our recycler network across Western Canada.' },
  { icon: PhoneCall, title: 'We Contact You', desc: 'We reach out with pricing, availability, and shipping options.' },
];

export default function RequestPart() {
  useSEO({
    title: 'Request a Part | Eskimo Auto & Truck Parts Edmonton',
    description: `Can't find the used auto part you need? Submit a request and we'll search our inventory and recycler network. Call ${BUSINESS.phone}.`,
  });

  return (
    <div className="pb-20 lg:pb-0">
      <div className="relative bg-primary text-primary-foreground py-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={partsCounter} alt="Eskimo Auto Parts counter" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">Request a Part</h1>
          <p className="text-primary-foreground/70 mt-1">Can't find what you're looking for? Let us track it down.</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumbs items={breadcrumbs} />
        <BreadcrumbSchema items={breadcrumbs} />

        {/* How it works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <step.icon className="w-5 h-5 text-accent" />
              </div>
              <p className="text-xs text-accent font-bold mb-1">Step {i + 1}</p>
              <h3 className="font-bold text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RequestPartForm />
          </div>
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-bold mb-2">Prefer to call or text?</h3>
              <p className="text-sm text-muted-foreground mb-4">Our parts team can help you find what you need right away.</p>
              <div className="space-y-2">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2.5 rounded-md font-bold text-sm justify-center hover:opacity-90 transition-opacity">
                  <Phone className="w-4 h-4" /> Call {BUSINESS.phone}
                </a>
                <a href={`sms:${BUSINESS.phoneRaw}`} className="flex items-center gap-2 border border-border px-4 py-2.5 rounded-md font-semibold text-sm justify-center hover:bg-muted transition-colors">
                  <MessageSquare className="w-4 h-4" /> Text {BUSINESS.phone}
                </a>
              </div>
            </div>
            <div className="bg-muted/50 border border-border rounded-lg p-5">
              <h3 className="font-bold text-sm mb-2">Why request through us?</h3>
              <ul className="text-xs text-muted-foreground space-y-1.5">
                <li>• Access to our full on-site inventory</li>
                <li>• Parts sourcing from our recycler network</li>
                <li>• Warranty-backed parts</li>
                <li>• Serving Edmonton since {BUSINESS.established}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
