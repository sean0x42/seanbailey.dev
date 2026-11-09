import type { FC, ReactNode } from "react";
import { Bold, Copy, Heading } from "../prose";
import { ThanksForReading } from "./ThanksForReading";
import { Container, Stack } from "../layout";

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

      <Heading size={1} align="center" variant="title">
        {title}
      </Heading>
    </Stack>

    <div className="prose">{children}</div>

    <ThanksForReading />
  </Container>
);

export { Bold };
