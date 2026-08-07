import type { ReactNode } from "react";

import Caption from "./Caption";

interface FigureProps {
  caption?: string;
  children?: ReactNode;
}

const Figure = ({ caption, children }: FigureProps) => (
  <figure className="my-8 -mx-5 sm:mx-0">
    {children}
    {caption && <Caption>{caption}</Caption>}
  </figure>
);

export default Figure;
