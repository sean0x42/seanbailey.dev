import type { ElementType, HTMLAttributes, ReactNode } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: number;
  children?: ReactNode;
  variant?: "normal" | "title";
}

const commonHeadingStyles = "text-grey-900 dark:text-white";
const titleHeadingStyles =
  "font-semibold md:font-bold text-3xl md:text-5xl font-title";
const levelHeadingStyles: Record<number, string> = {
  1: "font-semibold text-xl md:text-3xl font-title",
  2: "font-semibold text-md md:text-xl font-title",
  3: "font-semibold dark:font-medium",
};

const Heading = ({
  level: requestedLevel,
  variant = "normal",
  className,
  children,
  ...props
}: HeadingProps) => {
  const level = requestedLevel ? Math.min(6, Math.max(1, requestedLevel)) : 1;
  const classes = [
    commonHeadingStyles,
    variant === "title"
      ? titleHeadingStyles
      : (levelHeadingStyles[level] ?? levelHeadingStyles[3]),
  ];
  if (className) classes.push(className);

  const HeadingElement = `h${level}` as ElementType;

  return (
    <HeadingElement className={classes.join(" ")} {...props}>
      {children}
    </HeadingElement>
  );
};

export default Heading;
