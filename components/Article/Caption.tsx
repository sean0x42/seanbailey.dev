import type { ReactNode } from "react";

const Caption = ({ children }: { children?: ReactNode }) => (
  <figcaption className="mx-5 text-center text-grey-500 dark:text-grey-300">
    {children}
  </figcaption>
);

export default Caption;
