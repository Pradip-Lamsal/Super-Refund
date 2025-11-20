"use client";
import TermsConditionsDialog from "@/components/TermsConditionsDialog";
import {
  FooterBackgroundGradient,
  TextHoverEffect,
} from "@/components/ui/hover-footer";
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  // Footer link data
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "#contact" },
        { label: "Apply Now", href: "#apply" },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#0095eb]" />,
      text: "info@ebta.com.au",
      href: "mailto:info@ebta.com.au",
    },
    {
      icon: <Phone size={18} className="text-[#0095eb]" />,
      text: "+61 (02) 4601 1988",
      href: "tel:+61024601988",
    },
    {
      icon: <MapPin size={18} className="text-[#0095eb]" />,
      text: "Suite Q1291 LG 44 MARKET STREET Sydney, NSW",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
    { icon: <Globe size={20} />, label: "Website", href: "#" },
  ];

  return (
    <footer className="bg-white relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col items-start space-y-2">
              <Image
                src="/Logo.png"
                alt="Refund My Super"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              Helping Australians claim their super refunds with over 5 years of
              experience in the industry.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-gray-900 text-lg font-semibold mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-[#0095eb] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                {section.title === "Quick Links" && (
                  <li className="relative">
                    <TermsConditionsDialog
                      triggerText="Terms & Conditions"
                      triggerVariant="link"
                      triggerClassName="text-gray-600 hover:text-[#0095eb] transition-colors p-0 h-auto font-normal"
                    />
                  </li>
                )}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-gray-900 text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="mt-0.5">{item.icon}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-[#0095eb] transition-colors text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-600 hover:text-[#0095eb] transition-colors text-sm">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#0095eb] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-gray-600">
            &copy; {new Date().getFullYear()} Refund My Super. All rights
            reserved. Dobaato Info Tech Pvt Ltd.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-96 -mt-44 -mb-28">
        <TextHoverEffect text="REFUND MY SUPER" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
