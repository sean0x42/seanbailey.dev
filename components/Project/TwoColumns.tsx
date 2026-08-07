import type { ReactNode } from "react";

const TwoColumns = ({ children }: { children?: ReactNode }) => (
  <div className="styles.wrapper">{children}</div>
);

export default TwoColumns;
