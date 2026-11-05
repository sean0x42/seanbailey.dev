/* eslint-disable @next/next/no-img-element */
import type { FC, ReactNode } from "react";

import { Bold, Copy } from "../Copy";
import { Heading } from "../Heading";
import { Link } from "../Link";
import { Stack } from "../layout/Stack";
import { Wrapper } from "../Wrapper";
import { ThanksForReading } from "./ThanksForReading";
import type { Attribution } from "@/lib/content";

interface ArticleProps {
  attribution?: Attribution;
  title: string;
  date: string;
  excerpt: string;
  children?: ReactNode;
}

export const Article: FC<ArticleProps> = ({
  attribution,
  title,
  date,
  children,
}) => (
  <article>
    <Wrapper width="max-w-3xl" className="md:my-12">
      <Stack space="mt-2">
        {date && (
          <Copy className="md:text-center" prominence="gentle" width="none">
            {date}
          </Copy>
        )}

        <Heading level={1} className="md:text-center" variant="title">
          {title}
        </Heading>
      </Stack>
    </Wrapper>

    <Wrapper width="max-w-prose" className="text-grey-200">
      <div className="prose">{children}</div>

      <ThanksForReading />

      {attribution && (
        <Copy className="mt-16">
          Cover image by{" "}
          <Link to={attribution.url} external>
            {attribution.author}
          </Link>
        </Copy>
      )}
    </Wrapper>
  </article>
);

export { Bold };
