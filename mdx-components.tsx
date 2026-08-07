/* eslint-disable @next/next/no-img-element */
import type { MDXComponents } from "mdx/types";
import type { ComponentProps, ReactNode } from "react";

import ArticleCaption from "./components/Article/Caption";
import ArticleFigure from "./components/Article/Figure";
import YouTube from "./components/Article/YouTube";
import { Bold } from "./components/Copy";
import Heading from "./components/Heading";
import Link from "./components/Link";
import Column from "./components/Project/Column";
import ColumnSpacer from "./components/Project/ColumnSpacer";
import Columns from "./components/Project/Columns";
import IncompleteWarning from "./components/Project/IncompleteWarning";
import ThreeColumns from "./components/Project/ThreeColumns";
import TwoColumns from "./components/Project/TwoColumns";

type ContentType = "articles" | "projects";

interface MdxTextProps {
  children?: ReactNode;
}

const articleComponents = {
  Figure: ArticleFigure,
  Caption: ArticleCaption,
  YouTube,
  h1: ({ children }: MdxTextProps) => (
    <Heading level={1} className="mt-16">
      {children}
    </Heading>
  ),
  h2: ({ children }: MdxTextProps) => (
    <Heading level={2} className="mt-12">
      {children}
    </Heading>
  ),
  a: ({ children, href }: ComponentProps<"a">) => (
    <Link to={href ?? "#"} external>
      {children}
    </Link>
  ),
  ul: ({ children, ...props }: ComponentProps<"ul">) => (
    <ul className="pl-[1.66667em] my-4 list-disc" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: ComponentProps<"ol">) => (
    <ol className="pl-[1.66667em] my-4 list-decimal" {...props}>
      {children}
    </ol>
  ),
  strong: Bold,
} satisfies MDXComponents;

const projectComponents = {
  ColumnSpacer,
  Column,
  Columns,
  IncompleteWarning,
  ThreeColumns,
  TwoColumns,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return {
    Figure: ArticleFigure,
    Caption: ArticleCaption,
    YouTube,
    ColumnSpacer,
    Column,
    Columns,
    IncompleteWarning,
    ThreeColumns,
    TwoColumns,
  };
}

export function withContentImages(
  components: MDXComponents,
  type: ContentType,
  slug: string,
): MDXComponents {
  const image = ({ src, ...props }: ComponentProps<"img">) => {
    const contentSrc =
      typeof src === "string" && /^\.\.?\//.test(src)
        ? `/content/${type}/${slug}/${src.replace(/^\.\//, "")}`
        : src;
    return <img {...props} src={contentSrc} alt={props.alt ?? ""} />;
  };

  return { ...components, img: image };
}

export { articleComponents, projectComponents };
