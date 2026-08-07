import type { ReactNode } from "react";

interface WrapperProps {
  className?: string;
  width?: string;
  children?: ReactNode;
}

const Wrapper = ({ className, width, children }: WrapperProps) => {
  const classes = ["mx-auto px-5", width ?? "max-w-screen-xl"];
  if (className) classes.push(className);

  return <div className={classes.join(" ")}>{children}</div>;
};

export default Wrapper;
