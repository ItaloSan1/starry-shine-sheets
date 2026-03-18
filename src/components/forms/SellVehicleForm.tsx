import { useState } from 'react';
import { toast } from 'sonner';

export function SellVehicleForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', year: '', make: '', model: '', condition: '', vin: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.year || !form.make || !form.model) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success('Vehicle info submitted! We\'ll contact you with an offer.');
      setForm({ name: '', phone: '', email: '', year: '', make: '', model: '', condition: '', vin: '', notes: '' });
      setSubmitting(false);
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6">
      <h3 className="font-bold text-lg mb-1">Get a Quote for Your Vehicle</h3>
      <p className="text-sm text-muted-foreground mb-4">Fill out the form and we'll get back to you with a fair cash offer.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <input type="text" placeholder="Your Name *" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" required />
        <input type="tel" placeholder="Phone Number *" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" required />
        <input type="email" placeholder="Email (optional)" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
        <input type="text" placeholder="VIN (optional)" value={form.vin} onChange={e => setForm({...form, vin: e.target.value})} className="px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
        <input type="text" placeholder="Vehicle Year *" value={form.year} onChange={e => setForm({...form, year: e.target.value})} className="px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" required />
        <input type="text" placeholder="Make *" value={form.make} onChange={e => setForm({...form, make: e.target.value})} className="px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" required />
        <input type="text" placeholder="Model *" value={form.model} onChange={e => setForm({...form, model: e.target.value})} className="px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" required />
        <select value={form.condition} onChange={e => setForm({...form, condition: e.target.value})} className="px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent">
          <option value="">Vehicle Condition</option>
          <option value="running">Running & Driving</option>
          <option value="runs-issues">Runs but Has Issues</option>
          <option value="not-running">Not Running</option>
          <option value="damaged">Collision Damaged</option>
          <option value="scrap">Scrap / End of Life</option>
        </select>
      </div>
      <textarea placeholder="Additional details (damage, missing parts, location...)" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} rows={3} className="w-full px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent mb-4 resize-none" />
      <button type="submit" disabled={submitting} className="w-full sm:w-auto bg-accent text-accent-foreground px-8 py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50">
        {submitting ? 'Sending...' : 'Get My Free Quote'}
      </button>
    </form>
  );
}
