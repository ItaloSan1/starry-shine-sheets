import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Toaster } from '@/components/ui/sonner';
import Home from './pages/Home';
import SearchInventory from './pages/SearchInventory';
import PartDetailPage from './pages/PartDetailPage';
import LatestArrivals from './pages/LatestArrivals';
import VehicleDetailPage from './pages/VehicleDetailPage';
import SellYourVehicle from './pages/SellYourVehicle';
import RequestPart from './pages/RequestPart';
import UsedAutoParts from './pages/UsedAutoParts';
import UsedTruckParts from './pages/UsedTruckParts';
import UsedEngines from './pages/UsedEngines';
import UsedTransmissions from './pages/UsedTransmissions';
import UsedBodyParts from './pages/UsedBodyParts';
import UsedTiresRims from './pages/UsedTiresRims';
import AutoRecycler from './pages/AutoRecycler';
import WarrantyReturns from './pages/WarrantyReturns';
import DeliveryPartsSourcing from './pages/DeliveryPartsSourcing';
import ForShopsFleet from './pages/ForShopsFleet';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search-inventory" element={<SearchInventory />} />
          <Route path="/search-inventory/:id" element={<PartDetailPage />} />
          <Route path="/latest-arrivals" element={<LatestArrivals />} />
          <Route path="/latest-arrivals/:id" element={<VehicleDetailPage />} />
          <Route path="/sell-your-vehicle" element={<SellYourVehicle />} />
          <Route path="/request-a-part" element={<RequestPart />} />
          <Route path="/used-auto-parts-edmonton" element={<UsedAutoParts />} />
          <Route path="/used-truck-parts-edmonton" element={<UsedTruckParts />} />
          <Route path="/used-engines-edmonton" element={<UsedEngines />} />
          <Route path="/used-transmissions-edmonton" element={<UsedTransmissions />} />
          <Route path="/used-body-parts-edmonton" element={<UsedBodyParts />} />
          <Route path="/used-tires-rims-edmonton" element={<UsedTiresRims />} />
          <Route path="/auto-recycler-edmonton" element={<AutoRecycler />} />
          <Route path="/warranty-returns" element={<WarrantyReturns />} />
          <Route path="/delivery-parts-sourcing" element={<DeliveryPartsSourcing />} />
          <Route path="/for-shops-fleet" element={<ForShopsFleet />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
