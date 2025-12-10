import React from 'react';
import '../App.css';

type PageType = 'home' | 'about' | 'bookstore' | 'activities' | 'contact' | 'cart';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  cartCount: number;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate, cartCount }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <h2 className="logo" onClick={() => onNavigate('home')}>
          📚 School
        </h2>
        <ul className="nav-links">
          <li>
            <button
              className={`nav-button ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => onNavigate('about')}
            >
              About the School
            </button>
          </li>
          <li>
            <button
              className={`nav-button ${currentPage === 'bookstore' ? 'active' : ''}`}
              onClick={() => onNavigate('bookstore')}
            >
              Book Store
            </button>
          </li>
          <li>
            <button
              className={`nav-button ${currentPage === 'activities' ? 'active' : ''}`}
              onClick={() => onNavigate('activities')}
            >
              Activities
            </button>
          </li>
          <li>
            <button
              className={`nav-button ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={() => onNavigate('contact')}
            >
              Contact Us
            </button>
          </li>
          <li>
            <button
              className={`nav-button cart-button ${currentPage === 'cart' ? 'active' : ''}`}
              onClick={() => onNavigate('cart')}
            >
              My Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

