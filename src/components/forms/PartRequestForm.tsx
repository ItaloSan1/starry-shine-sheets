import { useState } from 'react';
import { Phone, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { BUSINESS } from '@/lib/constants';

export function PartRequestForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', vehicle: '', partNeeded: '', notes: '', honeypot: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!form.partNeeded.trim()) errs.partNeeded = 'Please describe the part you need';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;
    if (!validate()) return;
    setSubmitting(true);
    // TODO: Connect to backend (email/webhook/Supabase)
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 800);
  };

  const set = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined as any }));
  };

  const inputClass = "px-3 py-2.5 rounded-xl border border-border/50 bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent";
  const errorClass = "text-xs text-destructive mt-0.5";

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-accent mx-auto mb-3" />
        <h3 className="font-bold text-xl mb-2">Request Submitted!</h3>
        <p className="text-muted-foreground mb-1">We'll check our inventory and get back to you shortly.</p>
        <p className="text-sm text-muted-foreground">Or call us now at <a href={`tel:${BUSINESS.phoneRaw}`} className="text-accent font-semibold">{BUSINESS.phone}</a></p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-5">
      <h3 className="font-bold text-lg mb-1">Request a Part</h3>
      <p className="text-sm text-muted-foreground mb-4">Tell us what you need and we'll check our inventory.</p>

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.honeypot} onChange={e => set('honeypot', e.target.value)} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div>
          <input type="text" placeholder="Your Name *" value={form.name} onChange={e => set('name', e.target.value)} className={`w-full ${inputClass}`} />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <input type="tel" placeholder="Phone Number *" value={form.phone} onChange={e => set('phone', e.target.value)} className={`w-full ${inputClass}`} />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>
        <input type="email" placeholder="Email (optional)" value={form.email} onChange={e => set('email', e.target.value)} className={inputClass} />
        <input type="text" placeholder="Year, Make, Model" value={form.vehicle} onChange={e => set('vehicle', e.target.value)} className={inputClass} />
      </div>
      <div className="mb-3">
        <input type="text" placeholder="Part Needed *" value={form.partNeeded} onChange={e => set('partNeeded', e.target.value)} className={`w-full ${inputClass}`} />
        {errors.partNeeded && <p className={errorClass}>{errors.partNeeded}</p>}
      </div>
      <textarea placeholder="Additional notes..." value={form.notes} onChange={e => set('notes', e.target.value)} rows={2} className={`w-full ${inputClass} mb-4 resize-none`} />
      <div className="flex flex-col sm:flex-row gap-3">
        <button type="submit" disabled={submitting} className="bg-accent text-accent-foreground px-6 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50">
          {submitting ? 'Sending...' : 'Submit Request'}
        </button>
        <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center justify-center gap-2 border border-border text-foreground px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-muted transition-colors">
          <Phone className="w-4 h-4" /> Call Instead
        </a>
      </div>
    </form>
  );
}
