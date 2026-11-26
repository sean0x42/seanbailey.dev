import type { FC, ReactNode } from "react";
import NextLink from "next/link";
import { Copy, Heading } from "@sean0x42/koi/prose";

import { ArrowNarrowRightIcon } from "./icons/ArrowNarrowRight";
import { Card } from "./Card";
import { Stack } from "./layout";

export interface LinkCardProps {
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

export const LinkCard: FC<LinkCardProps> = ({
  className,
  to,
  cover,
  coverBg,
  title,
  date,
  copy,
  more,
  badge,
}) => {
  const linkStyles = ["group", "flex h-full flex-col focus:outline-none"];
  if (className) linkStyles.push(className);

  return (
    <NextLink href={to} className={linkStyles.join(" ")}>
      <Card cover={cover} coverBg={coverBg} badge={badge}>
        <Stack gap={2}>
          <Heading size={3}>{title}</Heading>
          <Copy>{date}</Copy>
          <Copy>{copy}</Copy>

          <Copy
            className="flex items-center group-hover:text-teal-500 transition-colors"
            aria-hidden="true"
          >
            {more ?? "More"}
            <ArrowNarrowRightIcon className="ml-1 transition-transform transform group-hover:translate-x-2" />
          </Copy>
        </Stack>
      </Card>
    </NextLink>
  );
};
