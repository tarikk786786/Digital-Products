import { useState } from 'react';
import data from '../data.json';
import ProductCard from '../components/ProductCard';

export default function Store() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Clean data
  const validCourses = data.courses.filter(c => !c.title.includes('Explore Our') && !c.title.includes('Important Links') && !c.title.includes('Learning paths'));
  const validEbooks = data.ebooks.filter(e => e.title.includes('eBook') || !e.title.includes('Important Links') && !e.title.includes('Learning paths') && !e.title.includes('Intimacy Guides'));
  
  const allProducts = [...validCourses, ...validEbooks];
  
  const displayedProducts = activeFilter === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeFilter);

  return (
    <main className="container" style={{ padding: '4rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Digital Products Store</h1>
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
    </main>
  );
}
