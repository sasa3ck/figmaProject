import React from "react";
import { logo, arrow } from "../img/index";

const Header = () => {
  return (
    <div className="header max-w-[1200px] h-[80px] mx-auto flex items-center justify-between">
      <img src={logo} className="max-w-[125px] max-h-[32px] cursor-pointer" />
      <div className="tabs flex items-center h-full text-center relative">
        <div>
          <a href="#">For business</a>
        </div>
        <div className="products">
          <a href="#">Products</a>
          <img src={arrow} alt="arrow" className="ml-2" />
        </div>
        <div className="resources">
          <a href="#">Resources</a>
          <img src={arrow} alt="arrow" className="ml-2" />
        </div>
        <div>
          <a href="#">Store</a>
        </div>
        <section className="productList absolute bg-[#1C1C23] left-24 top-20 min-w-[130px] space-y-2 z-10 rounded-lg py-2">
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
        <section className="resourcesList absolute bg-[#1C1C23] left-32 top-20 min-w-[300px] space-y-2 z-10 rounded-lg py-2 grid grid-cols-2">
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
