import NextLink from "next/link";
import type { FC, PropsWithChildren } from "react";

export interface LinkProps extends PropsWithChildren {
  to: string;
  external?: boolean;
}

const styles =
  "underline underline-teal-700 dark:underline-teal-400 text-grey-900 dark:text-white font-normal focus:outline-none focus:ring-2 ring-teal-500";

export const Link: FC<LinkProps> = ({ to, external, children }) => {
  if (external) {
    return (
      <a href={to} className={styles} tabIndex={0}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={to} className={styles}>
      {children}
    </NextLink>
  );
};
