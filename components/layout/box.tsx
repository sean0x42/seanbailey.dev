import type { CSSProperties, ElementType } from "react";
import { spaceToCssVariable, type Space } from "@/lib/spacing";
import styles from "./box.module.css";
import { merge } from "@/lib/class-name";
import type { PolymorphicProps } from "@/lib/props";
import { colorToCssVariable, type Color } from "@/lib/color";

export interface BoxOwnProps {
  className?: string;
  style?: CSSProperties;
  background?: Color;
  foreground?: Color;
  direction?: "row" | "column";
  items?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "between" | "around";
  gap?: Space;
  padding?: Space;
  paddingVertical?: Space;
  paddingHorizontal?: Space;
  paddingTop?: Space;
  paddingBottom?: Space;
  paddingLeft?: Space;
  paddingRight?: Space;
  margin?: Space;
  marginVertical?: Space;
  marginHorizontal?: Space;
  marginTop?: Space;
  marginBottom?: Space;
  marginLeft?: Space;
  marginRight?: Space;
  borderRadius?: "none" | "small" | "default" | "full";
  "data-component"?: string;
}

export type BoxProps<C extends ElementType = "div"> = PolymorphicProps<
  C,
  BoxOwnProps
>;

export function Box<C extends ElementType = "div">({
  as,
  background,
  foreground,
  direction,
  items = "stretch",
  justify = "start",
  gap,
  padding,
  paddingVertical,
  paddingHorizontal,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginVertical,
  marginHorizontal,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  borderRadius = "none",
  "data-component": dataComponent = "box",
  className,
  style,
  ...elementProps
}: BoxProps<C>) {
  const Element = as ?? "div";

  return (
    <Element
      data-component={dataComponent}
      data-direction={direction}
      data-items={items}
      data-justify={justify}
      data-gap={gap}
      data-border-radius={borderRadius}
      style={{
        background: colorToCssVariable(background),
        color: colorToCssVariable(foreground),
        padding: spaceToCssVariable(padding),
        paddingBlock: spaceToCssVariable(paddingVertical),
        paddingInline: spaceToCssVariable(paddingHorizontal),
        paddingTop: spaceToCssVariable(paddingTop),
        paddingBottom: spaceToCssVariable(paddingBottom),
        paddingLeft: spaceToCssVariable(paddingLeft),
        paddingRight: spaceToCssVariable(paddingRight),
        margin: spaceToCssVariable(margin),
        marginBlock: spaceToCssVariable(marginVertical),
        marginInline: spaceToCssVariable(marginHorizontal),
        marginTop: spaceToCssVariable(marginTop),
        marginBottom: spaceToCssVariable(marginBottom),
        marginLeft: spaceToCssVariable(marginLeft),
        marginRight: spaceToCssVariable(marginRight),
        ...style,
      }}
      className={merge(styles.box, className)}
      {...elementProps}
    />
  );
}

type FixedDirectionBoxProps<C extends ElementType> = BoxProps<C> & {
  direction?: never;
};

export function Stack<C extends ElementType = "div">(
  props: FixedDirectionBoxProps<C>,
) {
  return <Box<C> data-component="stack" {...props} direction="column" />;
}

export function Inline<C extends ElementType = "div">(
  props: FixedDirectionBoxProps<C>,
) {
  return (
    <Box<C> data-component="inline" items="center" {...props} direction="row" />
  );
}
