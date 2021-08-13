import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Column from "./Project/Column";
import ColumnSpacer from "./Project/ColumnSpacer";
import Columns from "./Project/Columns";
import Header from "./Project/Header";
import IncompleteWarning from "./Project/IncompleteWarning";
import Logo from "./Project/Logo";
import Seo from "./Seo";
import ThanksForReading from "./Project/ThanksForReading";
import ThreeColumns from "./Project/ThreeColumns";
import TwoColumns from "./Project/TwoColumns";
import Wrapper from "./Wrapper";
import { Image } from "../app/types";

interface ComponentMap {
  [name: string]: React.FunctionComponent<unknown>;
}

const components: ComponentMap = {
  ColumnSpacer,
  Column,
  Columns,
  IncompleteWarning,
  ThreeColumns,
  TwoColumns,
};

interface ProjectProps {
  coverImage: Image;
  title: string;
  date: string;
  excerpt: string;
  body: string;
}

const Project: React.FunctionComponent<ProjectProps> = (props) => (
  <article>
    <Seo title={props.title} description={props.excerpt} />

    <Wrapper className="styles.project">
      <Columns>
        <Logo image={props.coverImage} />
        <Header {...props} />
      </Columns>

      <MDXProvider components={components}>
        <MDXRenderer>{props.body}</MDXRenderer>
      </MDXProvider>

      <hr />
      <Columns>
        <TwoColumns>
          <ThanksForReading />
        </TwoColumns>
      </Columns>
    </Wrapper>
  </article>
);

export default Project;
