import React from "react";

const TextColCard = (props) => {
  return (
    <div className="card">
      <img src={props.img} />
      <h3>{props.h3}</h3>
      <p>{props.p}</p>
    </div>
  );
};

export default TextColCard;
