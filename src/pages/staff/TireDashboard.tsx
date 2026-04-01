import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useStaffTires, useUpdateTire, useStaffProfile } from '@/hooks/useTireInventory';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, LogOut, Search, Edit2, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function TireDashboard() {
  const navigate = useNavigate();
  const { data: profile, isLoading: profileLoading } = useStaffProfile();
  const { data: tires, isLoading } = useStaffTires();
  const updateTire = useUpdateTire();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editQty, setEditQty] = useState('');
  const [editPrice, setEditPrice] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate('/staff/login', { replace: true });
    });
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/staff/login', { replace: true });
  };

  const filtered = tires?.filter(t => {
    const matchSearch = !search || 
      t.stock_number.toLowerCase().includes(search.toLowerCase()) ||
      t.brand.toLowerCase().includes(search.toLowerCase()) ||
      (t.full_size ?? '').toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || t.status === statusFilter;
    return matchSearch && matchStatus;
  }) ?? [];

  const startEdit = (t: any) => {
    setEditingId(t.id);
    setEditQty(String(t.quantity));
    setEditPrice(String(t.price));
  };

  const saveEdit = async (id: string) => {
    try {
      await updateTire.mutateAsync({
        id,
        quantity: parseInt(editQty),
        price: parseFloat(editPrice),
      });
      setEditingId(null);
      toast.success('Updated');
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const toggleStatus = async (id: string, current: string) => {
    const next = current === 'Available' ? 'Sold' : current === 'Sold' ? 'Reserved' : 'Available';
    await updateTire.mutateAsync({ id, status: next });
  };

  if (profileLoading) return <div className="flex items-center justify-center min-h-screen"><div className="w-8 h-8 border-3 border-accent border-t-transparent rounded-full animate-spin" /></div>;

  if (!profile) return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <p className="text-muted-foreground mb-4">Your staff profile is not set up yet. Contact the admin.</p>
        <Button variant="outline" onClick={handleLogout}>Sign Out</Button>
      </div>
    </div>
  );

  const statusColor = (s: string) => s === 'Available' ? 'default' : s === 'Sold' ? 'destructive' : 'secondary';

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-card border-b border-border px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-lg">Tire Inventory</h1>
          <p className="text-xs text-muted-foreground">{profile.full_name} ({profile.initials})</p>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/staff/tires/add">
            <Button size="sm"><Plus className="w-4 h-4" /> Add</Button>
          </Link>
          <Button variant="ghost" size="icon" onClick={handleLogout}><LogOut className="w-4 h-4" /></Button>
        </div>
      </header>

      {/* Filters */}
      <div className="px-4 py-3 flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-muted-foreground" />
          <Input className="pl-8" placeholder="Search stock#, brand, size…" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Available">Available</SelectItem>
            <SelectItem value="Sold">Sold</SelectItem>
            <SelectItem value="Reserved">Reserved</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats */}
      <div className="px-4 pb-3 flex gap-3 text-xs">
        <span className="text-muted-foreground">Total: <strong>{tires?.length ?? 0}</strong></span>
        <span className="text-muted-foreground">Available: <strong>{tires?.filter(t => t.status === 'Available').length ?? 0}</strong></span>
      </div>

      {/* List */}
      {isLoading ? (
        <div className="flex justify-center py-10"><div className="w-8 h-8 border-3 border-accent border-t-transparent rounded-full animate-spin" /></div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-10 text-muted-foreground">
          <p>No tires found</p>
          <Link to="/staff/tires/add" className="text-accent underline text-sm mt-2 inline-block">Add your first tire</Link>
        </div>
      ) : (
        <div className="px-4 space-y-2">
          {filtered.map(t => (
            <div key={t.id} className="bg-card border border-border rounded-lg p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-muted-foreground">{t.stock_number}</span>
                    <Badge variant={statusColor(t.status)} className="text-xs cursor-pointer" onClick={() => toggleStatus(t.id, t.status)}>
                      {t.status}
                    </Badge>
                  </div>
                  <p className="font-bold text-sm">{t.brand} {t.model ?? ''}</p>
                  <p className="font-mono text-accent text-sm">{t.full_size}</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground mt-1">
                    <span>{t.season}</span>
                    {t.tread_depth_mm && <span>{t.tread_depth_mm}mm / {t.tread_depth_32nds}/32"</span>}
                    <span>{t.condition}</span>
                  </div>
                </div>
                {/* Thumb */}
                {t.images && t.images.length > 0 && (
                  <img src={t.images[0]} alt="" className="w-14 h-14 rounded-md object-cover border border-border shrink-0" />
                )}
              </div>
              {/* Editable price/qty */}
              <div className="flex items-center gap-2 mt-2 pt-2 border-t border-border">
                {editingId === t.id ? (
                  <>
                    <Input className="w-20 h-8 text-xs" type="number" value={editQty} onChange={e => setEditQty(e.target.value)} />
                    <span className="text-xs text-muted-foreground">×</span>
                    <Input className="w-24 h-8 text-xs" type="number" step="0.01" value={editPrice} onChange={e => setEditPrice(e.target.value)} />
                    <Button size="sm" variant="ghost" className="h-8 px-2" onClick={() => saveEdit(t.id)}>
                      <Check className="w-4 h-4" />
                    </Button>
                  </>
                ) : (
                  <>
                    <span className="text-sm font-bold">${t.price}</span>
                    <span className="text-xs text-muted-foreground">× {t.quantity}</span>
                    <Button size="sm" variant="ghost" className="h-7 px-1.5 ml-auto" onClick={() => startEdit(t)}>
                      <Edit2 className="w-3.5 h-3.5" />
                    </Button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
