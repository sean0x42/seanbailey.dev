import type { ComponentProps, FC, PropsWithChildren } from "react";
import styles from "./copy.module.css";

export const Bold: FC<PropsWithChildren> = ({ children }) => (
  <strong className="text-teal-400 font-bold">{children}</strong>
);

export interface CopyProps extends Omit<ComponentProps<"p">, "className"> {
  align?: "left" | "center" | "right";
  size?: "default" | "large";
}

export const Copy: FC<CopyProps> = ({
  align = "left",
  size = "default",
  ...props
}) => (
  <p
    data-component="copy"
    data-align={align}
    data-size={size}
    className={styles.copy}
    {...props}
  />
);
