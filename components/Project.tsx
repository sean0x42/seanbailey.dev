import type { ReactNode } from "react";

import Columns from "./Project/Columns";
import Header from "./Project/Header";
import Logo from "./Project/Logo";
import ThanksForReading from "./Project/ThanksForReading";
import TwoColumns from "./Project/TwoColumns";
import Wrapper from "./Wrapper";

interface ProjectProps {
  coverImage?: string;
  title: string;
  date: string;
  excerpt: string;
  children?: ReactNode;
}

const Project = ({ coverImage, title, date, children }: ProjectProps) => (
  <article>
    <Wrapper className="styles.project">
      <Columns>
        <Logo image={coverImage} />
        <Header title={title} date={date} />
      </Columns>

      {children}

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
