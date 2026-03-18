import { CallToAction } from '@/components/layout/CallToAction';
import { Shield, RotateCcw } from 'lucide-react';

export default function WarrantyReturns() {
  return (
    <div className="pb-20 lg:pb-0">
      <div className="bg-primary text-primary-foreground py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">Warranty & Returns Policy</h1>
          <p className="text-primary-foreground/80 mt-2 text-lg">We stand behind the parts we sell. Every purchase is backed by our warranty.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="border border-border rounded-lg p-6">
            <Shield className="w-8 h-8 text-accent mb-3" />
            <h2 className="text-xl font-bold mb-3">Our Warranty</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Engines & Transmissions:</strong> Up to 90-day warranty from date of purchase.</li>
              <li><strong className="text-foreground">Electrical Components:</strong> 60-day warranty.</li>
              <li><strong className="text-foreground">Body Parts:</strong> 30-day warranty on condition as described.</li>
              <li><strong className="text-foreground">Tires & Wheels:</strong> Sold as-inspected. Tread depth noted at time of sale.</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4">Warranty covers defects in the part as described at the time of sale. Labour costs are not included. Warranty is void if the part has been modified, improperly installed, or used in racing/off-road applications.</p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <RotateCcw className="w-8 h-8 text-accent mb-3" />
            <h2 className="text-xl font-bold mb-3">Returns</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Unused parts</strong> may be returned within 14 days with original receipt for a full refund or exchange.</li>
              <li><strong className="text-foreground">Defective parts</strong> covered under warranty will be replaced or refunded at our discretion.</li>
              <li><strong className="text-foreground">Core charges</strong> may apply to certain components and are refundable upon return of the old part.</li>
              <li><strong className="text-foreground">Shipping costs</strong> for returns are the buyer's responsibility unless the part was misdescribed.</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center">Questions about our warranty or a return? Call us at <a href="tel:780-555-0199" className="text-accent font-semibold hover:underline">780-555-0199</a>.</p>
      </div>
      <CallToAction title="Buy with Confidence" description="Every part backed by our warranty. Edmonton's trusted auto recycler." variant="primary" />
    </div>
  );
}
