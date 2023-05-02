import React from "react";
import { apple, win, linux, OS_1, OS_2, OS_3 } from "../img/index";

const DesktopOS = () => {
  return (
    <div className="bg-[#2D2763]">
      <div className="desktopOS max-w-[1280px] mx-auto">
        <div className="wrapperOS flex flex-col items-center relative">
          <div className="absolute top-0 left-0">
            <img src={OS_1} />
          </div>
          <div className="absolute left-0 bottom-0">
            <img src={OS_2} />
          </div>
          <div className="absolute right-0 top-0">
            <img src={OS_3} />
          </div>
          <h1>Available for major desktop OS</h1>
          <h3>
            Download and install crawless IDE application
            <br /> and start creating crawling and automation bots surprisingly
            fast
          </h3>
          <div className="flex space-x-8">
            <div className="panelBtn">
              <img src={apple} />
              <a href="#">MacOs High Sierra +</a>
            </div>
            <div className="panelBtn">
              <img src={win} />
              <a href="#">Microsoft Windows 10 64Bit</a>
            </div>
            <div className="panelBtn">
              <img src={linux} />
              <a href="#">Linux</a>
            </div>
          </div>
          <div className="downloadBtn">
            <a href="#">Download now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopOS;
