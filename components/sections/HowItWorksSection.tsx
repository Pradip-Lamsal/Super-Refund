"use client";

import {
  RulerCarousel,
  type CarouselItem,
} from "@/components/ui/ruler-carousel";
import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  ClipboardCheck,
  DollarSign,
  FileText,
  Send,
} from "lucide-react";

export default function HowItWorksSection() {
  const carouselSteps: CarouselItem[] = [
    {
      id: 1,
      title: "Application to Us",
      description:
        "You send application to us. Your application will include fundamental information like: Name, Estimated Super, Which Super Company are you with.",
      icon: <FileText className="w-10 h-10 text-gray-900" />,
    },
    {
      id: 2,
      title: "Application to ATO",
      description:
        "As your registered tax agent we lodge DASP request to the ATO",
      icon: <ArrowLeftRight className="w-10 h-10 text-gray-900" />,
    },
    {
      id: 3,
      title: "Application to Superfund",
      description:
        "As your authorized representative we lodge the application on your behalf to superfund.",
      icon: <ClipboardCheck className="w-10 h-10 text-gray-900" />,
    },
    {
      id: 4,
      title: "ATO instructs Super-Fund",
      description:
        "ATO instructs your superfund to release the money to you based on your eligibility and application.",
      icon: <Send className="w-10 h-10 text-gray-900" />,
    },
    {
      id: 5,
      title: "Money to your Account",
      description:
        "Superfund releases the money into your nominated bank account or issues you a cheque.",
      icon: <DollarSign className="w-10 h-10 text-gray-900" />,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f6f3a] mb-4">
            How it Works?
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            Navigate through the steps using arrow keys or buttons
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <RulerCarousel originalItems={carouselSteps} />
        </motion.div>
      </div>
    </section>
  );
}
