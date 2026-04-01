import { useState, useRef } from 'react';
import { Camera, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface ScanResult {
  brand?: string;
  model?: string;
  width?: number;
  aspect_ratio?: number;
  rim_diameter?: number;
  speed_rating?: string;
  load_index?: number;
  season?: string;
  tread_depth_mm?: number;
}

interface TireScanButtonProps {
  onScanResult: (result: ScanResult) => void;
}

export function TireScanButton({ onScanResult }: TireScanButtonProps) {
  const [scanning, setScanning] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCapture = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setScanning(true);
    try {
      // Convert to base64
      const reader = new FileReader();
      const base64 = await new Promise<string>((resolve, reject) => {
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      const { data, error } = await supabase.functions.invoke('scan-tire', {
        body: { image: base64 },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      onScanResult(data);
      toast.success('Tire scanned! Review the pre-filled fields.');
    } catch (err: any) {
      console.error('Scan error:', err);
      toast.error(err.message || 'Failed to scan tire. Try manual entry.');
    } finally {
      setScanning(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleCapture}
      />
      <Button
        type="button"
        variant="outline"
        size="lg"
        className="w-full border-dashed border-2 border-accent text-accent hover:bg-accent/10 py-6"
        onClick={() => inputRef.current?.click()}
        disabled={scanning}
      >
        {scanning ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Scanning tire sidewall…
          </>
        ) : (
          <>
            <Camera className="w-5 h-5" />
            Scan Tire with Camera
          </>
        )}
      </Button>
    </>
  );
}
