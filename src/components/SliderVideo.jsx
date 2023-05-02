import React from "react";
import { codeEditor, diagram, vs, react, z } from "../img/index";
import SilverVideoBtn from "./myComponents/SilverVideoBtn";

const SliderVideo = () => {
  return (
    <div className="sliderVideo max-w-[1280px] mx-auto">
      <div className="btns">
        <SilverVideoBtn text="Code editor" img={codeEditor} />
        <SilverVideoBtn text="Browser" img={codeEditor} />
        <SilverVideoBtn text="Visual CSS selector" img={codeEditor} />
        <SilverVideoBtn text="Queue" img={codeEditor} />
        <SilverVideoBtn text="Logs" img={codeEditor} />
        <SilverVideoBtn text="Storage" img={codeEditor} />
      </div>
      <div className="flex justify-around mt-8 mb-16">
        <div className="text flex flex-col justify-between">
          <div>
            <h3>True headless Chrome browser with integrated ad-blocker</h3>
            <h6>
              Et malesuada fames ac turpis egestas. Mattis enim ut tellus
              elementum sagittis vitae. Nisi lacus sed viverra tellus in hac.
              Tristique sollicitudin nibh sit amet commodo. Blandit turpis
              cursus in hac habitasse platea.
            </h6>
          </div>
          <div>
            <p>Replaces:</p>
            <div className="flex mt-3">
              <a href="#">
                <img src={vs} alt="vs" />
              </a>
              <a href="#">
                <img src={react} alt="react" />
              </a>
              <a href="#">
                <img src={z} alt="z" />
              </a>
            </div>
          </div>
        </div>
        <div className="diagram">
          <img src={diagram} alt="diagram" />
        </div>
      </div>
    </div>
  );
};

export default SliderVideo;
