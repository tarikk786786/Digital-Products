# Ultimate Digital Learning Library | Intimacy Academy

A production-ready, enterprise-grade, SEO-optimized Next.js 14 application for digital products, courses, and ebook bundles.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![SEO Score](https://img.shields.io/badge/SEO_Score-98%25-brightgreen?style=for-the-badge&logo=google)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 🌟 Key Features

- **🚀 Modern Tech Stack:** Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Framer Motion.
- **⚡ Enterprise Technical SEO:** Native Metadata API, `metadataBase`, Canonical URLs, Open Graph images (1200x630), Twitter Cards.
- **🏷️ Structured JSON-LD Data:** Type-safe Google Rich Snippets for `Product`, `FAQPage`, `BreadcrumbList`, `Organization`, and `WebSite`.
- **🗺️ Dynamic Sitemap & Robots:** Built-in `sitemap.ts` and `robots.ts` for automated crawler indexing.
- **🖼️ Core Web Vitals Optimization:** Fully optimized image pipeline using `next/image` with WebP/AVIF format conversion, responsive `sizes`, and `priority` loading.
- **🛡️ Security Hardened:** OWASP-compliant security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy).
- **♿ WCAG 2.1 Accessibility:** Full ARIA landmarks, roles, controls (`aria-expanded`, `aria-label`), keyboard navigation, screen-reader optimized.
- **🐳 Docker Ready:** Multi-stage Alpine Dockerfile using standalone output for lightweight containerized deployment.
- **🔄 CI/CD Automated:** GitHub Actions pipeline with automated build verification and Lighthouse CI checks.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.x or 20.x
- npm / pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tarikk786786/Digital-Products.git

# Navigate to directory
cd Digital-Products

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📦 Project Structure

```
Digital-Products/
├── .github/
│   └── workflows/
│       └── seo-ci.yml           # CI/CD pipeline for lint, build, & Lighthouse
├── public/
│   └── assets/                  # Product assets & images
├── src/
│   ├── app/
│   │   ├── components/          # React components (Hero, FAQ, Header, etc.)
│   │   │   └── JsonLd.tsx       # Reusable JSON-LD schema injector
│   │   ├── favicon.ico
│   │   ├── globals.css          # Design system & glassmorphism styles
│   │   ├── layout.tsx           # Global layout, metadata & base schemas
│   │   ├── page.tsx             # Homepage & product structured data
│   │   ├── robots.ts            # Dynamic robots.txt
│   │   └── sitemap.ts           # Dynamic sitemap.xml
│   └── data.ts                  # Product catalog & FAQ data
├── Dockerfile                   # Production multi-stage Docker build
├── lighthouserc.js              # Lighthouse CI audit config
├── next.config.mjs              # Security headers & image domains
├── SEO_AUDIT_REPORT.md          # Comprehensive SEO audit documentation
└── tsconfig.json                # TypeScript configuration
```

---

## 🐳 Running with Docker

```bash
# Build the Docker image
docker build -t intimacy-academy .

# Run the container
docker run -p 3000:3000 intimacy-academy
```

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
