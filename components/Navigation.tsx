"use client";

import TermsConditionsDialog from "@/components/TermsConditionsDialog";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Superannuation", href: "#superannuation" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "mx-4 lg:mx-8 mt-3 rounded-full bg-white/30 backdrop-blur-lg shadow-xl"
            : "bg-white/80 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-16" : "h-24"
            }`}
          >
            {/* Logo - Left side */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative transition-all duration-300 ${
                isScrolled ? "w-28 h-8" : "w-36 h-10"
              }`}
            >
              <Image
                src="/Logo.png"
                alt="Refund My Super"
                fill
                className="object-contain"
                priority
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div
              className={`hidden lg:flex items-center transition-all duration-300 ${
                isScrolled ? "gap-1" : "gap-2"
              }`}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`transition-all duration-300 font-medium text-gray-700 hover:text-[#0095eb] rounded-lg hover:bg-gray-50 ${
                      isScrolled ? "px-3 py-2 text-sm" : "px-4 py-2 text-base"
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
              >
                <TermsConditionsDialog
                  triggerText="T&C"
                  triggerVariant="ghost"
                  triggerClassName={`transition-all duration-300 font-medium text-gray-700 hover:text-[#0095eb] hover:bg-gray-50 ${
                    isScrolled ? "px-3 py-2 text-sm" : "px-4 py-2 text-base"
                  }`}
                />
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:hidden border-t border-gray-200 bg-white/98 backdrop-blur-md overflow-hidden ${
                isScrolled ? "rounded-b-3xl" : ""
              }`}
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0095eb] rounded-lg transition-colors font-medium"
                    >
                      {link.label}
                    </button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <TermsConditionsDialog
                    triggerText="T&C"
                    triggerVariant="ghost"
                    triggerClassName="w-full justify-start text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#0095eb] rounded-lg transition-colors font-medium"
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

// Fixed "Apply now" button at bottom right
export function ApplyNowButton() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => scrollToSection("#apply")}
      className="fixed bottom-8 right-8 z-40 px-6 py-3 bg-[#6dd400] hover:bg-[#5bc300] text-white font-semibold rounded-full shadow-lg transition-colors duration-300"
    >
      Apply now
    </motion.button>
  );
}
