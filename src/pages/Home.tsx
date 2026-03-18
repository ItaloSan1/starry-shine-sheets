import { useEffect } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { CategoryCards } from '@/components/home/CategoryCards';
import { LatestArrivals } from '@/components/home/LatestArrivals';
import { WhyEskimo } from '@/components/home/WhyEskimo';
import { SellVehicleCTA } from '@/components/home/SellVehicleCTA';
import { ShopsFleetSection } from '@/components/home/ShopsFleetSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { HomeFAQ } from '@/components/home/HomeFAQ';
import { CallToAction } from '@/components/layout/CallToAction';

export default function Home() {
  useEffect(() => { document.title = 'Eskimo Auto & Truck Parts | Used Auto Parts Edmonton | Since 1984'; }, []);

  return (
    <>
      <HeroSection />
      <TrustBar />
      <CategoryCards />
      <LatestArrivals />
      <WhyEskimo />
      <SellVehicleCTA />
      <ShopsFleetSection />
      <TestimonialsSection />
      <HomeFAQ />
      <CallToAction
        title="Need a Part? We're Here to Help."
        description="Call, text, or search our inventory. Edmonton's trusted auto recycler since 1984."
        linkTo="/search-inventory"
        linkLabel="Search Inventory"
      />
    </>
  );
}
