import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

interface CallToActionProps {
  title: string;
  description?: string;
  linkTo?: string;
  linkLabel?: string;
  showPhone?: boolean;
  variant?: 'accent' | 'primary';
}

const PHONE = '780-555-0199';

export function CallToAction({ title, description, linkTo, linkLabel, showPhone = true, variant = 'accent' }: CallToActionProps) {
  const bg = variant === 'accent' ? 'bg-accent' : 'bg-primary';
  const text = 'text-primary-foreground';

  return (
    <section className={`${bg} ${text} py-12`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">{title}</h2>
        {description && <p className="text-primary-foreground/90 mb-6 text-lg">{description}</p>}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {showPhone && (
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              Call {PHONE}
            </a>
          )}
          {linkTo && linkLabel && (
            <Link
              to={linkTo}
              className="bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-md font-bold text-sm hover:bg-primary-foreground/30 transition-colors"
            >
              {linkLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
