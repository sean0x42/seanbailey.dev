import type { FC, PropsWithChildren } from "react";
import NextLink from "next/link";

import { ArrowNarrowRightIcon } from "./icons/ArrowNarrowRight";

export interface ButtonLinkProps extends PropsWithChildren {
  className?: string;
  to: string;
}

export const ButtonLink: FC<ButtonLinkProps> = ({
  className,
  to,
  children,
}: ButtonLinkProps) => {
  const classes = ["inline-flex items-center font-medium dark:text-white"];
  if (className) classes.push(className);

  return (
    <NextLink className={classes.join(" ")} href={to}>
      {children}
      <ArrowNarrowRightIcon className="ml-2" />
    </NextLink>
  );
};
