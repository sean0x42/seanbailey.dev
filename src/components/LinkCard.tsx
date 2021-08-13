import React from "react";
import { Link } from "gatsby";

import ArrowNarrowRightIcon from "./icons/ArrowNarrowRight";
import Card from "./Card";
import Copy from "./Copy";
import Heading from "./Heading";
import Stack from "./layout/Stack";
import { Image } from "../app/types";

interface LinkCardProps {
  className?: string;
  to: string;
  cover?: Image;
  coverBg?: string;
  title: string;
  date: string;
  copy: string;
  more: string;
  badge?: JSX.Element;
}

const LinkCard: React.FunctionComponent<LinkCardProps> = (props) => {
  const linkStyles = ["group", "block focus:outline-none"];
  props.className && linkStyles.push(props.className);

  return (
    <Link to={props.to} className={linkStyles.join(" ")}>
      <Card cover={props.cover} coverBg={props.coverBg} badge={props.badge}>
        <Stack space="mt-2">
          <Heading level={3}>{props.title}</Heading>
          <Copy variant="suppressed">{props.date}</Copy>
          <Copy>{props.copy}</Copy>

          <Copy
            className="flex items-center group-hover:text-teal-500 transition-colors"
            aria-hidden="true"
            variant="heavy"
          >
            {props.more ?? "More"}
            <ArrowNarrowRightIcon className="ml-1 transition-transform transform group-hover:translate-x-2" />
          </Copy>
        </Stack>
      </Card>
    </Link>
  );
};

export default LinkCard;
