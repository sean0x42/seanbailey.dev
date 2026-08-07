import type { ReactNode } from "react";

const ThreeColumns = ({ children }: { children?: ReactNode }) => (
  <div className="styles.wrapper">{children}</div>
);

export default ThreeColumns;
