import React from "react";
import { face } from "../img/index";

const Frame = () => {
  return (
    <div className="bg-[#1C1C23]">
      <div className="frame max-w-[1280px] mx-auto">
        <div>
          <h3>
            “Crawless serves as the main hub for ready-to-code Photoshop files
            of 3 teams at our company. When anyone needs to access a design -
            it’s in Avocode.”
          </h3>
        </div>
        <div className="person flex justify-center items-center">
          <div>
            <img src={face} alt="face" />
          </div>
          <div>
            <p>Igor Masliansky</p>
            <p>Front-End Engineer at Ubimo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
