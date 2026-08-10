/* eslint-disable @next/next/no-img-element */
import type { FC, ReactNode } from "react";

import { Bold, Copy } from "./Copy";
import { Heading } from "./Heading";
import { Link } from "./Link";
import { Stack } from "./layout/Stack";
import { Wrapper } from "./Wrapper";
import { ThanksForReading } from "./Article/ThanksForReading";
import type { Attribution } from "@/lib/content";

interface ArticleProps {
  coverImage?: string;
  attribution?: Attribution;
  title: string;
  date: string;
  excerpt: string;
  children?: ReactNode;
}

export const Article: FC<ArticleProps> = ({
  coverImage,
  attribution,
  title,
  date,
  children,
}) => (
  <article>
    <Wrapper width="max-w-prose">
      {coverImage && (
        <img
          src={coverImage}
          className="bg-gray-900 -mx-5 sm:mx-0 sm:rounded leading-none align-middle mb-9"
          alt={title}
          aria-hidden="true"
        />
      )}
    </Wrapper>

    <Wrapper width="max-w-prose" className="md:my-10">
      <Stack space="mt-2">
        {date && (
          <Copy className="md:text-center" variant="suppressed" width="none">
            {date}
          </Copy>
        )}

        <Heading level={1} className="md:text-center" variant="title">
          {title}
        </Heading>
      </Stack>
    </Wrapper>

    <Wrapper width="max-w-prose" className="text-grey-900 dark:text-grey-200">
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
