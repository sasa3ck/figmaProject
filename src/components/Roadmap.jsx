import React from "react";
import TextColCard from "./myComponents/TextColCard";
import { timer, dollar, heart } from "../img/index";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="title">
        <h1>What’s on our roadmap?</h1>
        <h2>
          Businesses and dev teams of every size have already made crawless
          their main web automation platform
        </h2>
      </div>
      <div className="cards">
        <TextColCard
          img={timer}
          h3="Time tracking"
          p="Nec feugiat in fermentum posuere urna nec. Nibh nisl condimentum id venenatis a condimentum vitae sapien."
        />
        <TextColCard
          img={dollar}
          h3="Sell your bots"
          p="Et netus et malesuada fames ac turpis egestas sed tempus. "
        />
        <TextColCard
          img={heart}
          h3="Approval process"
          p="Nibh nisl condimentum id venenatis a condimentum vitae sapien."
        />
      </div>
      <div className="notify">
        <p>Let me know when the new features will be implemented</p>
        <form>
          <input type="text" placeholder="My email" />
          <button>Notify me</button>
        </form>
      </div>
    </div>
  );
};

export default Roadmap;
