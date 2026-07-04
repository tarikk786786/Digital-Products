import Hero from "./components/Hero";
import ProductComparison from "./components/ProductComparison";
import BundleTable from "./components/BundleTable";
import Features from "./components/Features";
import LearningBenefits from "./components/LearningBenefits";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import StickyCheckout from "./components/StickyCheckout";
import JsonLd from "./components/JsonLd";
import { featuredProducts, faqs } from "../data";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://intimacyacademy.in";

// Product JSON-LD schemas
const productSchemas = featuredProducts.map((product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.title,
  image: `${BASE_URL}${product.image}`,
  description: product.features.join(". "),
  brand: {
    "@type": "Brand",
    name: "Intimacy Academy",
  },
  offers: {
    "@type": "Offer",
    price: product.price,
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Intimacy Academy",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: product.rating,
    reviewCount: parseInt(product.students.replace(/[^0-9]/g, "")) || 100,
    bestRating: 5,
    worstRating: 1,
  },
}));

// FAQ JSON-LD schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

// Breadcrumb JSON-LD schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      {productSchemas.map((schema, idx) => (
        <JsonLd key={`product-${idx}`} data={schema} />
      ))}
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Hero />
      <ProductComparison />
      <BundleTable />
      <Features />
      <LearningBenefits />
      <Testimonials />
      <FAQ />
      
      {/* Final CTA Section */}
      <section className="py-24 relative z-10 overflow-hidden" aria-label="Call to action">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-purple-900/20 z-0" aria-hidden="true"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Transform Your <span className="text-gradient-gold">Relationship?</span></h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Get immediate access to all premium courses and ebooks. 100% Secure checkout.</p>
          <a href="#products" className="inline-block bg-gradient-to-r from-[#d4af37] to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-12 py-5 rounded-full font-bold text-xl shadow-[0_0_40px_rgba(212,175,55,0.5)] transform transition-transform hover:scale-105" aria-label="Get the ultimate bundle today">
            Get The Ultimate Bundle Today
          </a>
        </div>
      </section>

      <StickyCheckout />
    </>
  );
}
