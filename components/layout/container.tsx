import type { ElementType } from "react";
import styles from "./container.module.css";
import { merge } from "@/lib/class-name";
import { Box, type BoxOwnProps, type BoxProps } from "./box";
import type { PolymorphicProps } from "@/lib/props";

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
      paddingHorizontal={5}
      {...(props as BoxProps<C>)}
    />
  );
}
