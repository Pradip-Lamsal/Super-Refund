"use client";

import { FeatureSteps } from "@/components/ui/feature-steps";

export default function HowItWorksSection() {
  const features = [
    {
      step: "Step 1",
      title: "Application to Us",
      content:
        "You send application to us. Your application will include fundamental information like: Name, Estimated Super, Which Super Company are you with.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
    },
    {
      step: "Step 2",
      title: "Application to ATO",
      content: "As your registered tax agent we lodge DASP request to the ATO",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    },
    {
      step: "Step 3",
      title: "Application to Superfund",
      content:
        "As your authorized representative we lodge the application on your behalf to superfund.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
    },
    {
      step: "Step 4",
      title: "ATO instructs Super-Fund",
      content:
        "ATO instructs your superfund to release the money to you based on your eligibility and application.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
    {
      step: "Step 5",
      title: "Money to your Account",
      content:
        "Superfund releases the money into your nominated bank account or issues you a cheque.",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />

      <div className="relative z-10">
        <FeatureSteps
          features={features}
          title="How it Works?"
          autoPlayInterval={4000}
        />
      </div>
    </section>
  );
}
