import React from "react";
import { Edge, miniLogo } from "../img/index";
import ExFeatureBtn from "./myComponents/ExFeatureBtn";

const ExploreFeatures = () => {
  return (
    <div className="exFeature max-w-[1280px] mx-auto px-16 py-12">
      <div className="grid grid-cols-2 gap-4">
        <ExFeatureBtn
          img={Edge}
          h1="Edge"
          btn="Explore Edge features"
          p="Libero volutpat sed cras ornare arcu dui vivamus arcu. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum."
          imgClass="mr-8 max-w-[64px] max-h-[64px] w-full h-full Edge"
        />
        <ExFeatureBtn
          img={miniLogo}
          h1="Store"
          btn="Explore Store features"
          p="Libero volutpat sed cras ornare arcu dui vivamus arcu. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum."
          imgClass="mr-8 max-w-[64px] max-h-[64px] w-full h-full Store"
        />
      </div>
    </div>
  );
};

export default ExploreFeatures;
