"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

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
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-[200px] md:h-[250px]">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=300&fit=crop"
                alt="Quick and easy refund"
                fill
                className="object-cover"
              />

              {/* Overlay content */}
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent flex items-center">
                <div className="container mx-auto px-8 md:px-12">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                    >
                      Quick & Easy Refund
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="shrink-0"
                    >
                      <Button
                        size="xl"
                        variant="accent"
                        className="text-xl px-12 whitespace-nowrap"
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
