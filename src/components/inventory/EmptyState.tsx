import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EmptyStateProps {
  title?: string;
  message?: string;
}

export function EmptyState({ title = 'No Parts Found', message = 'Try adjusting your filters or search terms.' }: EmptyStateProps) {
  return (
    <div className="text-center py-16">
      <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-6">{message}</p>
      <p className="text-sm text-muted-foreground">
        Can't find what you need?{' '}
        <a href="tel:780-555-0199" className="text-accent font-semibold hover:underline">Call us at 780-555-0199</a>
        {' '}— we can source parts from our network.
      </p>
    </div>
  );
}
