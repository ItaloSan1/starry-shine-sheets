import { useState } from 'react';
import { CheckCircle, Phone, MessageSquare, Upload } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

interface FormData {
  name: string;
  phone: string;
  email: string;
  year: string;
  make: string;
  model: string;
  vin: string;
  condition: string;
  titleStatus: string;
  running: string;
  location: string;
  description: string;
  honeypot: string;
}

const initialForm: FormData = {
  name: '', phone: '', email: '', year: '', make: '', model: '', vin: '',
  condition: '', titleStatus: '', running: '', location: '', description: '', honeypot: '',
};

export function SellVehicleForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!form.year.trim()) errs.year = 'Year is required';
    if (!form.make.trim()) errs.make = 'Make is required';
    if (!form.model.trim()) errs.model = 'Model is required';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;
    if (!validate()) return;
    setSubmitting(true);
    // TODO: Connect to backend — send email/webhook notification to admin
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 800);
  };

  const set = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined as any }));
  };

  const inputClass = "px-3 py-2.5 rounded-xl border border-border/50 bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent w-full";
  const selectClass = inputClass;
  const errorClass = "text-xs text-destructive mt-0.5";

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-accent mx-auto mb-3" />
        <h3 className="font-bold text-xl mb-2">Submission Received!</h3>
        <p className="text-muted-foreground mb-1">We'll review your vehicle info and contact you.</p>
        {/* TODO: Confirm response time with business */}
        <p className="text-sm text-muted-foreground mb-6">Typical response time: within 1 business day.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-xl font-semibold text-sm">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a href={`sms:${BUSINESS.phoneRaw}`} className="flex items-center justify-center gap-2 border border-border px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-muted transition-colors">
            <MessageSquare className="w-4 h-4" /> Text Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-5 md:p-6">
      <h3 className="font-bold text-lg mb-1">Get a Quote for Your Vehicle</h3>
      <p className="text-sm text-muted-foreground mb-5">Fill out the form and we'll get back to you with a fair cash offer.</p>

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.honeypot} onChange={e => set('honeypot', e.target.value)} />
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div>
          <input type="text" placeholder="Your Name *" value={form.name} onChange={e => set('name', e.target.value)} className={inputClass} />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <input type="tel" placeholder="Phone *" value={form.phone} onChange={e => set('phone', e.target.value)} className={inputClass} />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>
        <div>
          <input type="email" placeholder="Email (optional)" value={form.email} onChange={e => set('email', e.target.value)} className={inputClass} />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
      </div>

      {/* Vehicle */}
      <div className="grid grid-cols-3 gap-3 mb-3">
        <div>
          <input type="text" placeholder="Year *" value={form.year} onChange={e => set('year', e.target.value)} className={inputClass} />
          {errors.year && <p className={errorClass}>{errors.year}</p>}
        </div>
        <div>
          <input type="text" placeholder="Make *" value={form.make} onChange={e => set('make', e.target.value)} className={inputClass} />
          {errors.make && <p className={errorClass}>{errors.make}</p>}
        </div>
        <div>
          <input type="text" placeholder="Model *" value={form.model} onChange={e => set('model', e.target.value)} className={inputClass} />
          {errors.model && <p className={errorClass}>{errors.model}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <input type="text" placeholder="VIN (optional)" value={form.vin} onChange={e => set('vin', e.target.value)} className={inputClass} />
        <input type="text" placeholder="Vehicle Location (City/Area)" value={form.location} onChange={e => set('location', e.target.value)} className={inputClass} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
        <select value={form.condition} onChange={e => set('condition', e.target.value)} className={selectClass}>
          <option value="">Condition</option>
          <option value="good">Good — Minor Wear</option>
          <option value="fair">Fair — Some Damage</option>
          <option value="damaged">Collision Damaged</option>
          <option value="scrap">Scrap / End of Life</option>
        </select>
        <select value={form.titleStatus} onChange={e => set('titleStatus', e.target.value)} className={selectClass}>
          <option value="">Title Status</option>
          <option value="clean">Clean Title</option>
          <option value="salvage">Salvage Title</option>
          <option value="no-title">No Title</option>
          <option value="unknown">Unknown</option>
        </select>
        <select value={form.running} onChange={e => set('running', e.target.value)} className={selectClass}>
          <option value="">Running?</option>
          <option value="yes">Yes — Runs & Drives</option>
          <option value="runs-no-drive">Runs but Doesn't Drive</option>
          <option value="no">No — Not Running</option>
        </select>
      </div>

      <textarea
        placeholder="Additional details — damage, missing parts, mileage, etc."
        value={form.description}
        onChange={e => set('description', e.target.value)}
        rows={3}
        className={`${inputClass} mb-3 resize-none`}
      />

      {/* Photo upload placeholder */}
      <div className="border-2 border-dashed border-border rounded-lg p-4 mb-4 text-center">
        <Upload className="w-6 h-6 text-muted-foreground/40 mx-auto mb-1" />
        <p className="text-xs text-muted-foreground">Photo upload coming soon — for now, text or email us photos at {BUSINESS.email}</p>
        <p className="text-[11px] text-muted-foreground/60">Photos help us provide a faster, more accurate quote</p>
        {/* TODO: Implement file upload when backend is connected */}
      </div>

      <button type="submit" disabled={submitting} className="w-full bg-accent text-accent-foreground py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50">
        {submitting ? 'Submitting...' : 'Submit for Quote'}
      </button>
    </form>
  );
}
