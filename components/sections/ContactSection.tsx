"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0095eb]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6dd400]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-20"
        >
          <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            {/* Decorative circles */}
            <div className="absolute top-20 right-10 w-24 h-24 bg-[#6dd400] rounded-full opacity-60 blur-sm" />
            <div className="absolute top-40 right-32 w-16 h-16 bg-[#6dd400] rounded-full opacity-40" />
            <div className="absolute bottom-20 left-10 w-20 h-20 bg-[#6dd400]/20 rounded-full" />
            <div className="absolute bottom-32 left-32 w-12 h-12 bg-[#6dd400]/30 rounded-full" />

            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=600&fit=crop"
                alt="Quick and easy refund"
                fill
                className="object-cover"
              />

              {/* Overlay content */}
              <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent flex items-center">
                <div className="container mx-auto px-8">
                  <div className="max-w-xl space-y-6">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="text-5xl md:text-6xl font-bold text-white"
                    >
                      Quick & easy
                      <br />
                      Refund
                    </motion.h2>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <Button
                        size="xl"
                        variant="accent"
                        className="text-xl px-12"
                      >
                        Apply now
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8 text-center"
        >
          <div className="space-y-6">
            <motion.a
              href="tel:+61024601988"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 text-3xl md:text-4xl font-bold text-[#0f6f3a] hover:text-[#0095eb] transition-colors"
            >
              <Phone className="w-10 h-10" />
              +61 (02) 4601 1988
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-3 text-xl text-gray-700"
            >
              <MapPin className="w-6 h-6 text-[#0095eb]" />
              <span>Suite Q1291 LG 44 MARKET STREET Sydney, NSW</span>
            </motion.div>

            <motion.a
              href="mailto:info@ebta.com.au"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-3 text-xl text-[#0095eb] hover:text-[#0077be] transition-colors"
            >
              <Mail className="w-6 h-6" />
              info@ebta.com.au
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-20 pt-8 border-t border-gray-200 relative z-10"
      >
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">
            © 2021 Refund My Super. All Rights Reserved. Alpas Technology
          </p>
        </div>
      </motion.footer>
    </section>
  );
}
