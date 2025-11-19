"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion, useInView } from "framer-motion";
import { DollarSign, Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

// Generate random values outside component
const generateParticles = () =>
  [...Array(15)].map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 2,
  }));

const particlesData = generateParticles();

export default function HeroSection() {
  const [balance, setBalance] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });

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
      {particlesData.map((particle, i) => (
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
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <motion.span
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f2937]"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                AVERAGE AUSTRALIAN
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.span
                className="block text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-[#0f6f3a] to-[#0095eb] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                SUPER REFUND IS
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            >
              <motion.span
                className="block text-5xl md:text-6xl lg:text-8xl font-black text-[#ef4444]"
                animate={{
                  scale: [1, 1.03, 1],
                  textShadow: [
                    "0px 0px 0px rgba(239, 68, 68, 0)",
                    "0px 0px 30px rgba(239, 68, 68, 0.4)",
                    "0px 0px 0px rgba(239, 68, 68, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                OVER $ 1,900
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* Center Calculator - Main Focus */}
        <div className="flex justify-center mb-16">
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-2xl"
          >
            <motion.div
              animate={isCardInView ? { y: [0, -8, 0] } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Content - Image and Description Side by Side */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative space-y-6"
          >
            <motion.div
              className="absolute -left-6 top-0 w-1 h-full bg-linear-to-b from-[#0095eb] via-[#6dd400] to-[#0095eb]"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
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
    </section>
  );
}
