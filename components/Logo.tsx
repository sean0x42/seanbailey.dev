import type { FC } from "react";
import NextLink from "next/link";

export const Logo: FC = () => (
  <NextLink
    href="/"
    className="text-xl sm:text-base font-medium text-black dark:text-white focus:outline-none focus:ring-2 ring-teal-600"
  >
    Sean Bailey
  </NextLink>
);
