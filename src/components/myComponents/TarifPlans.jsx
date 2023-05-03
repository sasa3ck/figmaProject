import React from "react";
import { planPlus, planMinus } from "../../img/index";

const TarifPlans = (props) => {
  let color = props.active ? "#ECECEC" : "#71717E";

  return (
    <div className="tarif">
      <p style={{ color: color }}>
        <img src={props.active ? planPlus : planMinus} />
        {props.name}
      </p>
      <span>{props.active ? props.tarif : ""}</span>
    </div>
  );
};

export default TarifPlans;
