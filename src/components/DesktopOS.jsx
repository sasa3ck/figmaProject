import React from "react";
import { apple, win, linux, OS_1, OS_2, OS_3 } from "../img/index";

const DesktopOS = () => {
  return (
    <div className="wrapperDesktopOS">
      <div className="desktopOS">
        <div className="wrapperOS">
          <div className="imgPartOne">
            <img src={OS_1} />
          </div>
          <div className="imgPartTwo">
            <img src={OS_2} />
          </div>
          <div className="imgPartThree">
            <img src={OS_3} />
          </div>
          <h1>Available for major desktop OS</h1>
          <h3>
            Download and install crawless IDE application
            <br /> and start creating crawling and automation bots surprisingly
            fast
          </h3>
          <div className="btns">
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
