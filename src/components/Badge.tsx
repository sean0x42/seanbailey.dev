import React from "react";
import { Icon } from "./Icons";

interface BadgeProps {
  icon: Icon;
}

const Badge: React.FunctionComponent<BadgeProps> = (props) => {
  const Icon = props.icon;

  return (
    <div className="absolute top-0 right-0 z-10 bg-grey-800 text-teal-400 flex items-center px-3 py-2 rounded-tr pointer-events-none font-medium">
      <Icon className="mr-[4px] flex-shrink-0" />
      {props.children}
    </div>
  );
};

export default Badge;
