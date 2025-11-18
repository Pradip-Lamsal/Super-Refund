"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [balance, setBalance] = useState<string>("");

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-40" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#0095eb]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#6dd400]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text and Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-[#1f2937]">AVERAGE</span>
              <br />
              <span className="text-[#1f2937]">AUSTRALIAN</span>
              <br />
              <span className="text-[#0f6f3a]">SUPER REFUND IS</span>
              <br />
              <span className="text-[#ef4444] text-5xl md:text-6xl lg:text-7xl">
                OVER $ 1,900
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative w-full max-w-md"
            >
              <Image
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop"
                alt="Australian dollar notes"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl"
            >
              RefundMySuper is an Australian owned CPA registered public
              practice. We have been in the industry for over 5 years and our
              experienced professionals have a combined experience of over 15
              years in Australian Tax and Super environment.
            </motion.p>
          </motion.div>

          {/* Right side - Calculator Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <Card className="w-full max-w-md p-8 shadow-2xl bg-white/95 backdrop-blur-sm border-2 border-gray-100">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="balance"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Estimated Super Balance
                  </label>
                  <Input
                    id="balance"
                    type="text"
                    placeholder="Enter amount"
                    value={balance}
                    onChange={handleBalanceChange}
                    className="text-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="refund"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Estimated Super Refund
                  </label>
                  <div className="relative">
                    <Input
                      id="refund"
                      type="text"
                      value={
                        refund > 0
                          ? refund.toLocaleString("en-AU", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          : "0"
                      }
                      readOnly
                      className="text-lg font-semibold text-[#0095eb] bg-gray-50 border-[#6dd400]/50"
                    />
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="w-full text-lg font-semibold shadow-lg"
                    variant="accent"
                  >
                    Apply Now
                  </Button>
                </motion.div>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
