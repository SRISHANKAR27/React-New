import React from "react";
import Navbar from "../../Components/Nav bar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2>Welcome to Todo App</h2>
        <p>Select a section from the Navbar to continue.</p>
      </div>
    </>
  );
}

export default Home;
