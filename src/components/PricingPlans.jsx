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
    <div className="bg-[#1C1C23]">
      <div className="pricingPlans max-w-[1280px] mx-auto">
        <div>
          <h1>Pricing plans</h1>
          <h3>Transparent pricing. No hidden fees.</h3>
          <div className="flex justify-center items-center">
            <span>Monthly</span>
            <div>
              <label className="switch mx-2">
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
        <div className="flex">
          <div
            style={{
              display: SwitchSlider.yearOrMonth ? "none" : "flex",
            }}
            className="packageServices mt-8 flex items-center space-x-2 switchYear"
          >
            <PackageServices
              classTop="classTop w-[386px] h-[120px] bg-[#2F2F3D] px-16 pt-8 pb-4 rounded-tl-2xl rounded-tr-2xl"
              classBottom="classBottom w-[386px] h-[644px] bg-[#25252E] rounded-bl-2xl rounded-br-2xl pt-4 px-11"
              params={blockOne}
            />
            <PackageServices
              classTop="classTop w-[396px] h-[144px] bg-[#4D41CB] px-16 pt-10 pb-8 rounded-tl-2xl rounded-tr-2xl"
              classBottom="classBottom w-[396px] h-[668px] bg-[#2F2F3D] rounded-bl-2xl rounded-br-2xl py-8 px-12"
              params={blockTwo}
            />
            <PackageServices
              classTop="classTop w-[386px] h-[120px] bg-[#2D2763] px-16 pt-8 pb-4 rounded-tl-2xl rounded-tr-2xl"
              classBottom="classBottom w-[386px] h-[644px] bg-[#25252E] rounded-bl-2xl rounded-br-2xl pt-4 px-11"
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
              classTop="classTop w-[386px] h-[120px] bg-[#2F2F3D] px-16 pt-8 pb-4 rounded-tl-2xl rounded-tr-2xl"
              classBottom="classBottom w-[386px] h-[644px] bg-[#25252E] rounded-bl-2xl rounded-br-2xl pt-4 px-11"
              params={blockFour}
            />
            <PackageServices
              classTop="classTop w-[396px] h-[144px] bg-[#4D41CB] px-16 pt-10 pb-8 rounded-tl-2xl rounded-tr-2xl"
              classBottom="classBottom w-[396px] h-[668px] bg-[#2F2F3D] rounded-bl-2xl rounded-br-2xl py-8 px-12"
              params={blockSix}
            />
            <PackageServices
              classTop="classTop w-[386px] h-[120px] bg-[#2D2763] px-16 pt-8 pb-4 rounded-tl-2xl rounded-tr-2xl"
              classBottom="classBottom w-[386px] h-[644px] bg-[#25252E] rounded-bl-2xl rounded-br-2xl pt-4 px-11"
              params={blockSeven}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default PricingPlans;
