import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useAuth } from "./AuthContext";
import Product from "./Product";

const Home = () => {
  const { state } = useAuth();

  const count = state.cart.reduce((a, b) => a + b.count, 0);
  console.log(state.cart);
  return (
    <>
      <div className="navbar">
        <h2>Home</h2>
        <Link to="/cart">
          <h2>
            Cart <span>{count}</span>
          </h2>
        </Link>
      </div>
      <Product />
    </>
  );
};

export default Home;
