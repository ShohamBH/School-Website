import React, { useState } from 'react';
import { CartItem } from '../App';

interface CartProps {
  items: CartItem[];
  onRemove: (itemId: string) => void;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove, onUpdateQuantity }) => {
  const [showPaymentConfirm, setShowPaymentConfirm] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleProceedToPayment = () => {
    if (items.length > 0) {
      setShowPaymentConfirm(true);
      setTimeout(() => setShowPaymentConfirm(false), 5000);
    }
  };

  return (
    <div className="page-container">
      <h1>🛒 My Cart</h1>

      {showPaymentConfirm && (
        <div className="payment-confirmation">
          ✅ Payment Successful! Your order has been processed. Thank you for your purchase!
        </div>
      )}

      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <p className="empty-message">Add books or activities to get started!</p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-section">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <span className={`type-badge ${item.type}`}>
                        {item.type === 'book' ? '📚 Book' : '🎭 Activity'}
                      </span>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <div className="quantity-controls">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="qty-btn"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={e => onUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                          min="1"
                          className="qty-input"
                        />
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="qty-btn"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="remove-btn"
                      >
                        🗑️ Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleProceedToPayment}
              className="payment-btn"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
