import { Link } from 'react-router-dom';
import { Car, Search, Wrench, AlertTriangle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { DecodedVehicle } from '@/lib/vin-decoder';

interface VinResultsProps {
  result: DecodedVehicle;
}

function ResultRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex justify-between items-start py-2.5 border-b border-border last:border-0">
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      <span className="text-sm font-semibold text-foreground text-right max-w-[60%]">{value}</span>
    </div>
  );
}

export function VinResults({ result }: VinResultsProps) {
  if (result.error) {
    return (
      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-5 mt-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-destructive">Could not decode VIN</p>
            <p className="text-sm text-destructive/80 mt-1">{result.error}</p>
          </div>
        </div>
      </div>
    );
  }

  const title = [result.year, result.make, result.model, result.trim].filter(Boolean).join(' ');
  const searchQuery = [result.year?.split('/')[0], result.make, result.model].filter(Boolean).join(' ');

  return (
    <div className="mt-6 space-y-5">
      {/* Vehicle Header */}
      <div className="bg-card border border-border rounded-lg p-5">
        <div className="flex items-center gap-3 mb-1">
          <Car className="w-5 h-5 text-accent" />
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            {result.type === 'modern' ? 'Modern VIN' : 'Classic VIN'} Decoded
          </span>
        </div>
        {title && (
          <h2 className="text-xl font-bold text-foreground mt-2">{title}</h2>
        )}
      </div>

      {/* Details */}
      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Vehicle Details</h3>
        <ResultRow label="VIN" value={result.vin} />
        <ResultRow label="Year" value={result.year} />
        <ResultRow label="Make" value={result.make} />
        <ResultRow label="Model" value={result.model} />
        <ResultRow label="Trim" value={result.trim} />
        <ResultRow label="Division" value={result.division} />
        <ResultRow label="Body Style" value={result.bodyStyle} />
        <ResultRow label="Body Code" value={result.bodyCode} />
        <ResultRow label="Doors" value={result.doors} />
      </div>

      {/* Engine & Drivetrain */}
      {(result.engine || result.displacement || result.transmission || result.drivetrain || result.fuelType || result.engineCode) && (
        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Engine & Drivetrain</h3>
          <ResultRow label="Engine" value={result.engine} />
          <ResultRow label="Engine Code" value={result.engineCode} />
          <ResultRow label="Displacement" value={result.displacement} />
          <ResultRow label="Cylinders" value={result.cylinders} />
          <ResultRow label="Fuel Type" value={result.fuelType} />
          <ResultRow label="Transmission" value={result.transmission} />
          <ResultRow label="Drivetrain" value={result.drivetrain} />
        </div>
      )}

      {/* Manufacturing */}
      {(result.assemblyPlant || result.country || result.plantCity || result.sequenceNumber) && (
        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Manufacturing</h3>
          <ResultRow label="Assembly Plant" value={result.assemblyPlant} />
          <ResultRow label="Plant City" value={result.plantCity} />
          <ResultRow label="Plant State/Province" value={result.plantState} />
          <ResultRow label="Country" value={result.country} />
          <ResultRow label="Sequence Number" value={result.sequenceNumber} />
        </div>
      )}

      {/* Notes */}
      {result.notes && (
        <div className="bg-secondary/50 border border-border rounded-lg p-4 flex items-start gap-3">
          <Info className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">{result.notes}</p>
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button asChild className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to={`/request-a-part?year=${encodeURIComponent(result.year?.split('/')[0] || '')}&make=${encodeURIComponent(result.make || '')}&model=${encodeURIComponent(result.model || '')}`}>
            <Wrench className="w-4 h-4 mr-2" />
            Request Parts for This Vehicle
          </Link>
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <Link to={`/search-inventory?q=${encodeURIComponent(searchQuery)}`}>
            <Search className="w-4 h-4 mr-2" />
            Search Our Inventory
          </Link>
        </Button>
      </div>
    </div>
  );
}
