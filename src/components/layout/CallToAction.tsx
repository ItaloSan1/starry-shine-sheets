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

export function CallToAction({ title, description, linkTo, linkLabel, showPhone = true, variant = 'accent' }: CallToActionProps) {
  const bg = variant === 'accent'
    ? 'bg-gradient-to-br from-accent via-accent to-accent/90'
    : 'bg-gradient-to-br from-primary via-primary to-primary/90';

  return (
    <section className={`${bg} text-primary-foreground py-14`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-3">{title}</h2>
          {description && <p className="text-primary-foreground/85 mb-6 text-sm md:text-base leading-relaxed">{description}</p>}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {showPhone && (
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS.phone}
              </a>
            )}
            {linkTo && linkLabel && (
              <Link
                to={linkTo}
                className="bg-primary-foreground/15 border border-primary-foreground/25 text-primary-foreground px-6 py-3 rounded-lg font-bold text-sm hover:bg-primary-foreground/25 transition-colors"
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
