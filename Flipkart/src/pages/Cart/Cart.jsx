import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const proceedToPayment = () => {
    navigate("/payment", { state: { total } });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              {item.name} - ₹{item.price}
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button
            style={{
              backgroundColor: "#2874f0",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
            onClick={proceedToPayment}
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
