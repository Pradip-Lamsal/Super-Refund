"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { DollarSign, Sparkles, TrendingUp, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import HeroHeader from "./HeroHeader";

// Static particles array - same values for server and client
const particles = [
  { left: 21.54, top: 42.74, duration: 5.2, delay: 0.8 },
  { left: 47.28, top: 28.45, duration: 6.1, delay: 1.3 },
  { left: 42.05, top: 77.35, duration: 4.8, delay: 0.5 },
  { left: 75.15, top: 78.42, duration: 5.9, delay: 1.7 },
  { left: 9.69, top: 73.16, duration: 4.3, delay: 0.2 },
  { left: 19.91, top: 36.23, duration: 6.5, delay: 1.1 },
  { left: 15.33, top: 81.9, duration: 5.5, delay: 0.9 },
  { left: 61.2, top: 0.02, duration: 4.7, delay: 1.5 },
  { left: 42.88, top: 86.8, duration: 6.3, delay: 0.4 },
  { left: 87.3, top: 49.27, duration: 5.1, delay: 1.8 },
  { left: 47.49, top: 16.18, duration: 4.9, delay: 0.6 },
  { left: 77.03, top: 73.79, duration: 6.7, delay: 1.2 },
  { left: 22.28, top: 37.28, duration: 5.4, delay: 0.3 },
  { left: 54.33, top: 21.7, duration: 4.6, delay: 1.4 },
  { left: 58.41, top: 45.64, duration: 5.8, delay: 0.7 },
];

