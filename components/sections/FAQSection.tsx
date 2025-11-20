"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState } from "react";

export default function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const faqItems = [
    {
      id: "item-1",
      question: "1. How Can I Claim My Super Refund?",
      answer:
        "One can claim their superannuation refund through Australian Taxation Office or with Refund My Super. Refund My Super Provides you an all necessary information and clear steps to proceed for super refund.",
    },
    {
      id: "item-2",
      question: "2. What information do I need to refund super?",
      answer:
        "You will need to provide Tax File Number, details about your super fund (their ABN and your member number), your visa details and bank account where the refund will be forwarded. We have developed a form that will ask you to fill up and upload.",
    },
    {
      id: "item-3",
      question:
        "3. I do not remember the name of company who is managing my Super.",
      answer:
        "Ans: Do not worry, if you have a TFN number we can find it through Australian Superannuation System which is linked to Australia Taxation Office.",
    },
    {
      id: "item-4",
      question: "4. How do I know much fund is in my super account?",
      answer:
        "If you do not remember how much your employer has paid to your super account, try to provide us as much as information you have, we will do the rest.",
    },
    {
      id: "item-5",
      question: "5. How much super refund I can claim?",
      answer:
        "If you are leaving Australia, you can claim all the fund you have in one or more super funds.",
    },
    {
      id: "item-6",
      question: "6. How much of my super will I get back?",
      answer:
        "If you are a temporary resident, your super balance will be taxed at 35% and rest will be forwarded to you. However, someone on a working holiday visa would be taxed at 65% and remaining will be refunded.",
    },
    {
      id: "item-7",
      question: "7. Do I have to pay tax while claiming for my super refund?",
      answer:
        "Yes, as mentioned earlier, a temporary resident will be taxed at 35%, however, working holiday visa holders are taxed at 65%",
    },
    {
      id: "item-8",
      question: "8. How much does it cost to refund my super?",
      answer:
        "We charge a lowest fee of minimum $300 for refund. Our standard fee is $250 + 5% of super balance",
    },
    {
      id: "item-9",
      question: "9. What is the process for Super Refund?",
      answer:
        "Once you fill up a form and submit online, we will contact you if we need anything further.",
    },
    {
      id: "item-10",
      question: "10. How long does it take to claim my super?",
      answer:
        "It takes anywhere from 1 month to 2 months depending upon various super funds and accumulate that are needed.",
    },
    {
      id: "item-11",
      question:
        "11. Is there any guarantee that I will receive my super amount after leaving Australia?",
      answer:
        "Yes, if the details provided by you are correct, you will surely receive a refund. We provide a 100% money back guarantee if you do not get the refund.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f6f3a] mb-4">
            What is Super Refund?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A temporary resident in Australia accumulated 9.5% of their earning
            (if earning more than $ 450 per month) in a retirement saving fund
            which is payable by their employer. This is known as Superannuation
            or Super. Once the temporary resident decides to leave Australia,
            they are eligible for a refund (with certain tax deducted) which is
            known as Super Refund.
          </p>
        </motion.div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems
              .slice(0, showAll ? faqItems.length : 4)
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index < 4 ? index * 0.1 : 0.1,
                  }}
                >
                  <AccordionItem
                    value={item.id}
                    className="bg-white rounded-xl border border-gray-100 px-4 md:px-5 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#0f6f3a] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
                  >
                    <AccordionTrigger className="cursor-pointer text-base md:text-lg font-semibold text-gray-900 hover:no-underline hover:text-[#0f6f3a] py-5 transition-colors duration-300">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-base text-gray-700 leading-relaxed pb-2">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
          </Accordion>

          {faqItems.length > 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-10 text-center"
            >
              <Button
                onClick={() => {
                  setShowAll(!showAll);
                  if (showAll) {
                    setTimeout(() => {
                      ref.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }, 100);
                  }
                }}
                variant="outline"
                className="group px-8 py-6 text-base font-semibold border-2 border-[#0f6f3a] text-[#0f6f3a] hover:bg-[#0f6f3a] hover:text-white transition-all duration-300 rounded-full shadow-md hover:shadow-lg"
              >
                {showAll ? (
                  <>
                    View Less{" "}
                    <ChevronUp className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
                  </>
                ) : (
                  <>
                    View More{" "}
                    <ChevronDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
