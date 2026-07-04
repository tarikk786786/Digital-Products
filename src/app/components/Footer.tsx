import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8" role="contentinfo">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Image 
              src="/assets/intimacy_logo-removebg-preview-e1770614014749.png" 
              alt="Intimacy Academy Logo" 
              width={160} 
              height={48} 
              className="h-12 w-auto mb-6" 
            />
            <p className="text-gray-400 mb-6 max-w-sm">
              Transforming relationships and intimacy through premium digital education. Join our community of 15,000+ happy couples.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all" aria-label="Follow us on Facebook" rel="noopener noreferrer"><FaFacebook size={18} aria-hidden="true" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all" aria-label="Follow us on Instagram" rel="noopener noreferrer"><FaInstagram size={18} aria-hidden="true" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all" aria-label="Subscribe on YouTube" rel="noopener noreferrer"><FaYoutube size={18} aria-hidden="true" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all" aria-label="Follow us on Twitter" rel="noopener noreferrer"><FaTwitter size={18} aria-hidden="true" /></a>
            </div>
          </div>
          
          <nav aria-label="Quick links">
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#bundles" className="text-gray-400 hover:text-white transition-colors">Bundles</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </nav>
          
          <nav aria-label="Legal links">
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Intimacy Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://cdn.razorpay.com/badges/payment-secure.png" 
                alt="Razorpay Secure Payment Badge" 
                className="h-6 opacity-50" 
                loading="lazy"
                width={120}
                height={24}
              />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
