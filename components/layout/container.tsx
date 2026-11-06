import type { ElementType } from "react";
import styles from "./container.module.css";
import { merge } from "@/lib/classname";
import {
  Box,
  type BoxOwnProps,
  type BoxProps,
  type PolymorphicProps,
} from "./box";

interface ContainerOwnProps extends BoxOwnProps {
  width?: "default" | "prose";
}

export type ContainerProps<C extends ElementType = "div"> = PolymorphicProps<
  C,
  ContainerOwnProps
>;

export function Container<C extends ElementType = "div">({
  width = "default",
  className,
  ...props
}: ContainerProps<C>) {
  return (
    <Box<C>
      data-component="container"
      className={merge(styles.container, className)}
      data-width={width}
      {...(props as BoxProps<C>)}
    />
  );
}
