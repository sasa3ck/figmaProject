import React from "react";
import {
  codeEditor,
  IconWebdriver,
  IconDevtools,
  IconM,
  IconTerminal,
} from "../img/index";
import TextColCard from "./myComponents/TextColCard";

const TextCol = () => {
  return (
    <div className="textCol max-w-[1280px] mx-auto grid grid-cols-3 gap-10">
      <TextColCard
        img={IconWebdriver}
        h3="Webdriver"
        p="Nec feugiat in fermentum posuere urna nec. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Et netus et malesuada fames ac turpis egestas sed tempus. "
      />
      <TextColCard
        img={codeEditor}
        h3="3rd party libraries"
        p="Nec feugiat in fermentum posuere urna nec. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Et netus et malesuada fames ac turpis egestas sed tempus. "
      />
      <TextColCard
        img={IconDevtools}
        h3="Devtools"
        p="Nec feugiat in fermentum posuere urna nec. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Et netus et malesuada fames ac turpis egestas sed tempus. "
      />
      <TextColCard
        img={IconM}
        h3="Metrics/state"
        p="Nec feugiat in fermentum posuere urna nec. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Et netus et malesuada fames ac turpis egestas sed tempus. "
      />
      <TextColCard
        img={IconM}
        h3="Version control system"
        p="Nec feugiat in fermentum posuere urna nec. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Et netus et malesuada fames ac turpis egestas sed tempus. "
      />
      <TextColCard
        img={IconM}
        h3="Collaboration"
        p="Nec feugiat in fermentum posuere urna nec. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Et netus et malesuada fames ac turpis egestas sed tempus. "
      />
      <TextColCard
        img={IconTerminal}
        h3="Terminal"
        p="Nec feugiat in fermentum posuere urna nec. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Et netus et malesuada fames ac turpis egestas sed tempus. "
      />
      <TextColCard
        img={IconM}
        h3="Documentation"
        p="Nec feugiat in fermentum posuere urna nec. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Et netus et malesuada fames ac turpis egestas sed tempus. "
      />
    </div>
  );
};

export default TextCol;
