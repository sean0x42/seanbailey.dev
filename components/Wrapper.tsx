import type { FC, ReactNode } from "react";

interface WrapperProps {
  className?: string;
  width?: string;
  children?: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ className, width, children }) => {
  const classes = ["mx-auto px-5", width ?? "max-w-6xl"];
  if (className) classes.push(className);

  return <div className={classes.join(" ")}>{children}</div>;
};
