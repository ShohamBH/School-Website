import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import AboutSchool from './pages/AboutSchool';
import BookStore from './pages/BookStore';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

type PageType = 'home' | 'about' | 'bookstore' | 'activities' | 'contact' | 'cart';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'book' | 'activity';
  category?: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (item: CartItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, item];
    });
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(itemId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity } : item
        )
      );
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutSchool />;
      case 'bookstore':
        return <BookStore onAddToCart={handleAddToCart} />;
      case 'activities':
        return <Activities onAddToCart={handleAddToCart} />;
      case 'contact':
        return <Contact />;
      case 'cart':
        return (
          <Cart
            items={cartItems}
            onRemove={handleRemoveFromCart}
            onUpdateQuantity={handleUpdateQuantity}
          />
        );
      default:
        return (
          <div className="home-page">
            <div className="hero">
              <h1>Welcome to Our School</h1>
              <p>Excellence in Education, Excellence in Character</p>
              <p className="subtitle">Educating hearts and minds for a brighter future</p>
            </div>
            
            <section className="highlights">
              <h2>Our Programs</h2>
              <div className="highlights-grid">
                <div className="highlight-card">
                  <div className="highlight-icon">📖</div>
                  <h3>Torah & Jewish Studies</h3>
                  <p>Deep learning in Torah, Talmud, and Jewish Law from grade 1 to 8</p>
                </div>
                <div className="highlight-card">
                  <div className="highlight-icon">📚</div>
                  <h3>Secular Subjects</h3>
                  <p>Excellence in Mathematics, English, and advanced academics</p>
                </div>
                <div className="highlight-card">
                  <div className="highlight-icon">👥</div>
                  <h3>Student Community</h3>
                  <p>Thriving community of dedicated students and experienced educators</p>
                </div>
                <div className="highlight-card">
                  <div className="highlight-icon">🎯</div>
                  <h3>Holistic Development</h3>
                  <p>Character building, leadership, and personal growth</p>
                </div>
              </div>
            </section>

            <section className="featured-section">
              <h2>Featured Activities</h2>
              <div className="featured-grid">
                <div className="featured-item">
                  <div className="featured-image" style={{backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                    <span className="featured-label">Community Service</span>
                  </div>
                  <h3>Tikkun Olam Projects</h3>
                  <p>Students engage in meaningful community service throughout the year</p>
                </div>
                <div className="featured-item">
                  <div className="featured-image" style={{backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
                    <span className="featured-label">Sports & Recreation</span>
                  </div>
                  <h3>Athletic Excellence</h3>
                  <p>Team sports, fitness programs, and physical education for all grades</p>
                </div>
                <div className="featured-item">
                  <div className="featured-image" style={{backgroundImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
                    <span className="featured-label">Arts & Culture</span>
                  </div>
                  <h3>Creative Expression</h3>
                  <p>Music, art, theater, and cultural programs celebrating our heritage</p>
                </div>
              </div>
            </section>

            <section className="stats-section">
              <h2>School at a Glance</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>8 Grades</h3>
                  <p>Kindergarten through 8th Grade</p>
                </div>
                <div className="stat-card">
                  <h3>7+ Subjects</h3>
                  <p>Torah, Talmud, Halacha, and more</p>
                </div>
                <div className="stat-card">
                  <h3>Expert Staff</h3>
                  <p>Dedicated teachers and educators</p>
                </div>
                <div className="stat-card">
                  <h3>Innovation</h3>
                  <p>Modern education with traditional values</p>
                </div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="app">
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartCount={cartItems.length}
      />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer">
        <p>&copy; 2025 Our School. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
