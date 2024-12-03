import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';  
import './ProductCard.css';

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

 
  // eslint-disable-next-line react/prop-types
  const formattedPrice = product.price.toFixed(2);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));  
    navigate('/cart');  
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
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
