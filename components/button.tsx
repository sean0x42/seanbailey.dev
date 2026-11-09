import type { ComponentProps, FC } from "react";
import type { LucideIcon } from "lucide-react/types";
import type { Route } from "next";
import Link from "next/link";

import styles from "./button.module.css";
import { merge } from "@/lib/class-name";

interface ButtonOwnProps {
  icon?: LucideIcon;
}

type ButtonLinkProps = Omit<ComponentProps<"a">, "href"> &
  ButtonOwnProps & { href: Route };

type ButtonBaseProps = ComponentProps<"button"> & ButtonOwnProps;

type ButtonProps = ButtonLinkProps | ButtonBaseProps;

function isLinkProps(props: ButtonProps): props is ButtonLinkProps {
  return (props as ButtonLinkProps).href !== undefined;
}

export const PrimaryButton: FC<ButtonProps> = ({
  className,
  icon: Icon,
  children,
  ...props
}) => {
  const Element = isLinkProps(props) ? Link : "button";

  return (
    <Element
      data-component="primary-button"
      className={merge(styles.primaryButton, className)}
      {...props}
    >
      {children}
      {Icon && <Icon />}
    </Element>
  );
};
