import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { TireEntryForm } from '@/components/tires/TireEntryForm';

export default function AddTire() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 bg-card border-b border-border px-4 py-3 flex items-center gap-3">
        <Link to="/staff/tires" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-bold text-lg">Add Tire</h1>
      </header>
      <div className="max-w-lg mx-auto p-4">
        <TireEntryForm onSuccess={() => navigate('/staff/tires')} />
      </div>
    </div>
  );
}
