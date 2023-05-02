import React from "react";
import TarifPlans from "./TarifPlans";

const PackageServices = (props) => {
  return (
    <div>
      <div className={props.classTop}>
        <p>{props.params.name}</p>
        <div className="flex items-center">
          <div className="price mr-1">{props.params.price}</div>
          <div className="yearOrMonth">{props.params.yearOrMonth}</div>
        </div>
      </div>
      <div className={props.classBottom}>
        <div>
          <TarifPlans active={true} name="Local" tarif={props.params.local} />
          <TarifPlans active={true} name="Edge" tarif="from $0.3/h" />
          <TarifPlans active={true} name="Fingerprint" tarif="from $1" />
          <TarifPlans active={true} name="Captcha" tarif="Addon" />
          <TarifPlans active={true} name="Proxy" tarif="Addon" />
          <TarifPlans
            active={true}
            name="Community support"
            tarif="10 h/month"
          />
          <TarifPlans active={true} name="Storages" tarif="" />
          <TarifPlans
            active={props.params.activeOne}
            name="Versioning"
            tarif=""
          />
          <TarifPlans active={props.params.activeOne} name="Metrics" tarif="" />
          <TarifPlans active={props.params.activeOne} name="Store" tarif="" />
          <TarifPlans
            active={props.params.activeTwo}
            name="Private Edge"
            tarif="$10"
          />
          <TarifPlans
            active={props.params.activeTwo}
            name="Collaboration"
            tarif="$5/user"
          />
          <TarifPlans
            active={props.params.activeTwo}
            name="Private Store "
            tarif="3 free"
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            style={{ background: props.params.bg, color: props.params.color }}
          >
            {props.params.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageServices;
