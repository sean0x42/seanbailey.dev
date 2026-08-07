import type { ReactNode } from "react";

import type { Icon } from "./icons";

interface BadgeProps {
  icon: Icon;
  children?: ReactNode;
}

const Badge = ({ icon: Icon, children }: BadgeProps) => (
  <div className="absolute top-0 right-0 z-10 bg-grey-800 text-teal-400 flex items-center px-3 py-2 rounded-tr pointer-events-none font-medium">
    <Icon className="mr-[4px] flex-shrink-0" />
    {children}
  </div>
);

export default Badge;
