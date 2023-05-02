import React from "react";

const SilverVideoBtn = (props) => {
  return (
    <div className="btn">
      <img src={props.img} />
      <a href="#">{props.text}</a>
    </div>
  );
};

export default SilverVideoBtn;
