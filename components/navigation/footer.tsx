import type { FC } from "react";
import { Bold, Copy } from "../prose";
import { Container, Inline, Stack } from "../layout";
import styles from "./footer.module.css";
import { Brandmark } from "../logo";
import { GitHubIcon } from "./github-icon";
import Link from "next/link";

export const Footer: FC = () => (
  <Container as="footer" marginTop={8} marginBottom={6}>
    <Inline
      className={styles.footer}
      items="center"
      justify="between"
      borderRadius="full"
      gap={4}
      padding={4}
      paddingHorizontal={5}
    >
      <Inline items="center" gap={4}>
        <Link href="/">
          <Brandmark />
        </Link>

        <Stack gap={0}>
          <Copy>
            <Bold>Sean Bailey &copy; {new Date().getFullYear()}</Bold>
          </Copy>
          <Copy>ABN 89 833 741 962</Copy>
        </Stack>
      </Inline>

      <a
        href="https://github.com/sean0x42"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <GitHubIcon />
      </a>
    </Inline>
  </Container>
);
