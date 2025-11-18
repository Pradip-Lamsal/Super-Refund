import Navigation from "@/components/Navigation";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import SuperannuationSection from "@/components/sections/SuperannuationSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <div id="home">
          <HeroSection />
        </div>

        <HowItWorksSection />

        <SuperannuationSection />

        <div id="apply">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
