import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import data from '../data.json';
import ProductCard from '../components/ProductCard';

export default function Home() {
  // Filter out the non-product items extracted by mistake
  const featuredCourses = data.courses
    .filter(c => !c.title.includes('Explore Our') && !c.title.includes('Important Links') && !c.title.includes('Learning paths'))
    .slice(0, 3);
    
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
            <Link to="/store" className="btn btn-primary">
              Explore Store <ArrowRight size={20} />
            </Link>
            <a href="https://intimacyacademy.in/ebooks/" className="btn btn-outline" target="_blank" rel="noreferrer">
              New Ebook Released
            </a>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Popular Courses</h2>
            <p style={{ color: 'var(--text-muted)' }}>Our highly rated programs to build lasting intimacy.</p>
          </div>
          <Link to="/store" style={{ color: 'var(--primary-light)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
            View All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="product-grid">
          {featuredCourses.map((course, idx) => (
            <ProductCard key={idx} product={course} />
          ))}
        </div>
      </section>
    </main>
  );
}
