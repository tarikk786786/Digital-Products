"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

export default function StickyCheckout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show checkout bar after scrolling down past the hero section (e.g., 500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="md:hidden fixed bottom-0 left-0 w-full z-50 glass border-t border-white/10 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
        >
          <div className="flex justify-between items-center gap-4">
            <div>
              <p className="text-xs text-gray-400">Complete Bundle</p>
              <p className="text-xl font-bold text-[#d4af37]">₹999</p>
            </div>
            <a
              href="#products"
              className="flex-grow bg-gradient-to-r from-[#d4af37] to-yellow-600 text-black font-bold py-3 px-4 rounded-xl flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              <FaShoppingCart /> Buy Now
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
