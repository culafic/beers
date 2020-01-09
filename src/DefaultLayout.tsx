import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./logo.jpg";
import svgCart from "./shopping-cart-solid.svg";
import "./DefaultLayout.css";

interface LayoutProp {
  cartCount: number;
}

const DefaultLayout: React.FC<LayoutProp> = ({ cartCount }) => {
  return (
    <React.Fragment>
      <header className="main-header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="home">
          <h1>
            <Link to="/">Home</Link>
          </h1>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/beers">Beer Store</NavLink>
          </li>
          <li className="cart">
            <NavLink to="/cart">
              <img src={svgCart} alt="cart" />
            </NavLink>
          </li>
          <li className="cartCount">
            <span role="img" aria-label="items in cart">
              {cartCount === 0 ? "Empty" : cartCount}
            </span>
          </li>
        </ul>
      </header>
    </React.Fragment>
  );
};

export default DefaultLayout;
