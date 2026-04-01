import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';
import { BRAND_NAMES, SEASONS } from '@/lib/tire-data';

interface TireFiltersProps {
  brand: string;
  season: string;
  search: string;
  onBrandChange: (v: string) => void;
  onSeasonChange: (v: string) => void;
  onSearchChange: (v: string) => void;
}

export function TireFilters({ brand, season, search, onBrandChange, onSeasonChange, onSearchChange }: TireFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-muted-foreground" />
        <Input className="pl-8" placeholder="Search size, brand…" value={search} onChange={e => onSearchChange(e.target.value)} />
      </div>
      <Select value={brand} onValueChange={onBrandChange}>
        <SelectTrigger className="w-full sm:w-40"><SelectValue placeholder="All Brands" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Brands</SelectItem>
          {BRAND_NAMES.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
        </SelectContent>
      </Select>
      <Select value={season} onValueChange={onSeasonChange}>
        <SelectTrigger className="w-full sm:w-40"><SelectValue placeholder="All Seasons" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Seasons</SelectItem>
          {SEASONS.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  );
}
