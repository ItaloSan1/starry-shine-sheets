import { Link } from 'react-router-dom';
import { Phone, Shield, Building2, Recycle, Search, ArrowRight, Truck, Droplets, Cog } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { PartRequestForm } from '@/components/forms/PartRequestForm';
import { CallToAction } from '@/components/layout/CallToAction';
import { ScrollReveal, StaggerChildren, staggerItem } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import { BUSINESS } from '@/lib/constants';
import recyclerYard from '@/assets/recycler-yard.jpg';

const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Auto Recycler Edmonton' }];

const processSteps = [
  { icon: Truck, title: 'Vehicle Acquisition', desc: 'We buy cars, trucks, and SUVs in any condition. Running or not — we make fair offers.' },
  { icon: Droplets, title: 'Fluid & Hazmat Removal', desc: 'All fluids are safely drained and disposed of. Hazardous materials are handled per regulations.' },
  { icon: Cog, title: 'Careful Dismantling', desc: 'Vehicles are methodically dismantled. Each part is inspected, graded, and catalogued.' },
  { icon: Shield, title: 'Quality Testing', desc: 'Parts are tested and assigned condition grades. Only quality parts make it to inventory.' },
  { icon: Recycle, title: 'Responsible Recycling', desc: 'Remaining materials — metals, plastics, glass — are recycled through certified channels.' },
];

export default function AutoRecycler() {
  useSEO({
    title: 'Auto Recycler Edmonton | Eskimo Auto & Truck Parts',
    description: `Edmonton's trusted auto recycler since ${BUSINESS.established}. We buy vehicles, recycle responsibly, and sell quality used parts. Call ${BUSINESS.phone}.`,
  });

  return (
    <div className="pb-20 lg:pb-0">
      <section className="relative bg-primary text-primary-foreground py-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src={recyclerYard} alt="Eskimo Auto recycler yard Edmonton" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-3">Auto Recycler in Edmonton</h1>
          <p className="text-primary-foreground/70 max-w-2xl leading-relaxed">Edmonton's trusted auto recycler since {BUSINESS.established}. We buy vehicles, recycle responsibly, and sell quality used parts.</p>
        </div>
      </section>

      <section className="bg-card border-b border-border py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap gap-6 text-sm">
          <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-accent" /> Since {BUSINESS.established}</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-accent" /> Warranty-Backed Parts</span>
          <span className="flex items-center gap-1.5"><Recycle className="w-4 h-4 text-accent" /> Responsible Recycling</span>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />
        <BreadcrumbSchema items={breadcrumbs} />

        <ScrollReveal>
          <div className="prose prose-sm max-w-none mb-10">
            <h2 className="text-xl font-extrabold mb-3">Full-Service Auto Recycling</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Eskimo Auto & Truck Parts is a full-service auto recycling facility in Edmonton. We purchase end-of-life vehicles, carefully dismantle them, and make quality used parts available to the public, repair shops, and fleet operators.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Our recycling process follows environmental best practices — fluids are drained and disposed of properly, hazardous materials are handled according to regulations, and recyclable metals are processed responsibly.</p>
          </div>
        </ScrollReveal>

        {/* Process Timeline */}
        <ScrollReveal>
          <h2 className="text-xl font-extrabold mb-8 text-center">How We Process Vehicles</h2>
        </ScrollReveal>
        <StaggerChildren className="relative" staggerDelay={0.12}>
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className={`relative flex items-start gap-4 md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <h3 className="font-bold text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                <div className="relative z-10 w-10 h-10 rounded-xl bg-accent/10 border-2 border-accent flex items-center justify-center shrink-0">
                  <step.icon className="w-4.5 h-4.5 text-accent" />
                </div>
                <div className="md:w-1/2 md:hidden">
                  <h3 className="font-bold text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`} />
              </motion.div>
            ))}
          </div>
        </StaggerChildren>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 mb-10">
            <h2 className="text-lg font-extrabold mb-3">Want to sell your vehicle?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We buy cars, trucks, and SUVs in any condition — running or not. <Link to="/sell-your-vehicle" className="text-accent font-bold hover:underline">Get a quote →</Link></p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-muted/50 border border-border rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div><p className="font-bold text-sm">Looking for used parts?</p><p className="text-xs text-muted-foreground">Search our inventory or request the part you need.</p></div>
            <div className="flex gap-2 shrink-0">
              <Link to="/search-inventory" className="flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-2.5 rounded-lg text-sm font-bold hover:brightness-110 transition-all"><Search className="w-3.5 h-3.5" /> Search Parts</Link>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-1.5 border border-border px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-colors"><Phone className="w-3.5 h-3.5" /> Call</a>
            </div>
          </div>
        </ScrollReveal>

        <PartRequestForm />
      </div>
      <CallToAction title="Edmonton's Trusted Auto Recycler" description={`Serving Edmonton since ${BUSINESS.established}. Call ${BUSINESS.phone}.`} linkTo="/sell-your-vehicle" linkLabel="Sell Your Vehicle" />
    </div>
  );
}
