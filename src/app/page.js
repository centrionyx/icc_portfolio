import HeroSection from "@/feature/home/components/HeroSection";
import StatsBanner from "@/feature/home/components/StatsBanner";
import OurStory from "@/feature/home/components/OurStory";
import WhatWeDo from "@/feature/home/components/WhatWeDo";
import FeaturedProjects from "@/feature/home/components/FeaturedProjects";
import OurProcess from "@/feature/home/components/OurProcess";
import HomeNewsletterBanner from "@/feature/home/components/HomeNewsletterBanner";
import InsightsSection from "@/feature/home/components/InsightsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <StatsBanner />
      <OurStory />
      {/* <WhatWeDo /> */}
      <FeaturedProjects />
      <OurProcess />
      <InsightsSection />
      <HomeNewsletterBanner />
    </div>
  );
}