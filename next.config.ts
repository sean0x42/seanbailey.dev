import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-frontmatter", "remark-gfm"],
  },
});

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
};

export default withMDX(nextConfig);
