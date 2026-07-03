export type Product = {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  badge: string;
  features: string[];
  image: string;
  type: "bundle" | "course";
  rating: number;
  students: string;
  downloads: string;
};

export const featuredProducts: Product[] = [
  {
    id: "ebooks-bundle",
    title: "Ultimate Ebooks Bundle",
    price: 299,
    originalPrice: 999,
    discountPercentage: 70,
    badge: "🔥 Best Seller",
    image: "/assets/THE-SCIENCE-BEHIND.jpg-1024x576.jpeg",
    type: "bundle",
    rating: 4.9,
    students: "15,000+",
    downloads: "25k+",
    features: [
      "Complete Ebook Collection",
      "Instant Digital Download",
      "Mobile Friendly",
      "Lifetime Access",
      "Future Ebook Updates"
    ]
  },
  {
    id: "anal-mastery",
    title: "Anal Mastery Course",
    price: 499,
    originalPrice: 1499,
    discountPercentage: 66,
    badge: "⭐ Most Popular",
    image: "/assets/EMOTIONAL-2.jpg-1-1024x576.jpeg",
    type: "course",
    rating: 4.9,
    students: "8,500+",
    downloads: "10k+",
    features: [
      "HD Video Lessons",
      "Beginner Friendly",
      "Step-by-Step Learning",
      "Lifetime Access",
      "Watch on Mobile/Desktop",
      "Private Learning Dashboard"
    ]
  },
  {
    id: "courses-bundle",
    title: "Complete Courses Bundle",
    price: 999,
    originalPrice: 4999,
    discountPercentage: 80,
    badge: "👑 Best Value",
    image: "/assets/Mastering-Intimacy-through-Lifestyle-Habits--768x432.jpeg",
    type: "bundle",
    rating: 5.0,
    students: "5,200+",
    downloads: "12k+",
    features: [
      "Every Premium Course",
      "Future Course Updates",
      "Lifetime Access",
      "Bonus Resources",
      "Premium Learning Experience"
    ]
  }
];

export const bundleComparison = [
  { feature: "Price", ebook: "₹299", course: "₹499", bundle: "₹999" },
  { feature: "Access", ebook: "Instant Download", course: "Video Dashboard", bundle: "All Access" },
  { feature: "Downloads", ebook: "Unlimited PDFs", course: "Video Offline Sync", bundle: "Everything" },
  { feature: "Updates", ebook: "Future Ebooks", course: "No", bundle: "Future Courses" },
  { feature: "Videos", ebook: "No", course: "Yes (HD)", bundle: "Yes (All HD)" },
  { feature: "PDFs", ebook: "Yes (All)", course: "No", bundle: "Yes (All)" },
  { feature: "Bonus Content", ebook: "No", course: "No", bundle: "Exclusive Bonuses" },
  { feature: "Support", ebook: "Email", course: "Priority", bundle: "VIP 24/7" },
  { feature: "Lifetime Access", ebook: "Yes", course: "Yes", bundle: "Yes" },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya S.",
    image: "/assets/24.webp",
    rating: 5,
    text: "The communication mastery course completely changed our marriage. We actually talk now without arguing.",
    verified: true,
  },
  {
    id: 2,
    name: "Rahul M.",
    image: "/assets/25.webp",
    rating: 5,
    text: "The complete bundle is worth 10x the price. Unbelievable value and the video quality is premium.",
    verified: true,
  },
  {
    id: 3,
    name: "Ananya K.",
    image: "/assets/31-1.webp",
    rating: 5,
    text: "I bought the Ebook bundle first and loved it so much I upgraded to the full course bundle.",
    verified: true,
  },
];

export const faqs = [
  { q: "Do I get lifetime access?", a: "Yes! Once you purchase, you get lifetime access to the materials." },
  { q: "Are the courses mobile-friendly?", a: "Absolutely. Our platform is 100% mobile optimized." },
  { q: "How do I access the content?", a: "You will receive an instant email with login/download details immediately after purchase." },
  { q: "Is payment secure?", a: "Yes, we use bank-level encryption with Razorpay and Stripe to ensure your payment is 100% secure." },
  { q: "Will my purchase be discreet?", a: "Yes, your billing statement will show a generic educational descriptor. Privacy is our priority." },
  { q: "Do I get updates?", a: "If you purchase a bundle, you will get future updates for those products (e.g. future ebooks or courses) automatically added to your dashboard." },
  { q: "Can I upgrade later?", a: "Yes, you can upgrade from the Ebook bundle to the full Courses bundle anytime." },
  { q: "What format are the ebooks?", a: "Our ebooks are provided in high-quality PDF format, compatible with all devices." },
  { q: "Are the videos downloadable?", a: "To protect our content, videos are stream-only but accessible 24/7 via your private dashboard." },
  { q: "Who are these courses for?", a: "They are designed for adults seeking to improve their relationships, communication, and intimacy." },
  { q: "Is this beginner-friendly?", a: "Yes, all our content starts with foundational concepts and builds up step-by-step." },
  { q: "What if I need help?", a: "We offer dedicated customer support via email. Premium bundle users get VIP support." },
  { q: "Do you offer a refund?", a: "Due to the digital nature of our products, all sales are final, but we guarantee the quality of our content." },
  { q: "How long are the video courses?", a: "Each course varies, but on average they contain 2-4 hours of high-quality HD video content." },
  { q: "Can I watch on my TV?", a: "Yes, you can cast the videos from your phone or computer to your Smart TV." },
];
