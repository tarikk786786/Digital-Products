import { bundleComparison } from "../../data";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function BundleTable() {
  return (
    <section id="bundles" className="py-20 relative z-10 bg-[#0a0a0f]" aria-label="Compare packages">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Compare <span className="text-gradient-gold">Packages</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Find the perfect digital learning experience that fits your needs.</p>
        </div>
        
        <div className="overflow-x-auto pb-8">
          <div className="min-w-[800px] glass-card rounded-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-6 text-gray-300 font-medium text-lg w-1/4" scope="col">Features</th>
                  <th className="p-6 text-center w-1/4" scope="col">
                    <div className="text-xl font-bold text-white mb-1">Ebooks Bundle</div>
                    <div className="text-[#d4af37] font-bold">₹299</div>
                  </th>
                  <th className="p-6 text-center w-1/4" scope="col">
                    <div className="text-xl font-bold text-white mb-1">Anal Mastery</div>
                    <div className="text-[#d4af37] font-bold">₹499</div>
                  </th>
                  <th className="p-6 text-center w-1/4 bg-gradient-to-b from-[#d4af37]/10 to-transparent border-t-[3px] border-[#d4af37]" scope="col">
                    <div className="text-xl font-bold text-white mb-1">Complete Courses</div>
                    <div className="text-[#d4af37] font-bold">₹999</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {bundleComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-6 text-gray-300 font-medium">{row.feature}</td>
                    
                    <td className="p-6 text-center text-gray-400">
                      {row.ebook === "No" ? <FaTimes className="mx-auto text-red-500/50" aria-label="Not included" /> : 
                       row.ebook.startsWith("Yes") ? <><FaCheck className="mx-auto text-green-500 mb-1" aria-label="Included" /> {row.ebook !== "Yes" && <span className="text-xs">{row.ebook}</span>}</> : 
                       row.ebook}
                    </td>
                    
                    <td className="p-6 text-center text-gray-400">
                      {row.course === "No" ? <FaTimes className="mx-auto text-red-500/50" aria-label="Not included" /> : 
                       row.course.startsWith("Yes") ? <><FaCheck className="mx-auto text-green-500 mb-1" aria-label="Included" /> {row.course !== "Yes" && <span className="text-xs">{row.course}</span>}</> : 
                       row.course}
                    </td>
                    
                    <td className="p-6 text-center font-bold text-white bg-[#d4af37]/5">
                      {row.bundle === "No" ? <FaTimes className="mx-auto text-red-500/50" aria-label="Not included" /> : 
                       row.bundle.startsWith("Yes") ? <><FaCheck className="mx-auto text-[#d4af37] mb-1" aria-label="Included" /> {row.bundle !== "Yes" && <span className="text-xs text-[#d4af37]/80">{row.bundle}</span>}</> : 
                       <span className="text-[#d4af37]">{row.bundle}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
