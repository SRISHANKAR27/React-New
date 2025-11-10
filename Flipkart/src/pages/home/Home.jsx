import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "iPhone 15", price: 79999 },
    { id: 2, name: "MacBook Air", price: 99999 },
    { id: 3, name: "Samsung S24", price: 74999 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const goToCart = () => {
    navigate("/cart", { state: { cart } });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              width: "200px",
            }}
          >
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <button
        style={{
          marginTop: "20px",
          backgroundColor: "#2874f0",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
        }}
        onClick={goToCart}
      >
        Go to Cart ({cart.length})
      </button>
    </div>
  );
}

export default Home;
