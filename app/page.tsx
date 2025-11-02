import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { MethodSection } from "@/components/sections/method-section";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ScrollHandler } from "@/components/utils/scroll-handler";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <ScrollHandler />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <MethodSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
