import Footer from "@/components/Footer";
import Navigation, { ApplyNowButton } from "@/components/Navigation";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import SuperannuationSection from "@/components/sections/SuperannuationSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ApplyNowButton />

      <main>
        <div id="home">
          <HeroSection />
        </div>

        <HowItWorksSection />

        <SuperannuationSection />

        <div id="apply">
          <ContactSection />
        </div>

        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
