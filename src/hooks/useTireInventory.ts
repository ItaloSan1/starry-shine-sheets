import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface TireRecord {
  id: string;
  stock_number: string;
  brand: string;
  model: string | null;
  width: number;
  aspect_ratio: number;
  rim_diameter: number;
  full_size: string | null;
  season: string;
  speed_rating: string | null;
  load_index: number | null;
  tread_depth_mm: number | null;
  tread_depth_32nds: number | null;
  quantity: number;
  price: number;
  condition: string;
  notes: string | null;
  images: string[] | null;
  status: string;
  added_by: string | null;
  created_at: string;
  updated_at: string;
}

// Public hook — only available tires
export function usePublicTires(filters?: {
  brand?: string;
  season?: string;
  minPrice?: number;
  maxPrice?: number;
  size?: string;
}) {
  return useQuery({
    queryKey: ['public-tires', filters],
    queryFn: async () => {
      let q = supabase
        .from('tire_inventory')
        .select('*')
        .eq('status', 'Available')
        .gt('quantity', 0)
        .order('created_at', { ascending: false });

      if (filters?.brand) q = q.eq('brand', filters.brand);
      if (filters?.season) q = q.eq('season', filters.season);
      if (filters?.minPrice) q = q.gte('price', filters.minPrice);
      if (filters?.maxPrice) q = q.lte('price', filters.maxPrice);
      if (filters?.size) q = q.eq('full_size', filters.size);

      const { data, error } = await q;
      if (error) throw error;
      return (data ?? []) as TireRecord[];
    },
  });
}

// Staff hook — all tires
export function useStaffTires() {
  return useQuery({
    queryKey: ['staff-tires'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tire_inventory')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return (data ?? []) as TireRecord[];
    },
  });
}

export function useNextStockNumber(initials: string) {
  return useQuery({
    queryKey: ['next-stock-number', initials],
    queryFn: async () => {
      if (!initials) return null;
      const prefix = initials.toUpperCase();
      const { data, error } = await supabase
        .from('tire_inventory')
        .select('stock_number')
        .like('stock_number', `${prefix}-%`)
        .order('stock_number', { ascending: false })
        .limit(1);
      if (error) throw error;
      if (!data || data.length === 0) return `${prefix}-0001`;
      const last = data[0].stock_number;
      const num = parseInt(last.split('-')[1], 10) || 0;
      return `${prefix}-${String(num + 1).padStart(4, '0')}`;
    },
    enabled: !!initials,
  });
}

export function useAddTire() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (tire: {
      stock_number: string;
      brand: string;
      model?: string;
      width: number;
      aspect_ratio: number;
      rim_diameter: number;
      season: string;
      speed_rating?: string;
      load_index?: number;
      tread_depth_mm?: number;
      quantity: number;
      price: number;
      condition: string;
      notes?: string;
      images?: string[];
      added_by?: string;
    }) => {
      const { data, error } = await supabase
        .from('tire_inventory')
        .insert(tire as any)
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['staff-tires'] });
      qc.invalidateQueries({ queryKey: ['public-tires'] });
      qc.invalidateQueries({ queryKey: ['next-stock-number'] });
    },
  });
}

export function useUpdateTire() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...updates }: Partial<TireRecord> & { id: string }) => {
      const { data, error } = await supabase
        .from('tire_inventory')
        .update({ ...updates, updated_at: new Date().toISOString() } as any)
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['staff-tires'] });
      qc.invalidateQueries({ queryKey: ['public-tires'] });
    },
  });
}

export function useStaffProfile() {
  return useQuery({
    queryKey: ['staff-profile'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return null;
      const { data, error } = await supabase
        .from('staff_profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle();
      if (error) throw error;
      return data as { id: string; initials: string; full_name: string; role: string } | null;
    },
  });
}
