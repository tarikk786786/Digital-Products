import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import data from '../data.json';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Clean data
  const validCourses = data.courses.filter(c => !c.title.includes('Explore Our') && !c.title.includes('Important Links') && !c.title.includes('Learning paths'));
  const validEbooks = data.ebooks.filter(e => e.title.includes('eBook') || (!e.title.includes('Important Links') && !e.title.includes('Learning paths') && !e.title.includes('Intimacy Guides')));
  
  const allProducts = [...validCourses, ...validEbooks];
  
  const displayedProducts = activeFilter === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeFilter);
    
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(209, 18, 66, 0.1)', color: 'var(--primary-light)', borderRadius: '30px', marginBottom: '1.5rem', fontWeight: 600 }}>
            <Sparkles size={16} /> Transform Your Relationships
          </div>
          <h1>Discover the Art of <br/>Love & Connection</h1>
          <p className="hero-subtitle">
            Join 15,000+ happy couples who have transformed their lives through our premium courses and digital guides.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#store-section" className="btn btn-primary">
              Explore Store <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <section id="store-section" className="container" style={{ padding: '2rem 2rem 4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Collection</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Explore our complete collection of courses, ebooks, and guides designed to help you build deeper intimacy and better relationships.
          </p>
        </div>
        
        <div className="filters">
          <button 
            className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => setActiveFilter('All')}
          >
            All Products
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'Course' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Course')}
          >
            Courses
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'Ebook' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Ebook')}
          >
            Ebooks
          </button>
        </div>
        
        <div className="product-grid">
          {displayedProducts.map((product, idx) => (
            <ProductCard key={`${product.title}-${idx}`} product={product} />
          ))}
        </div>
        
        {displayedProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
            No products found in this category.
          </div>
        )}
      </section>
    </main>
  );
}
