import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Heart, Search, Menu } from 'lucide-react';
import Home from './pages/Home';

function Navigation() {
  const location = useLocation();
  
  return (
    <header className="header glass">
      <div className="container header-content">
        <Link to="/" className="logo">
          <Heart fill="var(--primary)" color="var(--primary)" size={24} />
          Intimacy Academy
        </Link>
        
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <a href="#store-section" className="nav-link">Store</a>
          <a href="#" className="nav-link">Community</a>
        </nav>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-outline" style={{ padding: '0.5rem' }}>
            <Search size={20} />
          </button>
          <button className="btn btn-primary" style={{ display: 'none' }}>
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms & Conditions</a>
          <a href="#" className="footer-link">Refund & Cancellation</a>
          <a href="#" className="footer-link">Disclaimer</a>
          <a href="#" className="footer-link">Contact Us</a>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Intimacy Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
