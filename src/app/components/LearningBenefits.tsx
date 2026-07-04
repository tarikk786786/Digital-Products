"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LearningBenefits() {
  const benefits = [
    { title: "Deepen Connection", desc: "Learn proven techniques to foster emotional and physical intimacy that lasts a lifetime.", img: "/assets/Bedroom-Confidence-Mastery.webp" },
    { title: "Better Communication", desc: "Break down barriers and talk about your desires openly, safely, and lovingly.", img: "/assets/The-Communication-Mastery-for-Couples-.webp" },
    { title: "Boost Confidence", desc: "Understand the psychology of touch and desire to feel empowered in your relationships.", img: "/assets/The-Psychology-of-Touch-and-Desire-.webp" },
    { title: "Lifestyle Habits", desc: "Master the daily habits that keep the spark alive outside of the bedroom.", img: "/assets/Mastering-Intimacy-through-Lifestyle-Habits-.jpeg" }
  ];

  return (
    <section className="py-24 relative z-10 bg-[#0a0a0f]" aria-label="Learning benefits">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What You Will <span className="text-gradient-gold">Learn</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Transform your relationship through structured, expert-led digital education.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card flex flex-col sm:flex-row overflow-hidden group"
            >
              <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors" aria-hidden="true"></div>
                <Image 
                  src={item.img} 
                  alt={`${item.title} - Learn techniques for improving relationships`}
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
