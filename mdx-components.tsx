/* eslint-disable @next/next/no-img-element */
import type { MDXComponents } from "mdx/types";
import type { ComponentProps, ReactNode } from "react";

import ArticleCaption from "./components/article/Caption";
import ArticleFigure from "./components/article/Figure";
import YouTube from "./components/article/YouTube";
import { Bold, Copy } from "./components/Copy";
import { Heading } from "./components/Heading";
import { Link } from "./components/Link";

type ContentType = "articles" | "projects";

interface MdxTextProps {
  children?: ReactNode;
}

const articleComponents = {
  Figure: ArticleFigure,
  Caption: ArticleCaption,
  YouTube,
  h1: ({ children }: MdxTextProps) => (
    <Heading level={1} className="mt-15">
      {children}
    </Heading>
  ),
  h2: ({ children }: MdxTextProps) => (
    <Heading level={1} className="mt-9">
      {children}
    </Heading>
  ),
  p: ({ children }: MdxTextProps) => <Copy className="my-5">{children}</Copy>,
  a: ({ children, href, ...props }: ComponentProps<"a">) => {
    if ("data-footnote-ref" in props || "data-footnote-backref" in props) {
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link to={href ?? "#"} external>
        {children}
      </Link>
    );
  },
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

export function useMDXComponents(): MDXComponents {
  return {
    Figure: ArticleFigure,
    Caption: ArticleCaption,
    YouTube,
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

export { articleComponents };
