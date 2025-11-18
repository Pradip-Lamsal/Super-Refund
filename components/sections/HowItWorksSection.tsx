"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  ClipboardCheck,
  DollarSign,
  FileText,
  Send,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Step 1: Application to Us",
    description:
      "You send application to us. Your application will include fundamental information like: Name, Estimated Super, Which Super Company are you with.",
    color: "#0095eb",
  },
  {
    icon: ArrowLeftRight,
    title: "Step 2: Application to ATO",
    description:
      "As your registered tax agent we lodge DASP request to the ATO",
    color: "#0095eb",
  },
  {
    icon: ClipboardCheck,
    title: "Step 3: Application to Superfund",
    description:
      "As your authorized representative we lodge the application on your behalf to superfund.",
    color: "#0095eb",
  },
  {
    icon: Send,
    title: "Step 4: ATO instructs Super-Fund",
    description:
      "ATO instructs your superfund to release the money to you based on your eligibility and application.",
    color: "#0095eb",
  },
  {
    icon: DollarSign,
    title: "Step 5: Money to your Account",
    description:
      "Superfund releases the money into your nominated bank account or issues you a cheque.",
    color: "#6dd400",
  },
];

export default function HowItWorksSection() {
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
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="h-full border-2 hover:border-[#0095eb]/30 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8 text-center space-y-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-[#0095eb]/10 to-[#0095eb]/5 mx-auto"
                    >
                      <Icon
                        className="w-10 h-10"
                        style={{ color: step.color }}
                      />
                    </motion.div>

                    <h3 className="text-xl font-bold text-[#0f6f3a]">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowLeftRight className="w-8 h-8 text-[#0095eb]/30" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
