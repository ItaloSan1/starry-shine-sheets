import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Toaster } from '@/components/ui/sonner';
import Home from './pages/Home';

// Lazy-load non-critical pages
const SearchInventory = lazy(() => import('./pages/SearchInventory'));
const PartDetailPage = lazy(() => import('./pages/PartDetailPage'));
const LatestArrivals = lazy(() => import('./pages/LatestArrivals'));
const VehicleDetailPage = lazy(() => import('./pages/VehicleDetailPage'));
const SellYourVehicle = lazy(() => import('./pages/SellYourVehicle'));
const RequestPart = lazy(() => import('./pages/RequestPart'));
const UsedAutoParts = lazy(() => import('./pages/UsedAutoParts'));
const UsedTruckParts = lazy(() => import('./pages/UsedTruckParts'));
const UsedEngines = lazy(() => import('./pages/UsedEngines'));
const UsedTransmissions = lazy(() => import('./pages/UsedTransmissions'));
const UsedBodyParts = lazy(() => import('./pages/UsedBodyParts'));
const UsedTiresRims = lazy(() => import('./pages/UsedTiresRims'));
const AutoRecycler = lazy(() => import('./pages/AutoRecycler'));
const WarrantyReturns = lazy(() => import('./pages/WarrantyReturns'));
const DeliveryPartsSourcing = lazy(() => import('./pages/DeliveryPartsSourcing'));
const ForShopsFleet = lazy(() => import('./pages/ForShopsFleet'));
const About = lazy(() => import('./pages/About'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const RemanufacturedEngines = lazy(() => import('./pages/RemanufacturedEngines'));
const RemanufacturedEnginesATK = lazy(() => import('./pages/RemanufacturedEnginesATK'));
const RemanufacturedEngineDetail = lazy(() => import('./pages/RemanufacturedEngineDetail'));
const CylinderHeads = lazy(() => import('./pages/CylinderHeads'));
const CylinderHeadsATK = lazy(() => import('./pages/CylinderHeadsATK'));
const CylinderHeadDetail = lazy(() => import('./pages/CylinderHeadDetail'));
const VinDecoder = lazy(() => import('./pages/VinDecoder'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-8 h-8 border-3 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search-inventory" element={<Suspense fallback={<PageLoader />}><SearchInventory /></Suspense>} />
          <Route path="/search-inventory/:id" element={<Suspense fallback={<PageLoader />}><PartDetailPage /></Suspense>} />
          <Route path="/latest-arrivals" element={<Suspense fallback={<PageLoader />}><LatestArrivals /></Suspense>} />
          <Route path="/latest-arrivals/:id" element={<Suspense fallback={<PageLoader />}><VehicleDetailPage /></Suspense>} />
          <Route path="/sell-your-vehicle" element={<Suspense fallback={<PageLoader />}><SellYourVehicle /></Suspense>} />
          <Route path="/request-a-part" element={<Suspense fallback={<PageLoader />}><RequestPart /></Suspense>} />
          <Route path="/used-auto-parts-edmonton" element={<Suspense fallback={<PageLoader />}><UsedAutoParts /></Suspense>} />
          <Route path="/used-truck-parts-edmonton" element={<Suspense fallback={<PageLoader />}><UsedTruckParts /></Suspense>} />
          <Route path="/used-engines-edmonton" element={<Suspense fallback={<PageLoader />}><UsedEngines /></Suspense>} />
          <Route path="/used-transmissions-edmonton" element={<Suspense fallback={<PageLoader />}><UsedTransmissions /></Suspense>} />
          <Route path="/used-body-parts-edmonton" element={<Suspense fallback={<PageLoader />}><UsedBodyParts /></Suspense>} />
          <Route path="/used-tires-rims-edmonton" element={<Suspense fallback={<PageLoader />}><UsedTiresRims /></Suspense>} />
          <Route path="/auto-recycler-edmonton" element={<Suspense fallback={<PageLoader />}><AutoRecycler /></Suspense>} />
          <Route path="/warranty-returns" element={<Suspense fallback={<PageLoader />}><WarrantyReturns /></Suspense>} />
          <Route path="/delivery-parts-sourcing" element={<Suspense fallback={<PageLoader />}><DeliveryPartsSourcing /></Suspense>} />
          <Route path="/for-shops-fleet" element={<Suspense fallback={<PageLoader />}><ForShopsFleet /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
          <Route path="/faq" element={<Suspense fallback={<PageLoader />}><FAQ /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
          <Route path="/remanufactured-engines" element={<Suspense fallback={<PageLoader />}><RemanufacturedEngines /></Suspense>} />
          <Route path="/remanufactured-engines/atk" element={<Suspense fallback={<PageLoader />}><RemanufacturedEnginesATK /></Suspense>} />
          <Route path="/remanufactured-engines/atk/:slug" element={<Suspense fallback={<PageLoader />}><RemanufacturedEngineDetail /></Suspense>} />
          <Route path="/remanufactured-cylinder-heads" element={<Suspense fallback={<PageLoader />}><CylinderHeads /></Suspense>} />
          <Route path="/remanufactured-cylinder-heads/atk" element={<Suspense fallback={<PageLoader />}><CylinderHeadsATK /></Suspense>} />
          <Route path="/remanufactured-cylinder-heads/atk/:slug" element={<Suspense fallback={<PageLoader />}><CylinderHeadDetail /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}