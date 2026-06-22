import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TireScanButton } from './TireScanButton';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAddTire, useNextStockNumber, useStaffProfile } from '@/hooks/useTireInventory';
import {
  TIRE_WIDTHS, WIDTH_TO_ASPECTS, ASPECT_TO_RIMS,
  BRAND_NAMES, TIRE_BRANDS, SEASONS, SPEED_RATINGS, CONDITIONS,
  mmTo32nds,
} from '@/lib/tire-data';
import { Loader2, Plus, X, Upload } from 'lucide-react';

export function TireEntryForm({ onSuccess }: { onSuccess?: () => void }) {
  const { data: profile } = useStaffProfile();
  const { data: nextStock } = useNextStockNumber(profile?.initials ?? '');
  const addTire = useAddTire();

  const [brand, setBrand] = useState('');
  const [customBrand, setCustomBrand] = useState('');
  const [model, setModel] = useState('');
  const [customModel, setCustomModel] = useState('');
  const [width, setWidth] = useState<number | ''>('');
  const [aspectRatio, setAspectRatio] = useState<number | ''>('');
  const [rimDiameter, setRimDiameter] = useState<number | ''>('');
  const [season, setSeason] = useState('All-Season');
  const [speedRating, setSpeedRating] = useState('');
  const [loadIndex, setLoadIndex] = useState('');
  const [treadMm, setTreadMm] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [price, setPrice] = useState('');
  const [condition, setCondition] = useState('Good');
  const [notes, setNotes] = useState('');
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  // Available aspect ratios based on width
  const availableAspects = width ? (WIDTH_TO_ASPECTS[width] ?? []) : [];
  const availableRims = aspectRatio ? (ASPECT_TO_RIMS[aspectRatio] ?? []) : [];
  const availableModels = brand && brand !== 'Other' ? (TIRE_BRANDS[brand] ?? []) : [];

  // Reset downstream when width changes
  useEffect(() => { setAspectRatio(''); setRimDiameter(''); }, [width]);
  useEffect(() => { setRimDiameter(''); }, [aspectRatio]);
  useEffect(() => { setModel(''); setCustomModel(''); }, [brand]);

  const tread32 = treadMm ? mmTo32nds(parseFloat(treadMm)) : '';

  const handleScanResult = useCallback((result: any) => {
    if (result.brand) {
      const found = BRAND_NAMES.find(b => b.toLowerCase() === result.brand.toLowerCase());
      if (found) setBrand(found);
      else { setBrand('Other'); setCustomBrand(result.brand); }
    }
    if (result.model) {
      if (result.brand) {
        const brandKey = BRAND_NAMES.find(b => b.toLowerCase() === result.brand.toLowerCase());
        const models = brandKey ? TIRE_BRANDS[brandKey] : [];
        const found = models?.find(m => m.toLowerCase() === result.model.toLowerCase());
        if (found) setModel(found);
        else { setModel('Other'); setCustomModel(result.model); }
      } else {
        setModel('Other');
        setCustomModel(result.model);
      }
    }
    if (result.width) setWidth(result.width);
    if (result.aspect_ratio) setAspectRatio(result.aspect_ratio);
    if (result.rim_diameter) setRimDiameter(result.rim_diameter);
    if (result.speed_rating) setSpeedRating(result.speed_rating);
    if (result.load_index) setLoadIndex(String(result.load_index));
    if (result.season) setSeason(result.season);
    if (result.tread_depth_mm) setTreadMm(String(result.tread_depth_mm));
  }, []);

  const handleImageAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    const remaining = 5 - imageFiles.length;
    const toAdd = files.slice(0, remaining);
    setImageFiles(prev => [...prev, ...toAdd]);
    toAdd.forEach(f => {
      const reader = new FileReader();
      reader.onload = () => setImagePreviews(prev => [...prev, reader.result as string]);
      reader.readAsDataURL(f);
    });
  };

  const removeImage = (idx: number) => {
    setImageFiles(prev => prev.filter((_, i) => i !== idx));
    setImagePreviews(prev => prev.filter((_, i) => i !== idx));
  };

  const uploadImages = async (): Promise<string[]> => {
    const urls: string[] = [];
    for (const file of imageFiles) {
      const ext = file.name.split('.').pop() || 'jpg';
      const path = `${nextStock}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { error } = await supabase.storage.from('tire-images').upload(path, file);
      if (error) throw error;
      const { data: urlData } = supabase.storage.from('tire-images').getPublicUrl(path);
      urls.push(urlData.publicUrl);
    }
    return urls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!width || !aspectRatio || !rimDiameter || !brand || !price || !nextStock) {
      toast.error('Please fill all required fields.');
      return;
    }

    setUploading(true);
    try {
      let imageUrls: string[] = [];
      if (imageFiles.length > 0) {
        imageUrls = await uploadImages();
      }

      const finalBrand = brand === 'Other' ? customBrand : brand;
      const finalModel = model === 'Other' ? customModel : model;

      await addTire.mutateAsync({
        stock_number: nextStock,
        brand: finalBrand,
        model: finalModel || undefined,
        width: width as number,
        aspect_ratio: aspectRatio as number,
        rim_diameter: rimDiameter as number,
        season,
        speed_rating: speedRating || undefined,
        load_index: loadIndex ? parseInt(loadIndex) : undefined,
        tread_depth_mm: treadMm ? parseFloat(treadMm) : undefined,
        quantity: parseInt(quantity) || 1,
        price: parseFloat(price),
        condition,
        notes: notes || undefined,
        images: imageUrls.length > 0 ? imageUrls : undefined,
        added_by: profile?.id,
      });

      toast.success(`Tire ${nextStock} added!`);
      // Reset form
      setBrand(''); setModel(''); setWidth(''); setAspectRatio(''); setRimDiameter('');
      setSeason('All-Season'); setSpeedRating(''); setLoadIndex(''); setTreadMm('');
      setQuantity('1'); setPrice(''); setCondition('Good'); setNotes('');
      setImageFiles([]); setImagePreviews([]);
      onSuccess?.();
    } catch (err: any) {
      toast.error(err.message || 'Failed to add tire');
    } finally {
      setUploading(false);
    }
  };

  const fullSize = width && aspectRatio && rimDiameter
    ? `${width}/${aspectRatio}R${rimDiameter}`
    : '';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* AI Scan */}
      <TireScanButton onScanResult={handleScanResult} />

      {/* Stock Number Preview */}
      <div className="bg-muted/50 border border-border rounded-lg p-3 text-center">
        <span className="text-xs text-muted-foreground">Stock Number: </span>
        <span className="font-mono font-bold text-sm">{nextStock ?? '...'}</span>
      </div>

      {/* Tire Size — Cascading */}
      <div className="space-y-3">
        <h3 className="font-semibold text-sm">Tire Size</h3>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <Label className="text-xs">Width</Label>
            <Select value={width ? String(width) : ''} onValueChange={v => setWidth(parseInt(v))}>
              <SelectTrigger><SelectValue placeholder="Width" /></SelectTrigger>
              <SelectContent>
                {TIRE_WIDTHS.map(w => (
                  <SelectItem key={w} value={String(w)}>{w}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs">Aspect</Label>
            <Select
              value={aspectRatio ? String(aspectRatio) : ''}
              onValueChange={v => setAspectRatio(parseInt(v))}
              disabled={!width}
            >
              <SelectTrigger><SelectValue placeholder="Aspect" /></SelectTrigger>
              <SelectContent>
                {availableAspects.map(a => (
                  <SelectItem key={a} value={String(a)}>{a}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs">Rim</Label>
            <Select
              value={rimDiameter ? String(rimDiameter) : ''}
              onValueChange={v => setRimDiameter(parseInt(v))}
              disabled={!aspectRatio}
            >
              <SelectTrigger><SelectValue placeholder="Rim" /></SelectTrigger>
              <SelectContent>
                {availableRims.map(r => (
                  <SelectItem key={r} value={String(r)}>R{r}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        {fullSize && (
          <p className="text-center font-mono font-bold text-accent text-lg">{fullSize}</p>
        )}
      </div>

      {/* Brand & Model */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label className="text-xs">Brand *</Label>
          <Select value={brand} onValueChange={setBrand}>
            <SelectTrigger><SelectValue placeholder="Brand" /></SelectTrigger>
            <SelectContent>
              {BRAND_NAMES.map(b => (
                <SelectItem key={b} value={b}>{b}</SelectItem>
              ))}
              <SelectItem value="Other">Other…</SelectItem>
            </SelectContent>
          </Select>
          {brand === 'Other' && (
            <Input className="mt-2" placeholder="Type brand" value={customBrand} onChange={e => setCustomBrand(e.target.value)} />
          )}
        </div>
        <div>
          <Label className="text-xs">Model</Label>
          <Select value={model} onValueChange={setModel} disabled={!brand}>
            <SelectTrigger><SelectValue placeholder="Model" /></SelectTrigger>
            <SelectContent>
              {availableModels.map(m => (
                <SelectItem key={m} value={m}>{m}</SelectItem>
              ))}
              <SelectItem value="Other">Other…</SelectItem>
            </SelectContent>
          </Select>
          {model === 'Other' && (
            <Input className="mt-2" placeholder="Type model" value={customModel} onChange={e => setCustomModel(e.target.value)} />
          )}
        </div>
      </div>

      {/* Season & Condition */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label className="text-xs">Season *</Label>
          <Select value={season} onValueChange={setSeason}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {SEASONS.map(s => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-xs">Condition *</Label>
          <Select value={condition} onValueChange={setCondition}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {CONDITIONS.map(c => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Tread Depth */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label className="text-xs">Tread Depth (mm)</Label>
          <Input
            type="number"
            step="0.1"
            min="0"
            max="15"
            value={treadMm}
            onChange={e => setTreadMm(e.target.value)}
            placeholder="e.g. 7.5"
          />
        </div>
        <div>
          <Label className="text-xs">Tread Depth (32nds)</Label>
          <Input
            type="text"
            readOnly
            value={tread32 ? `${tread32}/32"` : ''}
            placeholder="Auto-calculated"
            className="bg-muted"
          />
        </div>
      </div>

      {/* Speed Rating, Load Index */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label className="text-xs">Speed Rating</Label>
          <Select value={speedRating} onValueChange={setSpeedRating}>
            <SelectTrigger><SelectValue placeholder="Optional" /></SelectTrigger>
            <SelectContent>
              {SPEED_RATINGS.map(sr => (
                <SelectItem key={sr.value} value={sr.value}>{sr.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-xs">Load Index</Label>
          <Input
            type="number"
            min="60"
            max="130"
            value={loadIndex}
            onChange={e => setLoadIndex(e.target.value)}
            placeholder="e.g. 95"
          />
        </div>
      </div>

      {/* Price & Quantity */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label className="text-xs">Price ($) *</Label>
          <Input
            type="number"
            step="0.01"
            min="0"
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder="Per tire"
          />
        </div>
        <div>
          <Label className="text-xs">Quantity *</Label>
          <Input
            type="number"
            min="1"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />
        </div>
      </div>

      {/* Notes */}
      <div>
        <Label className="text-xs">Notes</Label>
        <Textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Optional notes…"
          rows={2}
        />
      </div>

      {/* Images */}
      <div>
        <Label className="text-xs">Photos (up to 5)</Label>
        <div className="flex flex-wrap gap-2 mt-2">
          {imagePreviews.map((src, i) => (
            <div key={i} className="relative w-20 h-20 rounded-xl overflow-hidden border border-border">
              <img src={src} alt="" className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => removeImage(i)}
                className="absolute top-0.5 right-0.5 bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
          {imageFiles.length < 5 && (
            <label className="w-20 h-20 rounded-xl border-2 border-dashed border-border flex items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors">
              <Plus className="w-5 h-5 text-muted-foreground" />
              <input type="file" accept="image/*" className="hidden" onChange={handleImageAdd} multiple />
            </label>
          )}
        </div>
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full" size="lg" disabled={uploading || addTire.isPending}>
        {(uploading || addTire.isPending) ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Saving…</>
        ) : (
          <><Upload className="w-4 h-4" /> Add Tire — {nextStock}</>
        )}
      </Button>
    </form>
  );
}
