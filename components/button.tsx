import type { FC, MouseEventHandler, PropsWithChildren, Ref } from "react";
import styles from "./button.module.css";

export interface ButtonProps extends PropsWithChildren {
  ref?: Ref<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const PrimaryButton: FC<ButtonProps> = ({ ref, onClick, children }) => (
  <button
    ref={ref}
    data-component="primary-button"
    onClick={onClick}
    className={styles.primaryButton}
  >
    {children}
  </button>
);
