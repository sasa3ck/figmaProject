import React from "react";
import { planPlus, planMinus } from "../../img/index";

const TarifPlans = (props) => {
  let color = props.active ? "#ECECEC" : "#71717E";

  return (
    <div className="flex justify-between py-[1px] items-center">
      <p className="flex py-[6px]" style={{ color: color }}>
        <img
          src={props.active ? planPlus : planMinus}
          className="planPlus mr-2"
        />
        {props.name}
      </p>
      <span>{props.active ? props.tarif : ''}</span>
    </div>
  );
};

export default TarifPlans;
