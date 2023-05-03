import React from "react";
import { facebook, twitter, instagram, boxIcon, linkedin } from "../img/index";

const PreFooter = () => {
  return (
    <div className="preHeader">
      <div className="wrapper">
        <div className="copyRight">
          <p>Copyright © 2019—2020 Crawless</p>
          <div className="privacySecurity">
            <a href="#">Legal</a>
            <div className="point">&#x2022;</div>
            <a href="#">Privacy & Security</a>
            <div className="point">&#x2022;</div>
            <a href="#">Cookies</a>
          </div>
        </div>
        <div className="icons">
          <a href="#">
            <img src={facebook} />
          </a>
          <a href="#">
            <img src={twitter} />
          </a>
          <a href="#">
            <img src={instagram} />
          </a>
          <a href="#">
            <img src={boxIcon} />
          </a>
          <a href="#">
            <img src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
