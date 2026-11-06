import type { ComponentPropsWithRef, ElementType, FC } from "react";
import { spaceToCssVariable, type Space } from "@/lib/spacing";
import styles from "./box.module.css";
import { merge } from "@/lib/classname";

export interface BoxOwnProps {
  className?: string;
  style?: ComponentPropsWithRef<"div">["style"];
  "data-width"?: "default" | "prose";
  direction?: "row" | "column";
  items?: "start" | "center" | "end" | "stretch";
  gap?: Space;
  paddingVertical?: Space;
  paddingHorizontal?: Space;
  paddingTop?: Space;
  paddingBottom?: Space;
  paddingLeft?: Space;
  paddingRight?: Space;
  marginVertical?: Space;
  marginHorizontal?: Space;
  marginTop?: Space;
  marginBottom?: Space;
  marginLeft?: Space;
  marginRight?: Space;
  "data-component"?: string;
}

export type PolymorphicProps<
  C extends ElementType,
  OwnProps extends object,
> = OwnProps & { as?: C } & Omit<
    ComponentPropsWithRef<C>,
    keyof OwnProps | "as"
  >;

export type BoxProps<C extends ElementType = "div"> = PolymorphicProps<
  C,
  BoxOwnProps
>;

export function Box<C extends ElementType = "div">({
  as,
  direction = "row",
  items = "stretch",
  gap,
  paddingVertical,
  paddingHorizontal,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginVertical,
  marginHorizontal,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  "data-component": dataComponent = "box",
  className,
  ...elementProps
}: BoxProps<C>) {
  const Element = as ?? "div";

  return (
    <Element
      data-component={dataComponent}
      data-direction={direction}
      data-items={items}
      data-gap={gap}
      style={{
        paddingBlock: spaceToCssVariable(paddingVertical),
        paddingInline: spaceToCssVariable(paddingHorizontal),
        paddingTop: spaceToCssVariable(paddingTop),
        paddingBottom: spaceToCssVariable(paddingBottom),
        paddingLeft: spaceToCssVariable(paddingLeft),
        paddingRight: spaceToCssVariable(paddingRight),
        marginBlock: spaceToCssVariable(marginVertical),
        marginInline: spaceToCssVariable(marginHorizontal),
        marginTop: spaceToCssVariable(marginTop),
        marginBottom: spaceToCssVariable(marginBottom),
        marginLeft: spaceToCssVariable(marginLeft),
        marginRight: spaceToCssVariable(marginRight),
      }}
      className={merge(styles.box, className)}
      {...elementProps}
    />
  );
}

export const VBox: FC<Omit<BoxProps, "direction">> = (props) => (
  <Box data-component="vbox" direction="column" {...props} />
);

export const HBox: FC<Omit<BoxProps, "direction">> = (props) => (
  <Box data-component="hbox" direction="row" {...props} />
);
