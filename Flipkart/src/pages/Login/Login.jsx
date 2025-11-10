import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const Navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Logged in as ${email}`);

  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />
      <button onClick={()=>Navigate("/")}>Login</button>
    </div>
  );
}

export default Login;
