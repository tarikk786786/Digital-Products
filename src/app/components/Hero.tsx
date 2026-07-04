"use client";
import { motion } from "framer-motion";
import { FaPlay, FaShieldAlt, FaMobileAlt, FaLock } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden" role="banner">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-20 left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-10 right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[150px] mix-blend-screen" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-yellow-600/10 blur-[100px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('/assets/banner3-6c6ec6feb9977bf8c65c24d81c4cd99b.jpeg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#d4af37]/30 text-[#d4af37] font-medium text-sm mb-8"
          >
            <span className="relative flex h-3 w-3" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#d4af37]"></span>
            </span>
            Limited Time Offer: Save up to 80% Today
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-balance"
          >
            Master the Art of <br/>
            <span className="text-gradient-gold">True Intimacy &amp; Connection</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto text-balance"
          >
            The Ultimate Digital Learning Library for couples and individuals. Discover premium courses and ebooks designed to transform your relationships.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a href="#products" className="w-full sm:w-auto bg-gradient-to-r from-[#d4af37] to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-3 transform hover:scale-105" aria-label="Explore our digital learning library">
              Explore Library
            </a>
            <a href="#video-intro" className="w-full sm:w-auto glass px-10 py-5 rounded-2xl font-bold text-lg text-white hover:bg-white/10 transition-all flex items-center justify-center gap-3" aria-label="Watch introduction video">
              <FaPlay className="text-sm" aria-hidden="true" /> Watch Trailer
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-gray-400 font-medium"
          >
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-[#d4af37] text-xl" aria-hidden="true" /> Secure Checkout
            </div>
            <div className="flex items-center gap-2">
              <FaMobileAlt className="text-[#d4af37] text-xl" aria-hidden="true" /> Mobile Friendly
            </div>
            <div className="flex items-center gap-2">
              <FaLock className="text-[#d4af37] text-xl" aria-hidden="true" /> Private Access
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" aria-hidden="true"></div>
    </section>
  );
}
