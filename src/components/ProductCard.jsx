import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  // Use a fallback price if empty for aesthetics, matching the original site's generic ₹4,999 or similar, 
  // or just leave it out if we don't have it.
  const price = product.price || (product.category === 'Course' ? '₹4,999' : '₹599');

  return (
    <div className="product-card glass">
      <div className="badge">{product.category}</div>
      <div className="card-image-wrapper">
        {product.image ? (
          <img src={product.image} alt={product.title} className="card-image" loading="lazy" />
        ) : (
          <div className="card-image" style={{ background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            No Image
          </div>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title" title={product.title}>{product.title}</h3>
        <div className="card-footer">
          <span className="price">{price}</span>
          <a href={product.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
            View <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
