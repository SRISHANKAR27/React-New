import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import Payment from "../Payment/Payment";
import Success from "../Success/Success";
import Navbar from "../../Components/Navbar";

function FkRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default FkRouter;
