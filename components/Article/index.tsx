/* eslint-disable @next/next/no-img-element */
import type { FC, ReactNode } from "react";

import { Bold, Copy } from "../prose/copy";
import { Heading } from "../prose/heading";
import { Link } from "../Link";
import { Stack } from "../layout/Stack";
import { ThanksForReading } from "./ThanksForReading";
import type { Attribution } from "@/lib/content";
import { Container } from "../layout";

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
    <Container>
      <Stack space="mt-2">
        {date && (
          <Copy className="md:text-center" prominence="gentle" width="none">
            {date}
          </Copy>
        )}

        <Heading size={1} align="center" variant="title">
          {title}
        </Heading>
      </Stack>
    </Container>

    <Container width="prose">
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
    </Container>
  </article>
);

export { Bold };
