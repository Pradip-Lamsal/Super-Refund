"use client";

import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0095eb]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6dd400]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-white">
            <div className="relative h-[180px] md:h-[200px]">
              {/* Particles Background */}
              <Particles
                className="absolute inset-0"
                quantity={120}
                ease={80}
                color="#0095eb"
                refresh
              />

              {/* Overlay content */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-8 md:px-12">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
                    <div className="relative z-10">
                      <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
                      >
                        Quick & Easy Refund
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-sm md:text-base text-gray-600"
                      >
                        Get your super refund processed in just a few simple
                        steps
                      </motion.p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="shrink-0 relative z-10"
                    >
                      <Button
                        size="lg"
                        variant="accent"
                        className="text-lg px-10 whitespace-nowrap"
                      >
                        Apply Now
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
