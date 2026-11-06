import type { FC } from "react";
import styles from "./skip-link.module.css";

export const SkipLink: FC = () => (
  <a href="#main" className={styles.skipLink}>
    Skip to content
  </a>
);
