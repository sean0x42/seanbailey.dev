import type { FC } from "react";
import NextLink from "next/link";

export const ThanksForReading: FC = () => (
  <NextLink href="/">
    <div>
      <h2 className="font-title text-white">Thanks for reading!</h2>
      <p>
        If you liked that article, why not check out some of my other writing? I
        write about software engineering, product design, and more.
      </p>
      <p aria-hidden="true">
        See more
      </p>
    </div>
  </NextLink>
);
