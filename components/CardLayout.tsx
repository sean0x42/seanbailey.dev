import type { FC, PropsWithChildren } from "react";

export const CardLayout: FC<PropsWithChildren> = ({ children }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:gap-10 lg:gap-12">
    {children}
  </ul>
);
