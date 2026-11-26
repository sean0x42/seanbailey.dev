import type { FC, ReactNode } from "react";
import { Bold, Copy, Heading } from "@sean0x42/koi/prose";
import { Container, Stack } from "@sean0x42/koi/layout";
import { ThanksForReading } from "./ThanksForReading";

interface ArticleProps {
  title: string;
  date: string;
  excerpt: string;
  children?: ReactNode;
}

export const Article: FC<ArticleProps> = ({ title, date, children }) => (
  <Container as="article" width="prose">
    <Stack gap={2}>
      {date && <Copy align="center">{date}</Copy>}

      <Heading size={1} align="center">
        {title}
      </Heading>
    </Stack>

    <div className="prose">{children}</div>

    <ThanksForReading />
  </Container>
);

export { Bold };
