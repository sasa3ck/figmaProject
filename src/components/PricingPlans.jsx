import { observer } from "mobx-react-lite";
import React from "react";
import PackageServices from "./myComponents/PackageServices";
import SwitchSlider from "../store/switchSlider";
import {
  blockOne,
  blockTwo,
  blockThree,
  blockFour,
  blockSix,
  blockSeven,
} from "./myComponents/PlansInfo";

const PricingPlans = observer(() => {
  console.log(SwitchSlider.yearOrMonth);
  return (
    <div className="wrapperPricingPlans">
      <div className="pricingPlans">
        <div>
          <h1>Pricing plans</h1>
          <h3>Transparent pricing. No hidden fees.</h3>
          <div className="preSwitch">
            <span>Monthly</span>
            <div>
              <label className="switch">
                <input type="checkbox" className="switchInput" />
                <span
                  onClick={() => SwitchSlider.changeYearOrMonth()}
                  className="switchSlider"
                ></span>
              </label>
            </div>
            <span>Annually</span>
          </div>
        </div>
        <div className="package">
          <div
            style={{
              display: SwitchSlider.yearOrMonth ? "none" : "flex",
            }}
            className="packageServices switchYear"
          >
            <PackageServices
              classTop="classTopOne"
              classBottom="classBottomOne"
              params={blockOne}
            />
            <PackageServices
              classTop="classTopTwo"
              classBottom="classBottomTwo"
              params={blockTwo}
            />
            <PackageServices
              classTop="classTopThree"
              classBottom="classBottomThree"
              params={blockThree}
            />
          </div>
          <div
            style={{
              display: SwitchSlider.yearOrMonth ? "flex" : "none",
            }}
            className="packageServices mt-8 flex items-center space-x-2 switchMonth"
          >
            <PackageServices
              classTop="classTopOne"
              classBottom="classBottomOne"
              params={blockFour}
            />
            <PackageServices
              classTop="classTopTwo"
              classBottom="classBottomTwo"
              params={blockSix}
            />
            <PackageServices
              classTop="classTopThree"
              classBottom="classBottomThree"
              params={blockSeven}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default PricingPlans;
