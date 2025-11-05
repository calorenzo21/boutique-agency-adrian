import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { MethodSection } from "@/components/sections/method-section";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ScrollHandler } from "@/components/utils/scroll-handler";
import { StructuredData } from "@/components/seo/structured-data";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-white font-inter">
        <Suspense fallback={null}>
          <ScrollHandler />
        </Suspense>
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
    </>
  );
}
