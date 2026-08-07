import type { ReactNode } from "react";

const Columns = ({ children }: { children?: ReactNode }) => (
  <div className="styles.columns">{children}</div>
);

export default Columns;
