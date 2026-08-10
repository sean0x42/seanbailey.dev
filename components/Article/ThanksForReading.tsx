import type { FC } from "react";
import NextLink from "next/link";

export const ThanksForReading: FC = () => (
  <NextLink href="/" className="styles.wrapper">
    <div>
      <h2 className="styles.heading">Thanks for reading!</h2>
      <p className="styles.copy">
        If you liked that article, why not check out some of my other writing? I
        write about software engineering, product design, and more.
      </p>
      <p className="styles.seeMore" aria-hidden="true">
        See more
      </p>
    </div>
  </NextLink>
);
