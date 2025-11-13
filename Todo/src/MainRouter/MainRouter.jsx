// src/MainRouter.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import App from "./App";
import Login from "./pages/Login";
import Pending from "./pages/Pending";
import History from "./pages/History";
import Navbar from "./components/Navbar";

function MainRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);

  return (
    <Router>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/home"
          element={isLoggedIn ? <App tasks={tasks} setTasks={setTasks} /> : <Navigate to="/" />}
        />
        <Route
          path="/pending"
          element={isLoggedIn ? <Pending tasks={tasks} /> : <Navigate to="/" />}
        />
        <Route
          path="/history"
          element={isLoggedIn ? <History tasks={tasks} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default MainRouter;
