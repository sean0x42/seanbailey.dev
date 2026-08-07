import NextLink from "next/link";
import type { ReactNode } from "react";

import ArrowNarrowRightIcon from "./icons/ArrowNarrowRight";
import Card from "./Card";
import Copy from "./Copy";
import Heading from "./Heading";
import Stack from "./layout/Stack";

interface LinkCardProps {
  className?: string;
  to: string;
  cover?: string;
  coverBg?: string;
  title: string;
  date: string;
  copy: string;
  more: string;
  badge?: ReactNode;
}

const LinkCard = ({
  className,
  to,
  cover,
  coverBg,
  title,
  date,
  copy,
  more,
  badge,
}: LinkCardProps) => {
  const linkStyles = ["group", "flex h-full flex-col focus:outline-none"];
  if (className) linkStyles.push(className);

  return (
    <NextLink href={to} className={linkStyles.join(" ")}>
      <Card cover={cover} coverBg={coverBg} badge={badge}>
        <Stack space="mt-2" className="flex flex-1 flex-col" pushLast>
          <Heading level={3}>{title}</Heading>
          <Copy variant="suppressed">{date}</Copy>
          <Copy>{copy}</Copy>

          <Copy
            className="flex items-center group-hover:text-teal-500 transition-colors"
            aria-hidden="true"
            variant="heavy"
          >
            {more ?? "More"}
            <ArrowNarrowRightIcon className="ml-1 transition-transform transform group-hover:translate-x-2" />
          </Copy>
        </Stack>
      </Card>
    </NextLink>
  );
};

export default LinkCard;
