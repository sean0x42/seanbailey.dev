import type { ElementType, FC, PropsWithChildren } from "react";
import styles from "./heading.module.css";

interface HeadingProps extends PropsWithChildren {
  size: 1 | 2 | 3 | 4 | 5 | 6;
  align?: "left" | "center" | "right";
  variant?: "default" | "title";
  component?: ElementType;
}

export const Heading: FC<HeadingProps> = ({
  size,
  align = "left",
  variant = "default",
  component: Component = `h${size}`,
  children,
}) => (
  <Component
    data-component="heading"
    className={styles.heading}
    data-size={size}
    data-align={align}
    data-variant={variant}
  >
    {children}
  </Component>
);
