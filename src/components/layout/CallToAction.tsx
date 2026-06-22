import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { BUSINESS } from '@/lib/constants';

interface CallToActionProps {
  title: string;
  description?: string;
  linkTo?: string;
  linkLabel?: string;
  showPhone?: boolean;
  variant?: 'accent' | 'primary';
}

export function CallToAction({ title, description, linkTo, linkLabel, showPhone = true }: CallToActionProps) {
  return (
    <section className="relative py-20 overflow-hidden gradient-mesh">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl mb-3">{title}</h2>
          {description && <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed max-w-xl mx-auto">{description}</p>}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {showPhone && (
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-xl font-semibold text-sm hover:shadow-glow transition-all"
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS.phone}
              </a>
            )}
            {linkTo && linkLabel && (
              <Link
                to={linkTo}
                className="glass text-foreground px-7 py-3.5 rounded-xl font-semibold text-sm hover:border-accent/30 transition-all"
              >
                {linkLabel}
              </Link>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
