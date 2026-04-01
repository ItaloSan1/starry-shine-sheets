import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Shield, Building2, Search } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { PartRequestForm } from '@/components/forms/PartRequestForm';
import { CallToAction } from '@/components/layout/CallToAction';
import { BUSINESS } from '@/lib/constants';
import { usePublicTires, TireRecord } from '@/hooks/useTireInventory';
import { TireCard } from '@/components/tires/TireCard';
import { TireFilters } from '@/components/tires/TireFilters';
import { TireDetailModal } from '@/components/tires/TireDetailModal';

const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Used Tires & Rims Edmonton' }];

export default function UsedTiresRims() {
  const [brand, setBrand] = useState('all');
  const [season, setSeason] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedTire, setSelectedTire] = useState<TireRecord | null>(null);

  const { data: tires, isLoading } = usePublicTires({
    brand: brand !== 'all' ? brand : undefined,
    season: season !== 'all' ? season : undefined,
  });

  useSEO({
    title: 'Used Tires & Rims Edmonton | Eskimo Auto & Truck Parts',
    description: `Used tires and rims for cars and trucks in Edmonton. OEM wheels, alloy rims, steel wheels. Since ${BUSINESS.established}. Call ${BUSINESS.phone}.`,
  });

  const filtered = tires?.filter(t => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      (t.full_size ?? '').toLowerCase().includes(q) ||
      t.brand.toLowerCase().includes(q) ||
      (t.model ?? '').toLowerCase().includes(q) ||
      t.stock_number.toLowerCase().includes(q)
    );
  }) ?? [];

  return (
    <div className="pb-20 lg:pb-0">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Used Tires & Rims in Edmonton</h1>
          <p className="text-primary-foreground/70 max-w-2xl">Quality used tires, OEM wheels, alloy rims, and steel wheels at recycler prices.</p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap gap-6 text-sm">
          <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-accent" /> Since {BUSINESS.established}</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-accent" /> Quality Checked</span>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <Breadcrumbs items={breadcrumbs} />
        <BreadcrumbSchema items={breadcrumbs} />

        {/* Filters */}
        <div className="mb-6">
          <TireFilters
            brand={brand}
            season={season}
            search={search}
            onBrandChange={setBrand}
            onSeasonChange={setSeason}
            onSearchChange={setSearch}
          />
        </div>

        {/* Tire Grid */}
        {isLoading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-3 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length > 0 ? (
          <>
            <p className="text-sm text-muted-foreground mb-4">{filtered.length} tire{filtered.length !== 1 ? 's' : ''} available</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
              {filtered.map(t => (
                <TireCard key={t.id} tire={t} onClick={() => setSelectedTire(t)} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 mb-10">
            <p className="text-muted-foreground mb-2">No tires match your search.</p>
            <p className="text-sm text-muted-foreground">Call us — we may have what you need in stock.</p>
            <div className="flex justify-center gap-2 mt-4">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-bold hover:opacity-90 transition-opacity">
                <Phone className="w-3.5 h-3.5" /> Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        )}

        {/* CTA Banner */}
        <div className="bg-muted/50 border border-border rounded-lg p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-sm">Can't find your size?</p>
            <p className="text-xs text-muted-foreground">Call us with your tire size or bolt pattern.</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <Link to="/search-inventory?category=tires-rims" className="flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-bold hover:opacity-90 transition-opacity">
              <Search className="w-3.5 h-3.5" /> Search All
            </Link>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-1.5 border border-border px-4 py-2 rounded-md text-sm font-semibold hover:bg-muted transition-colors">
              <Phone className="w-3.5 h-3.5" /> Call
            </a>
          </div>
        </div>

        <PartRequestForm />
      </div>

      <CallToAction title="Need Tires or Rims?" description={`Call or text ${BUSINESS.phone}. Since ${BUSINESS.established}.`} linkTo="/request-a-part" linkLabel="Request a Part" />

      {/* Detail Modal */}
      <TireDetailModal tire={selectedTire} open={!!selectedTire} onClose={() => setSelectedTire(null)} />
    </div>
  );
}
