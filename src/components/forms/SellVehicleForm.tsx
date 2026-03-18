import { useState } from 'react';
import { toast } from 'sonner';
import { Upload } from 'lucide-react';

export function SellVehicleForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', year: '', make: '', model: '',
    vin: '', condition: '', running: '', titleStatus: '', location: '', notes: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.year || !form.make || !form.model) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    // TODO: Connect to backend
    setTimeout(() => {
      toast.success('Vehicle info submitted! We\'ll contact you with an offer.');
      setForm({ name: '', phone: '', email: '', year: '', make: '', model: '', vin: '', condition: '', running: '', titleStatus: '', location: '', notes: '' });
      setSubmitting(false);
    }, 800);
  };

  const inputClass = "px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent";
  const selectClass = inputClass;

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-5">
      <h3 className="font-bold text-lg mb-1">Get a Quote for Your Vehicle</h3>
      <p className="text-sm text-muted-foreground mb-4">Fill out the form and we'll get back to you with a fair cash offer.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <input type="text" placeholder="Your Name *" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={inputClass} required />
        <input type="tel" placeholder="Phone Number *" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className={inputClass} required />
        <input type="email" placeholder="Email (optional)" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={inputClass} />
        <input type="text" placeholder="Vehicle Year *" value={form.year} onChange={e => setForm({...form, year: e.target.value})} className={inputClass} required />
        <input type="text" placeholder="Make *" value={form.make} onChange={e => setForm({...form, make: e.target.value})} className={inputClass} required />
        <input type="text" placeholder="Model *" value={form.model} onChange={e => setForm({...form, model: e.target.value})} className={inputClass} required />
        <input type="text" placeholder="VIN (optional)" value={form.vin} onChange={e => setForm({...form, vin: e.target.value})} className={inputClass} />
        <input type="text" placeholder="Vehicle Location (city/area)" value={form.location} onChange={e => setForm({...form, location: e.target.value})} className={inputClass} />
        <select value={form.running} onChange={e => setForm({...form, running: e.target.value})} className={selectClass}>
          <option value="">Running? *</option>
          <option value="yes">Yes — Runs and Drives</option>
          <option value="runs-issues">Runs but Has Issues</option>
          <option value="no">No — Not Running</option>
        </select>
        <select value={form.condition} onChange={e => setForm({...form, condition: e.target.value})} className={selectClass}>
          <option value="">Vehicle Condition</option>
          <option value="good">Good — Minor Wear</option>
          <option value="fair">Fair — Some Damage/Issues</option>
          <option value="damaged">Collision Damaged</option>
          <option value="scrap">Scrap / End of Life</option>
        </select>
        <select value={form.titleStatus} onChange={e => setForm({...form, titleStatus: e.target.value})} className={selectClass}>
          <option value="">Title / Ownership Status</option>
          <option value="clean">Clean Title</option>
          <option value="salvage">Salvage Title</option>
          <option value="no-title">No Title</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <textarea placeholder="Additional details (damage, missing parts, etc.)" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} rows={3} className={`w-full ${inputClass} mb-3 resize-none`} />
      
      {/* Photo upload placeholder */}
      <div className="border-2 border-dashed border-border rounded-lg p-4 mb-4 text-center">
        <Upload className="w-6 h-6 text-muted-foreground/40 mx-auto mb-1" />
        <p className="text-xs text-muted-foreground">Photo upload coming soon — for now, text or email us photos</p>
        <p className="text-[11px] text-muted-foreground/60">Photos help us provide a faster, more accurate quote</p>
        {/* TODO: Implement file upload when backend is connected */}
      </div>

      <button type="submit" disabled={submitting} className="w-full sm:w-auto bg-accent text-accent-foreground px-8 py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50">
        {submitting ? 'Sending...' : 'Get My Free Quote'}
      </button>
    </form>
  );
}
