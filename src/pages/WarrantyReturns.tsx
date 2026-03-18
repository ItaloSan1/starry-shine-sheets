import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CallToAction } from '@/components/layout/CallToAction';
import { BUSINESS } from '@/lib/constants';
import { Shield, RotateCcw, AlertTriangle, Phone, ListChecks } from 'lucide-react';

export default function WarrantyReturns() {
  useEffect(() => { document.title = 'Warranty & Returns Policy | Eskimo Auto & Truck Parts Edmonton'; }, []);

  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-xl md:text-3xl font-bold text-primary-foreground">Warranty & Returns Policy</h1>
          <p className="text-primary-foreground/80 mt-2 text-sm md:text-base">We stand behind every part we sell.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Intro */}
        <div className="bg-accent/5 border border-accent/20 rounded-lg p-5 mb-8">
          <p className="text-sm text-foreground leading-relaxed">
            At Eskimo Auto & Truck Parts, every part we sell comes with a warranty. Warranty periods and terms vary by part category and are provided at the time of purchase. If you have questions about warranty coverage for a specific part, contact us before or after your purchase.
          </p>
          {/* TODO: Confirm specific warranty durations with the business */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* What's covered */}
          <div className="border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-6 h-6 text-success" />
              <h2 className="text-lg font-bold">What's Covered</h2>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-success font-bold">✓</span> Defects in the part as described at time of sale</li>
              <li className="flex items-start gap-2"><span className="text-success font-bold">✓</span> Parts that fail under normal use within the warranty period</li>
              <li className="flex items-start gap-2"><span className="text-success font-bold">✓</span> Replacement or refund at our discretion</li>
              <li className="flex items-start gap-2"><span className="text-success font-bold">✓</span> Warranty periods vary by part category — confirmed at purchase</li>
            </ul>
          </div>

          {/* What's not covered */}
          <div className="border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              <h2 className="text-lg font-bold">What's Not Covered</h2>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> Labour costs for installation or removal</li>
              <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> Parts modified or altered after purchase</li>
              <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> Damage from improper installation</li>
              <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> Racing, off-road, or commercial misuse</li>
              <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> Parts purchased without original receipt</li>
            </ul>
          </div>
        </div>

        {/* Return process */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <RotateCcw className="w-6 h-6 text-accent" />
            <h2 className="text-lg font-bold">Returns & Exchanges</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-sm mb-2">Unused Parts</h3>
              <p className="text-sm text-muted-foreground">May be returned with original receipt for a refund or exchange. Contact us for return details.</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-sm mb-2">Defective Parts</h3>
              <p className="text-sm text-muted-foreground">Covered under warranty will be replaced or refunded at our discretion.</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-sm mb-2">Core Charges</h3>
              <p className="text-sm text-muted-foreground">Some parts carry a core charge, refundable when you return the old part in acceptable condition.</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-bold text-sm mb-2">Shipping Returns</h3>
              <p className="text-sm text-muted-foreground">Return shipping is the buyer's responsibility unless the part was misdescribed.</p>
            </div>
          </div>
        </div>

        {/* Return steps */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <ListChecks className="w-6 h-6 text-accent" />
            <h2 className="text-lg font-bold">How to Start a Return</h2>
          </div>
          <ol className="space-y-3">
            {[
              'Call us at ' + BUSINESS.phone + ' or email ' + BUSINESS.email + ' with your receipt and stock number.',
              'Describe the issue with the part.',
              'We\'ll confirm warranty coverage and provide return instructions.',
              'Bring or ship the part back to our location at ' + BUSINESS.fullAddress + '.',
              'We\'ll inspect the part and process your replacement or refund.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                <span className="text-muted-foreground pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <p className="text-sm text-muted-foreground text-center border-t border-border pt-6">
          Questions about warranty or returns? Call us at{' '}
          <a href={`tel:${BUSINESS.phoneRaw}`} className="text-accent font-semibold hover:underline">{BUSINESS.phone}</a>.
          Specific warranty terms are provided at the time of purchase.
        </p>
      </div>
      <CallToAction title="Buy with Confidence" description="Every part backed by our warranty. Edmonton's trusted auto recycler since 1984." variant="primary" />
    </div>
  );
}
