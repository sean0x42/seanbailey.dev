import type { FC } from "react";
import Link from "next/link";
import { Container, Inline } from "@sean0x42/koi/layout";

import { Logo } from "../logo";
import styles from "./header.module.css";

export const Header: FC = () => (
  <Container
    as="header"
    direction="row"
    gap={4}
    justifyContent="between"
    marginTop={6}
    marginBottom={8}
  >
    <Logo />

    <Inline as="nav" className={styles.nav} gap={4}>
      <Link href="/articles">Articles</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/photos">Photos</Link>
    </Inline>
  </Container>
);
