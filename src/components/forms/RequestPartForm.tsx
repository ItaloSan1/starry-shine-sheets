import { useState } from 'react';
import { Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { BUSINESS } from '@/lib/constants';
import { supabase } from '@/integrations/supabase/client';

interface RequestPartFormProps {
  prefillYear?: string;
  prefillMake?: string;
  prefillModel?: string;
  prefillStockNumber?: string;
}

interface FormData {
  year: string;
  make: string;
  model: string;
  partNeeded: string;
  vin: string;
  contactMethod: 'call' | 'text' | 'email';
  name: string;
  phone: string;
  email: string;
  notes: string;
  honeypot: string;
}

export function RequestPartForm({ prefillYear, prefillMake, prefillModel, prefillStockNumber }: RequestPartFormProps = {}) {
  const [form, setForm] = useState<FormData>({
    year: prefillYear || '',
    make: prefillMake || '',
    model: prefillModel || '',
    partNeeded: '',
    vin: '',
    contactMethod: 'call',
    name: '',
    phone: '',
    email: '',
    notes: prefillStockNumber ? `From vehicle stock #${prefillStockNumber}` : '',
    honeypot: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!form.partNeeded.trim()) errs.partNeeded = 'Please describe the part you need';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;
    if (!validate()) return;
    setSubmitting(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-part-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email || undefined,
          year: form.year || undefined,
          make: form.make || undefined,
          model: form.model || undefined,
          partNeeded: form.partNeeded,
          vin: form.vin || undefined,
          contactMethod: form.contactMethod,
          notes: form.notes || undefined,
          stockNumber: prefillStockNumber || undefined,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit request');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Submit error:', error);
      toast.error('Something went wrong. Please try calling us instead.');
    } finally {
      setSubmitting(false);
    }
  };

  const set = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const inputClass = "px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent";
  const errorClass = "text-xs text-red-500 mt-0.5";

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <CheckCircle className="w-12 h-12 text-accent mx-auto mb-3" />
        <h3 className="font-bold text-xl mb-2">Request Received!</h3>
        <p className="text-muted-foreground mb-1">We'll check our inventory and get back to you shortly.</p>
        <p className="text-sm text-muted-foreground">Typical response time: within 1 business day.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md font-bold text-sm">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a href={`sms:${BUSINESS.phoneRaw}`} className="flex items-center justify-center gap-2 border border-border px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-muted transition-colors">
            <MessageSquare className="w-4 h-4" /> Text Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-5 md:p-6">
      <h3 className="font-bold text-lg mb-1">Request a Part</h3>
      <p className="text-sm text-muted-foreground mb-5">Tell us what you need. We'll check our inventory and our recycler network.</p>

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.honeypot} onChange={e => set('honeypot', e.target.value)} />
      </div>

      {/* Vehicle Info */}
      <div className="grid grid-cols-3 gap-3 mb-3">
        <input type="text" placeholder="Year" value={form.year} onChange={e => set('year', e.target.value)} className={inputClass} />
        <input type="text" placeholder="Make" value={form.make} onChange={e => set('make', e.target.value)} className={inputClass} />
        <input type="text" placeholder="Model" value={form.model} onChange={e => set('model', e.target.value)} className={inputClass} />
      </div>

      <div className="mb-3">
        <input type="text" placeholder="Part Needed *" value={form.partNeeded} onChange={e => set('partNeeded', e.target.value)} className={`w-full ${inputClass}`} />
        {errors.partNeeded && <p className={errorClass}>{errors.partNeeded}</p>}
      </div>

      <div className="mb-3">
        <input type="text" placeholder="VIN (optional — helps us verify exact fitment)" value={form.vin} onChange={e => set('vin', e.target.value)} className={`w-full ${inputClass}`} />
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div>
          <input type="text" placeholder="Your Name *" value={form.name} onChange={e => set('name', e.target.value)} className={`w-full ${inputClass}`} />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <input type="tel" placeholder="Phone Number *" value={form.phone} onChange={e => set('phone', e.target.value)} className={`w-full ${inputClass}`} />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>
      </div>

      <div className="mb-3">
        <input type="email" placeholder="Email (optional)" value={form.email} onChange={e => set('email', e.target.value)} className={`w-full ${inputClass}`} />
        {errors.email && <p className={errorClass}>{errors.email}</p>}
      </div>

      {/* Preferred Contact Method */}
      <div className="mb-3">
        <p className="text-sm font-medium mb-2">Preferred contact method</p>
        <div className="flex gap-4">
          {(['call', 'text', 'email'] as const).map(method => (
            <label key={method} className="flex items-center gap-1.5 text-sm cursor-pointer">
              <input type="radio" name="contactMethod" value={method} checked={form.contactMethod === method} onChange={() => set('contactMethod', method)} className="accent-accent" />
              <span className="capitalize">{method}</span>
            </label>
          ))}
        </div>
      </div>

      <textarea placeholder="Additional notes..." value={form.notes} onChange={e => set('notes', e.target.value)} rows={2} className={`w-full ${inputClass} mb-4 resize-none`} />

      <div className="flex flex-col sm:flex-row gap-3">
        <button type="submit" disabled={submitting} className="bg-accent text-accent-foreground px-6 py-2.5 rounded-md font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50">
          {submitting ? 'Sending...' : 'Submit Request'}
        </button>
        <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center justify-center gap-2 border border-border text-foreground px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-muted transition-colors">
          <Phone className="w-4 h-4" /> Call Instead
        </a>
      </div>
    </form>
  );
}
