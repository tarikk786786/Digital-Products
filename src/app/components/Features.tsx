"use client";
import { motion } from "framer-motion";
import { FaBolt, FaInfinity, FaShieldAlt, FaMobile, FaStar, FaSync } from "react-icons/fa";

export default function Features() {
  const features = [
    { icon: <FaBolt />, title: "Instant Access", desc: "Start learning immediately after your purchase." },
    { icon: <FaInfinity />, title: "Lifetime Access", desc: "Your content never expires. Learn at your own pace." },
    { icon: <FaShieldAlt />, title: "Secure Checkout", desc: "Bank-level encryption for your peace of mind." },
    { icon: <FaStar />, title: "Premium Content", desc: "High-quality videos and professionally designed ebooks." },
    { icon: <FaSync />, title: "Regular Updates", desc: "Bundle buyers get future content updates automatically." },
    { icon: <FaMobile />, title: "Mobile Friendly", desc: "Watch and read on any device, anywhere, anytime." }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why <span className="text-gradient-purple">Choose Us</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We provide the most comprehensive, high-quality digital learning experience for relationships and intimacy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-8 group transition-all duration-300 hover:shadow-[0_0_25px_rgba(224,195,252,0.1)] hover:border-purple-500/30"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-2xl text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
