import type { ReactNode } from "react";

const Column = ({ children }: { children?: ReactNode }) => (
  <div className="styles.wrapper">{children}</div>
);

export default Column;
