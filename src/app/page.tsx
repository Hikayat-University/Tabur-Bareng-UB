import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PremissSection from "@/components/sections/PremissSection";
import {
  StatsSection,
  EventSection,
  GallerySection,
  MembershipSection,
  FAQSection,
  CTASection,
  Footer,
} from "@/components/sections/OtherSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PremissSection />
      <StatsSection />
      <EventSection />
      <GallerySection />
      <MembershipSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
