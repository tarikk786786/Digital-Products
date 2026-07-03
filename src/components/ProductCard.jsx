import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  const price = product.price;
  const isBundle = product.category === 'Bundle';

  return (
    <div className={`product-card glass ${isBundle ? 'bundle-card' : ''}`} style={isBundle ? { border: '2px solid var(--accent)', transform: 'scale(1.02)' } : {}}>
      <div className="badge" style={isBundle ? { background: 'var(--accent)', color: '#000' } : {}}>{product.category}</div>
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
        {isBundle && <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{product.description}</p>}
        <div className="card-footer">
          <span className="price" style={isBundle ? { color: 'var(--accent)', fontSize: '1.5rem' } : {}}>{price}</span>
          <a href={product.link} target="_blank" rel="noopener noreferrer" className={`btn ${isBundle ? 'btn-primary' : 'btn-outline'}`} style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
            {isBundle ? 'Get Bundle' : 'View'} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
