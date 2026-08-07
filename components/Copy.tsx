import type { HTMLAttributes, ReactNode } from "react";

export const Bold = ({ children }: { children?: ReactNode }) => (
  <strong className="text-grey-700 dark:text-teal-400 font-medium">
    {children}
  </strong>
);

type Variant = "suppressed" | "normal" | "highlighted" | "heavy" | "large";

interface CopyProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  variant?: Variant;
  width?: "prose" | "none";
}

const impactVariants: Record<Variant, string> = {
  suppressed: "text-grey-500 dark:text-grey-300",
  normal: "text-grey-700 dark:text-grey-200",
  highlighted: "text-teal-800 dark:text-teal-400",
  heavy: "text-grey-900 dark:text-white",
  large:
    "text-grey-800 dark:text-grey-100 font-medium dark:font-medium text-xl",
};

const widthVariants = {
  prose: "max-w-prose",
  none: "max-w-none",
};

const Copy = ({
  variant: impact = "normal",
  width = "prose",
  className,
  children,
  ...props
}: CopyProps) => {
  const classes = [
    "dark:font-light",
    widthVariants[width],
    impactVariants[impact],
  ];
  if (className) classes.push(className);

  return (
    <p className={classes.join(" ")} {...props}>
      {children}
    </p>
  );
};

export default Copy;
