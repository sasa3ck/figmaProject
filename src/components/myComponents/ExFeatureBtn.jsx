import React from "react";

const ExFeatureBtn = (props) => {
  return (
    <div className="card">
      <div className="imgCard">
        <img
          src={props.img}
          width={64}
          height={64}
          className={props.imgClass}
        />
        <h1>{props.h1}</h1>
      </div>
      <div className="textCard">
        <p>{props.p}</p>
      </div>
      <div className="textbtn">
        <a href="#">
          {props.btn}
          <span>&#8250;</span>
        </a>
      </div>
    </div>
  );
};

export default ExFeatureBtn;
