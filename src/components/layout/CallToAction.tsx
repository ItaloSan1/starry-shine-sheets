import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
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
  const bg = variant === 'accent' ? 'bg-accent' : 'bg-primary';

  return (
    <section className={`${bg} text-primary-foreground py-10`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">{title}</h2>
        {description && <p className="text-primary-foreground/90 mb-5 text-sm md:text-base">{description}</p>}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {showPhone && (
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center gap-2 bg-primary-foreground text-primary px-6 py-2.5 rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              Call {BUSINESS.phone}
            </a>
          )}
          {linkTo && linkLabel && (
            <Link
              to={linkTo}
              className="bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground px-6 py-2.5 rounded-md font-bold text-sm hover:bg-primary-foreground/30 transition-colors"
            >
              {linkLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
