import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const total = location.state?.total || 0;

  const handlePayment = () => {
    setTimeout(() => {
      navigate("/success", { state: { total } });
    }, );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Payment Page</h2>
      <p>Total Amount: ₹{total}</p>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
        }}
        onClick={handlePayment}
      >
        Pay Now
      </button>
    </div>
  );
}

export default Payment;
