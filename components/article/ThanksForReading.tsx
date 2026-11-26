import type { FC } from "react";
import NextLink from "next/link";
import { Copy, Heading } from "@sean0x42/koi/prose";

export const ThanksForReading: FC = () => (
  <div>
    <Heading size={2}>Thanks for reading!</Heading>

    <Copy>
      If you liked that article, why not check out some of my other writing? I
      write about software engineering, product design, and more.
    </Copy>

    <NextLink href="/">
      <p aria-hidden="true">See more</p>
    </NextLink>
  </div>
);