export default function HeroSection() {
  const [balance, setBalance] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, amount: 0.2 });

  // Calculate refund directly from balance, no need for separate state
  const numBalance = parseFloat(balance.replace(/,/g, "")) || 0;
  const refund = numBalance * 0.15;

  const formatCurrency = (value: string) => {
    const num = value.replace(/[^\d]/g, "");
    if (!num) return "";
    return parseFloat(num).toLocaleString();
  };

  const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);
    setBalance(formatted);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-green-50"
        animate={{
          background: [
            "linear-gradient(135deg, rgb(239 246 255) 0%, rgb(255 255 255) 50%, rgb(240 253 244) 100%)",
            "linear-gradient(135deg, rgb(240 253 244) 0%, rgb(255 255 255) 50%, rgb(239 246 255) 100%)",
            "linear-gradient(135deg, rgb(239 246 255) 0%, rgb(255 255 255) 50%, rgb(240 253 244) 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30" />

      {/* Floating animated orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-[#0095eb]/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#6dd400]/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#0095eb]/5 rounded-full blur-3xl"
        animate={{
          x: [-100, 100, -100],
          y: [-100, 100, -100],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#0095eb]/20 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-32 relative z-10 max-w-7xl">
        {/* Main Headline - Top Center */}
        <HeroHeader />

        {/* Hero Content - Main CTA */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isContentInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
          >
            RefundMySuper is an Australian owned CPA registered public practice
            with over 5 years of experience helping Australians claim their
            super refunds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => setIsCalculatorOpen(true)}
                className="text-xl font-bold shadow-2xl relative overflow-hidden group/btn h-16 px-10 rounded-xl"
                variant="accent"
              >
                <motion.span
                  className="absolute inset-0 bg-white/30"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <DollarSign className="w-6 h-6" />
                  Calculate My Refund
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl"
                  >
                    →
                  </motion.span>
                </span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="text-xl font-bold h-16 px-10 rounded-xl border-2 hover:bg-[#0095eb] hover:text-white hover:border-[#0095eb] transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">CPA Registered</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-2xl">🔒</span>
              <span className="font-semibold">Secure & Confidential</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Content - Image and Description Side by Side */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative group"
          >
            <motion.div
              className="absolute -inset-6 bg-linear-to-r from-[#0095eb]/20 to-[#6dd400]/20 rounded-3xl blur-2xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop"
                alt="Australian dollar notes"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl relative z-10 w-full"
                priority
              />
              <motion.div className="absolute inset-0 bg-linear-to-br from-[#0095eb]/0 to-[#6dd400]/0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative space-y-6"
          >
            <motion.div
              className="absolute -left-6 top-0 w-1 h-full bg-linear-to-b from-[#0095eb] via-[#6dd400] to-[#0095eb]"
              initial={{ height: 0 }}
              animate={isContentInView ? { height: "100%" } : {}}
              transition={{ delay: 1.2, duration: 1 }}
            />
            <div className="pl-6">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Trusted By Thousands
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                RefundMySuper is an Australian owned CPA registered public
                practice. We have been in the industry for over 5 years and our
                experienced professionals have a combined experience of over 15
                years in Australian Tax and Super environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-[#0095eb]/10 rounded-full"
                >
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold text-gray-700">
                    CPA Registered
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-[#6dd400]/10 rounded-full"
                >
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold text-gray-700">
                    5+ Years Experience
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Calculator Popup Modal */}
      <AnimatePresence>
        {isCalculatorOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCalculatorOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-full max-w-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <Card className="relative w-full p-10 shadow-2xl bg-white/95 backdrop-blur-sm border-2 border-gray-100 overflow-hidden group hover:shadow-[0_30px_80px_-20px_rgba(0,149,235,0.4)] transition-all duration-500">
                  {/* Animated gradient border effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#0095eb]/10 via-transparent to-[#6dd400]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Sparkle effect */}
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-6 h-6 text-[#6dd400]" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="space-y-6 relative z-10"
                  >
                    {/* Header */}
                    <div className="text-center space-y-3 pb-6 mb-6 border-b-2 border-linear-to-r from-[#0095eb]/20 via-[#6dd400]/20 to-[#0095eb]/20">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.6,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-[#0095eb] to-[#0077be] shadow-lg"
                      >
                        <DollarSign className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-gray-800">
                        Calculate Your Refund
                      </h3>
                      <p className="text-base text-gray-600">
                        Get an instant estimate in seconds
                      </p>
                    </div>

                    <div className="space-y-3">
                      <label
                        htmlFor="balance"
                        className="flex items-center gap-2 text-base font-bold text-gray-700"
                      >
                        <TrendingUp className="w-5 h-5 text-[#0095eb]" />
                        Your Estimated Super Balance
                      </label>
                      <motion.div
                        animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="relative">
                          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-2xl">
                            $
                          </span>
                          <Input
                            id="balance"
                            type="text"
                            placeholder="0"
                            value={balance}
                            onChange={handleBalanceChange}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className="text-2xl pl-12 h-16 border-2 focus:border-[#0095eb] focus:ring-4 focus:ring-[#0095eb]/10 transition-all rounded-xl"
                          />
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      animate={numBalance > 0 ? { scale: [1, 1.03, 1] } : {}}
                      transition={{ duration: 0.5 }}
                      className="space-y-3"
                    >
                      <label
                        htmlFor="refund"
                        className="flex items-center gap-2 text-base font-bold text-gray-700"
                      >
                        <Sparkles className="w-5 h-5 text-[#6dd400]" />
                        Your Estimated Super Refund
                      </label>
                      <div className="relative">
                        <motion.div
                          className="absolute inset-0 bg-linear-to-r from-[#6dd400]/20 to-[#8ae426]/20 rounded-xl"
                          animate={
                            numBalance > 0 ? { opacity: [0.4, 1, 0.4] } : {}
                          }
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <div className="relative">
                          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#0095eb] font-bold text-3xl">
                            $
                          </span>
                          <Input
                            id="refund"
                            type="text"
                            value={
                              refund > 0
                                ? refund.toLocaleString("en-AU", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })
                                : "0.00"
                            }
                            readOnly
                            className="text-3xl font-black text-[#0095eb] bg-linear-to-br from-[#6dd400]/10 to-[#8ae426]/10 border-2 border-[#6dd400]/40 h-20 pl-12 rounded-xl"
                          />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="pt-4"
                    >
                      <Button
                        size="lg"
                        className="w-full text-xl font-bold shadow-xl relative overflow-hidden group/btn h-16 rounded-xl"
                        variant="accent"
                      >
                        <motion.span
                          className="absolute inset-0 bg-white/30"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          Apply Now
                          <motion.span
                            animate={{ x: [0, 6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-2xl"
                          >
                            →
                          </motion.span>
                        </span>
                      </Button>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="flex items-center justify-center gap-3 pt-6 text-sm text-gray-600 font-medium"
                    >
                      <div className="w-3 h-3 bg-[#6dd400] rounded-full animate-pulse" />
                      <span>🔒 Secure & Confidential</span>
                    </motion.div>
                  </motion.div>
                  {/* Close button */}
                  <button
                    onClick={() => setIsCalculatorOpen(false)}
                    className="absolute top-4 left-4 z-20 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </Card>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
