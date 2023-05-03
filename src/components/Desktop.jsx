import React from "react";
import { sign } from "../img/index";

const Desktop = () => {
  return (
    <div className="desktop">
      <div className="img">
        <div className="bxImg">
          <img src={sign} />
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
      <div className="btns">
        <a href="#" className="download">
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
