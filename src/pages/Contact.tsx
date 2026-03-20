import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { PartRequestForm } from '@/components/forms/PartRequestForm';
import { BUSINESS } from '@/lib/constants';
import { useSEO } from '@/hooks/useSEO';
import storefront from '@/assets/storefront.jpg';

export default function Contact() {
  useSEO({
    title: 'Contact Us | Eskimo Auto & Truck Parts Edmonton',
    description: `Call ${BUSINESS.phone} or visit us at ${BUSINESS.address}. Edmonton's trusted auto recycler since ${BUSINESS.established}.`,
  });

  return (
    <div className="pb-20 lg:pb-0">
      <div className="relative bg-primary text-primary-foreground py-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src={storefront} alt="Eskimo Auto Parts storefront Edmonton" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-primary-foreground">Contact Eskimo Auto & Truck Parts</h1>
          <p className="text-primary-foreground/80 mt-2 text-sm md:text-base">Call, text, or visit us in Edmonton. We're here to help you find the right part.</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Get in Touch</h2>
            <div className="space-y-4 mb-6">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center"><Phone className="w-5 h-5 text-accent" /></div>
                <div><p className="font-bold text-sm">{BUSINESS.phone}</p><p className="text-xs text-muted-foreground">Call us</p></div>
              </a>
              <a href={`sms:${BUSINESS.phoneRaw}`} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center"><MessageCircle className="w-5 h-5 text-accent" /></div>
                <div><p className="font-bold text-sm">Text Us</p><p className="text-xs text-muted-foreground">Send a text for fast responses</p></div>
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center"><Mail className="w-5 h-5 text-accent" /></div>
                <div><p className="font-bold text-sm">{BUSINESS.email}</p><p className="text-xs text-muted-foreground">Email us</p></div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-accent" /></div>
                <div><p className="font-bold text-sm">{BUSINESS.address}</p><p className="text-xs text-muted-foreground">{BUSINESS.city}, {BUSINESS.province} {BUSINESS.postalCode}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-accent" /></div>
                <div>
                  <p className="font-bold text-sm">Hours</p>
                  <p className="text-xs text-muted-foreground">{BUSINESS.hours.weekday}</p>
                  <p className="text-xs text-muted-foreground">{BUSINESS.hours.saturday}</p>
                  <p className="text-xs text-muted-foreground">{BUSINESS.hours.sunday}</p>
                  {/* TODO: Confirm hours with business */}
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-muted rounded-lg border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-muted-foreground/30 mx-auto mb-2" />
                <p className="text-sm font-medium text-muted-foreground">Map — {BUSINESS.fullAddress}</p>
                <p className="text-xs text-muted-foreground/60 mt-1">Google Maps embed coming soon</p>
                {/* TODO: Add Google Maps embed */}
              </div>
            </div>
          </div>
          <PartRequestForm />
        </div>
      </div>
    </div>
  );
}
