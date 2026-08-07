import type { ReactNode } from "react";

const CardLayout = ({ children }: { children?: ReactNode }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 sm:gap-10 md:gap-12">
    {children}
  </ul>
);

export default CardLayout;
