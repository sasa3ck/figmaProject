import React from "react";
import { facebook, twitter, instagram, boxIcon, linkedin } from "../img/index";

const PreFooter = () => {
  return (
    <div className="preHeader max-w-[1280px] mx-auto">
      <div className="flex justify-between mx-12">
        <div className="copyRight flex items-center">
          <p className="mr-8">Copyright © 2019—2020 Crawless</p>
          <div className="flex items-center">
            <a href="#">Legal</a>
            <div className="mx-4 text-[#464753]">&#x2022;</div>
            <a href="#">Privacy & Security</a>
            <div className="mx-4 text-[#464753]">&#x2022;</div>
            <a href="#">Cookies</a>
          </div>
        </div>
        <div className="icons flex space-x-6">
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
