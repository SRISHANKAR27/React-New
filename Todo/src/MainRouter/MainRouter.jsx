import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Pending from "../Pages/Pending tasks/Pending";
import History from "../Pages/History/History";
import "./MainRouter.css";

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
