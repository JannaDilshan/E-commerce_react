import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { useState } from 'react';
import './ProductCard.css';

// eslint-disable-next-line react/prop-types
function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // eslint-disable-next-line react/prop-types
  const formattedPrice = product.price.toFixed(2);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    setIsAddedToCart(true);
    setShowModal(true);
     
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setIsAddedToCart(false);
    setQuantity(1);
  };

  return (
    <div className="product-card bg-image hover-zoom">
      {/* eslint-disable-next-line react/prop-types */}
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        {/* eslint-disable-next-line react/prop-types */}
        <h3 className="product-name">{product.name}</h3>
        {/* eslint-disable-next-line react/prop-types */}
        <p className="product-description">{product.description}</p>
        <p className="product-price">${formattedPrice}</p>

        <div className="quantity-controls-Product">
          <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
        </div>

        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            {/* eslint-disable-next-line react/prop-types */}
            <h4> {product.name} Item {quantity} added to cart!</h4>

            {!isAddedToCart ? (
              <>
                <div className="quantity-controls-Product">
                  <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="add-to-cart-btn"
                >
                  Add to Cart
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => (window.location.href = '/cart')}
                  className="go-to-cart-btn"
                >
                  Go to Cart page
                </button>
              </>
            )}

            <button onClick={closeModal} className="close-modal-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
