import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Layout from "../../../components/Layout";
import Project from "../../../components/Project";
import { projectComponents, withContentImages } from "../../../mdx-components";
import {
  formatProjectDate,
  getProjects,
  readContent,
} from "../../../lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = readContent("projects", slug);

  return {
    title: project.title,
    description: project.excerpt,
    openGraph: {
      title: project.title,
      description: project.excerpt,
      type: "website",
      ...(project.cover ? { images: [project.cover] } : {}),
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = readContent("projects", slug);

  if (project.hidden) notFound();

  // The slug is selected at build time by generateStaticParams.
  const { default: Post } = await import(
    `../../../content/projects/${slug}/index.mdx`
  );

  return (
    <Layout>
      <Project
        coverImage={project.cover}
        title={project.title}
        date={`${formatProjectDate(project.startDate)}—${project.endDate ? formatProjectDate(project.endDate) : "Present"}`}
        excerpt={project.excerpt}
      >
        <Post
          components={withContentImages(projectComponents, "projects", slug)}
        />
      </Project>
    </Layout>
  );
}
