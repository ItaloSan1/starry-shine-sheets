import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 pb-20 lg:pb-0">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-xl font-bold mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-bold text-sm hover:opacity-90 transition-opacity">Go Home</Link>
          <Link to="/search-inventory" className="border border-border px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-muted transition-colors">Search Inventory</Link>
        </div>
      </div>
    </div>
  );
}
