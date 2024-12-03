import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../../features/cart/cartSlice";
import { useState } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      setError("Quantity must be at least 1");
      return;
    }
    setError("");
    dispatch(updateQuantity({ id, quantity }));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/thank-you");
    }
  };

  return (
    <MDBRow>
      <MDBCol md="8">
        <div className="cart">
          <h2>Your Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div>
                    <p className="product-name">{item.name}</p>
                    <p className="product-price">
                      $ {item.price.toFixed(2)} x {item.quantity} = ${" "}
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p>{item.description}</p>
                    <br />
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <br />
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              {error && <p style={{ color: "red" }}>{error}</p>}{" "}
              
            </div>
          )}
        </div>
      </MDBCol>
      <MDBCol md="4" className="sticky-cart">
        <h3 className="total">Total: ${calculateTotal()}</h3>
        <MDBBtn onClick={handleCheckout} color="primary" block>
          Checkout
        </MDBBtn>
      </MDBCol>
    </MDBRow>
  );
}

export default Cart;
