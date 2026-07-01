import HeroSection from "@/feature/home/components/HeroSection";
import WhatWeDo from "@/feature/home/components/WhatWeDo";
import FeaturedProjects from "@/feature/home/components/FeaturedProjects";
import OurProcess from "@/feature/home/components/OurProcess";
import InsightsSection from "@/feature/home/components/InsightsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <WhatWeDo />
      <FeaturedProjects />
      <OurProcess />
      <InsightsSection />
    </div>
  );
}