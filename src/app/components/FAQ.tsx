"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../../data";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative z-10 bg-[#0a0a0f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-gradient-gold">Questions</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to know about the Ultimate Digital Learning Library.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left px-6 py-5 rounded-xl flex justify-between items-center transition-all ${
                  activeIndex === index ? "bg-white/10" : "glass hover:bg-white/5"
                }`}
              >
                <span className="font-bold text-lg text-white">{faq.q}</span>
                <FaChevronDown 
                  className={`text-[#d4af37] transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-gray-400 bg-white/5 rounded-b-xl border-x border-b border-white/5 -mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
