import type { FC, PropsWithChildren, ReactNode } from "react";
import type { Icon } from "./icons";

export interface BadgeProps extends PropsWithChildren {
  icon: Icon;
  children?: ReactNode;
}

export const Badge: FC<BadgeProps> = ({ icon: Icon, children }) => (
  <div className="absolute top-0 right-0 z-10 bg-grey-800 text-teal-400 flex items-center px-3 py-2 rounded-tr pointer-events-none font-medium">
    <Icon className="mr-1 shrink-0" />
    {children}
  </div>
);
