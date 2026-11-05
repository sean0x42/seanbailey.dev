import type { FC, HTMLAttributes, ReactNode } from "react";

export const Bold = ({ children }: { children?: ReactNode }) => (
  <strong className="text-teal-400 font-bold">
    {children}
  </strong>
);

type Variant = "suppressed" | "normal" | "highlighted" | "heavy" | "large";

export interface CopyProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  variant?: Variant;
  width?: "prose" | "none";
}

const impactVariants: Record<Variant, string> = {
  suppressed: "text-grey-300",
  normal: "text-grey-200",
  highlighted: "text-teal-400",
  heavy: "text-white",
  large: "text-grey-100 font-medium text-xl",
};

const widthVariants = {
  prose: "max-w-prose",
  none: "max-w-none",
};

export const Copy: FC<CopyProps> = ({
  variant: impact = "normal",
  width = "prose",
  className,
  children,
  ...props
}) => {
  const classes = ["font-normal", widthVariants[width], impactVariants[impact]];
  if (className) classes.push(className);

  return (
    <p className={classes.join(" ")} {...props}>
      {children}
    </p>
  );
};
