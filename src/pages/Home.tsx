import { useSEO } from '@/hooks/useSEO';
import { FAQSchema } from '@/components/seo/SchemaMarkup';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { CategoryCards } from '@/components/home/CategoryCards';
import { LatestArrivals } from '@/components/home/LatestArrivals';
import { WhyEskimo } from '@/components/home/WhyEskimo';
import { ShopsFleetSection } from '@/components/home/ShopsFleetSection';
import { SellVehicleCTA } from '@/components/home/SellVehicleCTA';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { HomeFAQ, homeFaqData } from '@/components/home/HomeFAQ';
import { CallToAction } from '@/components/layout/CallToAction';

export default function Home() {
  useSEO({
    title: 'Eskimo Auto & Truck Parts | Used Auto Parts Edmonton | Since 1984',
    description: "Edmonton's trusted auto recycler since 1984. Quality used auto and truck parts — engines, transmissions, body parts, tires & rims. Warranty-backed. Call (780) 473-2424.",
  });

  return (
    <div className="pb-20 lg:pb-0">
      <HeroSection />
      <TrustBar />
      <CategoryCards />
      <LatestArrivals />
      <WhyEskimo />
      <ShopsFleetSection />
      <SellVehicleCTA />
      <TestimonialsSection />
      <HomeFAQ />
      <FAQSchema items={homeFaqData} />
      <CallToAction />
    </div>
  );
}
