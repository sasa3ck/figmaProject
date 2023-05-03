import React from "react";
import { logo, arrow } from "../img/index";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="logo" />
      <div className="tabs">
        <div>
          <a href="#">For business</a>
        </div>
        <div className="products">
          <a href="#">Products</a>
          <img src={arrow} className="arrow" />
        </div>
        <div className="resources">
          <a href="#">Resources</a>
          <img src={arrow} className="arrow" />
        </div>
        <div>
          <a href="#">Store</a>
        </div>
        <section className="productList">
          <p>
            <a href="#">Section 1</a>
          </p>
          <p>
            <a href="#">Section 2</a>
          </p>
          <p>
            <a href="#">Section 3</a>
          </p>
        </section>
        <section className="resourcesList">
          <p>
            <a href="#">Section 1</a>
          </p>
          <p>
            <a href="#">Section 2</a>
          </p>
          <p>
            <a href="#">Section 3</a>
          </p>
          <p>
            <a href="#">Section 4</a>
          </p>
          <p>
            <a href="#">Section 5</a>
          </p>
          <p>
            <a href="#">Section 6</a>
          </p>
        </section>
      </div>
      <div className="btn">
        <a href="#">Try for free</a>
      </div>
    </div>
  );
};

export default Header;
