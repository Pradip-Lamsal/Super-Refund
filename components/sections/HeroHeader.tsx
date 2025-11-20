"use client";

import { motion } from "framer-motion";

export default function HeroHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <div className="space-y-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <motion.span
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1f2937]"
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
            className="block text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-[#0f6f3a] to-[#0095eb] bg-clip-text text-transparent"
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
            className="block text-4xl md:text-5xl lg:text-6xl font-black text-[#ef4444]"
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
  );
}
