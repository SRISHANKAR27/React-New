import React from "react";
import { useLocation } from "react-router-dom";

function Success() {
  const location = useLocation();
  const total = location.state?.total || 0;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2> Payment Successful!</h2>
      <p>Your order has been placed successfully.</p>
      <h3>Order Total: Rs.{total}</h3>
    </div>
  );
}

export default Success;
