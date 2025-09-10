import HeroSection from "@/components/HeroSection";
import PrerequisitesSection from "@/components/PrerequisitesSection";
import TimelineSection from "@/components/TimelineSection";
import BestPracticesSection from "@/components/BestPracticesSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PrerequisitesSection />
      <TimelineSection />
      <BestPracticesSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
