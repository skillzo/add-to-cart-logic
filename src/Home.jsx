import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import useAuth from "./authContext";
import { useShop } from "./AuthStore";
import Product from "./Product";

function Home() {
  const { cart } = useAuth();
  const { greeting } = useShop();
  console.log(greeting);
  return (
    <React.Fragment>
      <div className="navbar">
        <h2>Home</h2>
        <Link to="/cart">
          <h2>
            Cart <span>{cart.length}</span>
          </h2>
        </Link> 
      </div>
      <Product />
      
    </React.Fragment>
  );
}

export default Home;
