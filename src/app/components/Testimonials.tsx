"use client";
import { motion } from "framer-motion";
import { testimonials } from "../../data";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 relative z-10 overflow-hidden" aria-label="Customer testimonials">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-purple-900/10 blur-[120px] mix-blend-screen -z-10" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Success <span className="text-gradient-purple">Stories</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Join over 15,000+ individuals who have transformed their lives using our premium resources.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.article 
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 relative"
            >
              <FaQuoteLeft className="text-4xl text-white/5 absolute top-6 right-6" aria-hidden="true" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xl" aria-hidden="true">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <div className="flex gap-1 text-yellow-500 text-sm" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-gray-300 italic relative z-10">&quot;{testimonial.text}&quot;</blockquote>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
