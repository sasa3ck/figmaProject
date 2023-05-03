import React from "react";
import { Edge, miniLogo } from "../img/index";
import ExFeatureBtn from "./myComponents/ExFeatureBtn";

const ExploreFeatures = () => {
  return (
    <div className="exFeature">
      <div className="wrapper">
        <ExFeatureBtn
          img={Edge}
          h1="Edge"
          btn="Explore Edge features"
          p="Libero volutpat sed cras ornare arcu dui vivamus arcu. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum."
          imgClass="imgClass Edge"
        />
        <ExFeatureBtn
          img={miniLogo}
          h1="Store"
          btn="Explore Store features"
          p="Libero volutpat sed cras ornare arcu dui vivamus arcu. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum."
          imgClass="imgClass Store"
        />
      </div>
    </div>
  );
};

export default ExploreFeatures;
