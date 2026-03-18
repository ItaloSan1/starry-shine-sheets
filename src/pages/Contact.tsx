import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { PartRequestForm } from '@/components/forms/PartRequestForm';

const PHONE = '780-555-0199';

export default function Contact() {
  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">Contact Eskimo Auto & Truck Parts</h1>
          <p className="text-primary-foreground/80 mt-2 text-lg">Call, text, or visit us in Edmonton. We're here to help you find the right part.</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
            <div className="space-y-4 mb-8">
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center"><Phone className="w-5 h-5 text-accent" /></div>
                <div><p className="font-bold text-sm">{PHONE}</p><p className="text-xs text-muted-foreground">Call us</p></div>
              </a>
              <a href={`sms:${PHONE}`} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center"><MessageCircle className="w-5 h-5 text-accent" /></div>
                <div><p className="font-bold text-sm">Text Us</p><p className="text-xs text-muted-foreground">Send a text for fast responses</p></div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center"><Mail className="w-5 h-5 text-accent" /></div>
                <div><p className="font-bold text-sm">info@eskimoautoparts.ca</p><p className="text-xs text-muted-foreground">Email us</p></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-accent" /></div>
                <div><p className="font-bold text-sm">12345 Fort Road NW</p><p className="text-xs text-muted-foreground">Edmonton, AB T5B 4H5</p></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-accent" /></div>
                <div><p className="font-bold text-sm">Hours</p><p className="text-xs text-muted-foreground">Mon–Fri: 8am–5pm | Sat: 9am–2pm | Sun: Closed</p></div>
              </div>
            </div>
          </div>
          <PartRequestForm />
        </div>
      </div>
    </div>
  );
}
