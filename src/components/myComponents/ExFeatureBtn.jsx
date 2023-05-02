import React from "react";

const ExFeatureBtn = (props) => {
  return (
    <div className="cart">
      <div className="flex items-center">
        <img
          src={props.img}
          width={64}
          height={64}
          className={props.imgClass}
        />
        <h1>{props.h1}</h1>
      </div>
      <div className="pt-4 pb-8">
        <p>{props.p}</p>
      </div>
      <div>
        <a href="#" className="relative">
          {props.btn}{" "}
          <span className="ml-2 absolute right-6 top-2">&#8250;</span>
        </a>
      </div>
    </div>
  );
};

export default ExFeatureBtn;
