import React from "react";
import { sign } from "../img/index";

const Desktop = () => {
  return (
    <div className="desktop max-w-[1280px] mx-auto">
      <div className="flex justify-center items-center img">
        <div className="bxImg">
          <img src={sign} alt="sign" />
        </div>
      </div>
      <div>
        <h1>
          The only tool you need to cover your collaboration and development
          processes
        </h1>
      </div>
      <div>
        <p>The all-in-one suite for web scraping and web automation.</p>
      </div>
      <div className="flex justify-center mb-32">
        <a href="#" className="download mr-8">
          Download now
        </a>
        <a href="#" className="prices">
          See pricing
        </a>
      </div>
    </div>
  );
};

export default Desktop;
