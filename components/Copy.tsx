import type { FC, HTMLAttributes, ReactNode } from "react";

export const Bold = ({ children }: { children?: ReactNode }) => (
  <strong className="text-teal-400 font-bold">{children}</strong>
);

type Prominence = "gentle" | "default" | "prominent";

export interface CopyProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  prominence?: Prominence;
  width?: "prose" | "none";
}

const prominences: Record<Prominence, string> = {
  gentle: "text-grey-700",
  default: "text-grey-800",
  prominent: "text-grey-100 font-medium text-xl",
};

const widthVariants = {
  prose: "max-w-prose",
  none: "max-w-none",
};

export const Copy: FC<CopyProps> = ({
  prominence = "default",
  width = "prose",
  className,
  children,
  ...props
}) => {
  const classes = [
    "font-normal",
    widthVariants[width],
    prominences[prominence],
  ];

  if (className) classes.push(className);

  return (
    <p className={classes.join(" ")} {...props}>
      {children}
    </p>
  );
};
