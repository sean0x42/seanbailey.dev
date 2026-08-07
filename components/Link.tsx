import NextLink from "next/link";
import type { ReactNode } from "react";

interface LinkProps {
  to: string;
  external?: boolean;
  children?: ReactNode;
}

const styles =
  "underline underline-teal-700 dark:underline-teal-400 text-grey-900 dark:text-white font-normal focus:outline-none focus:ring-2 ring-teal-500";

const Link = ({ to, external, children }: LinkProps) => {
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

export default Link;
