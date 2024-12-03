import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../features/cart/cartSlice';
import { useState } from 'react';
import './Cart.css'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      setError('Quantity must be at least 1');
      return;
    }
    setError('');
    dispatch(updateQuantity({ id, quantity }));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{item.description}</p><br/>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                </div><br/>
                <button onClick={() => handleRemoveFromCart(item.id)} className="remove-btn">
                  Remove
                </button>
              </div>
            </div>
          ))}
          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Error message display */}
          <h3 className="total">Total: ${calculateTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
