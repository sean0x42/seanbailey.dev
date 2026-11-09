import type { ComponentPropsWithRef, ElementType } from "react";

export type PolymorphicProps<
  C extends ElementType,
  OwnProps extends object,
> = OwnProps & { as?: C } & Omit<
    ComponentPropsWithRef<C>,
    keyof OwnProps | "as"
  >;
