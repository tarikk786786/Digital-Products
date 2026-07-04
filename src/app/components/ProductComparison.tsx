"use client";
import { motion } from "framer-motion";
import { featuredProducts } from "../../data";
import { FaCheckCircle, FaShoppingCart, FaStar, FaUserFriends, FaDownload } from "react-icons/fa";
import Image from "next/image";

export default function ProductComparison() {
  return (
    <section id="products" className="py-24 relative z-10" aria-label="Product offerings">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your <span className="text-gradient-purple">Journey</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you want to start with our ebook collection, dive deep into our premium course, or get everything, we have a package for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, idx) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`glass-card p-1 flex flex-col h-full relative overflow-hidden group ${
                product.type === "bundle" && product.price === 999 
                  ? "shadow-[0_0_40px_rgba(212,175,55,0.15)] ring-1 ring-[#d4af37]/50" 
                  : ""
              }`}
            >
              {/* Special effects for the premium bundle */}
              {product.type === "bundle" && product.price === 999 && (
                <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 to-transparent pointer-events-none rounded-[1.4rem]" aria-hidden="true"></div>
              )}

              <div className="absolute top-4 right-4 z-20">
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                  product.price === 999 ? "bg-[#d4af37] text-black" : "bg-purple-500/20 text-purple-300 backdrop-blur-md"
                }`}>
                  {product.badge}
                </span>
              </div>

              <div className="rounded-[1.4rem] bg-[#111115] overflow-hidden flex-grow flex flex-col relative z-10 m-[1px]">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111115] to-transparent z-10 h-full w-full" aria-hidden="true"></div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full relative"
                  >
                    <Image 
                      src={product.image} 
                      alt={`${product.title} - Premium digital learning content`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-80" 
                    />
                  </motion.div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col relative z-20 -mt-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <span className="flex items-center gap-1"><FaStar className="text-yellow-500" aria-hidden="true" /> <span>{product.rating}</span></span>
                    <span className="flex items-center gap-1"><FaUserFriends aria-hidden="true" /> <span>{product.students}</span></span>
                    <span className="flex items-center gap-1"><FaDownload aria-hidden="true" /> <span>{product.downloads}</span></span>
                  </div>

                  <div className="mb-6 flex items-end gap-3">
                    <span className="text-4xl font-bold text-white">₹{product.price}</span>
                    <span className="text-lg text-gray-500 line-through mb-1">₹{product.originalPrice}</span>
                    <span className="text-sm font-bold text-green-400 mb-2">{product.discountPercentage}% OFF</span>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    className={`w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all ${
                      product.price === 999 
                        ? "bg-gradient-to-r from-[#d4af37] to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]" 
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                    }`}
                    aria-label={`Add ${product.title} to cart for ₹${product.price}`}
                  >
                    <FaShoppingCart aria-hidden="true" /> Add to Cart
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
