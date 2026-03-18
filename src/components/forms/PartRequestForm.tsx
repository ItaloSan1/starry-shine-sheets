import { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const PHONE = '780-555-0199';

export function PartRequestForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', vehicle: '', partNeeded: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.partNeeded) {
      toast.error('Please fill in your name, phone, and the part you need.');
      return;
    }
    setSubmitting(true);
    // TODO: Connect to backend (Supabase, email service, etc.)
    setTimeout(() => {
      toast.success('Part request submitted! We\'ll get back to you shortly.');
      setForm({ name: '', phone: '', email: '', vehicle: '', partNeeded: '', notes: '' });
      setSubmitting(false);
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6">
      <h3 className="font-bold text-lg mb-1">Request a Part</h3>
      <p className="text-sm text-muted-foreground mb-4">Tell us what you need and we'll check our inventory.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <input type="text" placeholder="Your Name *" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" required />
        <input type="tel" placeholder="Phone Number *" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" required />
        <input type="email" placeholder="Email (optional)" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
        <input type="text" placeholder="Year, Make, Model" value={form.vehicle} onChange={e => setForm({...form, vehicle: e.target.value})} className="px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
      </div>
      <input type="text" placeholder="Part Needed *" value={form.partNeeded} onChange={e => setForm({...form, partNeeded: e.target.value})} className="w-full px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent mb-3" required />
      <textarea placeholder="Additional notes..." value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} rows={2} className="w-full px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent mb-4 resize-none" />
      <div className="flex flex-col sm:flex-row gap-3">
        <button type="submit" disabled={submitting} className="bg-accent text-accent-foreground px-6 py-2.5 rounded-md font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50">
          {submitting ? 'Sending...' : 'Submit Request'}
        </button>
        <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 border border-border text-foreground px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-muted transition-colors">
          <Phone className="w-4 h-4" /> Call Instead
        </a>
      </div>
    </form>
  );
}
