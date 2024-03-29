import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface NameMeta {
  name: string;
  content: string;
}

interface PropertyMeta {
  property: string;
  content: string;
}

type Meta = NameMeta | PropertyMeta;

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
  noIndex?: boolean;
}

const Seo: FunctionComponent<SeoProps> = ({
  description,
  lang = "en",
  meta = [],
  title,
  ...props
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  props.noIndex &&
    meta.push({
      name: "robots",
      content: "noindex",
    });

  const metaDescription = description ?? site.siteMetadata.description;
  const defaultMeta: Meta[] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={defaultMeta.concat(meta)}
    />
  );
};

export default Seo;
