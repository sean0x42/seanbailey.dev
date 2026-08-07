import NextLink from "next/link";
import type { ReactNode } from "react";

import ArrowNarrowRightIcon from "./icons/ArrowNarrowRight";

interface ButtonLinkProps {
  className?: string;
  to: string;
  children?: ReactNode;
}

const ButtonLink = ({ className, to, children }: ButtonLinkProps) => {
  const classes = ["inline-flex items-center font-medium dark:text-white"];
  if (className) classes.push(className);

  return (
    <NextLink className={classes.join(" ")} href={to}>
      {children}
      <ArrowNarrowRightIcon className="ml-2" />
    </NextLink>
  );
};

export default ButtonLink;
