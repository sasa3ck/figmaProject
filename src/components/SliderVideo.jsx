import React from "react";
import { codeEditor, diagram, vs, react, z } from "../img/index";
import SilverVideoBtn from "./myComponents/SilverVideoBtn";

const SliderVideo = () => {
  return (
    <div className="sliderVideo">
      <div className="btns">
        <SilverVideoBtn text="Code editor" img={codeEditor} />
        <SilverVideoBtn text="Browser" img={codeEditor} />
        <SilverVideoBtn text="Visual CSS selector" img={codeEditor} />
        <SilverVideoBtn text="Queue" img={codeEditor} />
        <SilverVideoBtn text="Logs" img={codeEditor} />
        <SilverVideoBtn text="Storage" img={codeEditor} />
      </div>
      <div className="infoPanel">
        <div className="text">
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
            <div className="social">
              <a href="#">
                <img src={vs} />
              </a>
              <a href="#">
                <img src={react} />
              </a>
              <a href="#">
                <img src={z} />
              </a>
            </div>
          </div>
        </div>
        <div className="diagram">
          <img src={diagram} />
        </div>
      </div>
    </div>
  );
};

export default SliderVideo;
