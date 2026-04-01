import { useState, useCallback } from 'react';
import { Search, Loader2, Car, History } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { VinResults } from '@/components/vin/VinResults';
import { decodeVIN, detectVINType, type DecodedVehicle } from '@/lib/vin-decoder';


export default function VinDecoder() {
  const [vin, setVin] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DecodedVehicle | null>(null);

  useSEO({
    title: 'Free VIN Decoder — Modern & Classic Vehicles | Eskimo Auto',
    description:
      'Decode any VIN for free. Supports modern vehicles (1981+) via NHTSA and classic cars (1960–1980) including GM, Ford, and Mopar. Find parts fast.',
  });

  const handleDecode = useCallback(async () => {
    const cleaned = vin.trim();
    if (!cleaned) return;
    setLoading(true);
    setResult(null);
    try {
      const decoded = await decodeVIN(cleaned);
      setResult(decoded);
    } finally {
      setLoading(false);
    }
  }, [vin]);

  const detectedType = vin.trim().length >= 5 ? detectVINType(vin) : null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Eskimo VIN Decoder',
    description: 'Free VIN decoder for modern and classic vehicles',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'CAD' },
  };

  return (
    <>
      <SchemaMarkup schema={schema} />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            <Car className="w-4 h-4" />
            Free Tool
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            VIN Decoder
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
            Decode any Vehicle Identification Number — modern <span className="text-primary-foreground/90 font-medium">(1981+)</span> or classic <span className="text-primary-foreground/90 font-medium">(1960–1980)</span>. Instantly find year, make, model, engine, and more.
          </p>
        </div>
      </section>

      {/* Decoder */}
      <section className="max-w-2xl mx-auto px-4 -mt-6 relative z-10 mb-16">
        <div className="bg-card border border-border rounded-xl shadow-lg p-6 md:p-8">
          <label htmlFor="vin-input" className="block text-sm font-semibold text-foreground mb-2">
            Enter VIN
          </label>
          <div className="flex gap-3">
            <Input
              id="vin-input"
              placeholder="e.g. 1HGBH41JXMN109186 or 124379N400001"
              value={vin}
              onChange={(e) => setVin(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === 'Enter' && handleDecode()}
              maxLength={17}
              className="font-mono text-base tracking-wider"
              autoComplete="off"
              spellCheck={false}
            />
            <Button
              onClick={handleDecode}
              disabled={loading || vin.trim().length < 5}
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 shrink-0"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              <span className="hidden sm:inline ml-2">Decode</span>
            </Button>
          </div>

          {/* Type indicator */}
          {detectedType && detectedType !== 'unknown' && !result && (
            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              {detectedType === 'modern' ? (
                <>
                  <Car className="w-3.5 h-3.5" />
                  <span>Detected: <strong className="text-foreground">Modern VIN (1981+)</strong> — will use NHTSA database</span>
                </>
              ) : (
                <>
                  <History className="w-3.5 h-3.5" />
                  <span>Detected: <strong className="text-foreground">Classic VIN (1960–1980)</strong> — will use built-in lookup tables</span>
                </>
              )}
            </div>
          )}

          {/* Results */}
          {result && <VinResults result={result} />}
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-bold text-foreground mb-3">Modern VINs (1981+)</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Since 1981, all vehicles sold in North America use a standardized 17-character VIN. 
              Our decoder uses the official NHTSA database to return detailed specifications including 
              year, make, model, engine, transmission, drivetrain, and manufacturing location.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-3">Classic VINs (1960–1980)</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Before 1981, VIN formats varied by manufacturer. Our decoder supports GM (Chevrolet, 
              Pontiac, Oldsmobile, Buick, Cadillac), Ford, Lincoln-Mercury, and Mopar (Chrysler, 
              Dodge, Plymouth). Results may be partial since pre-1981 VINs were not federally standardized.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
