"use client";

import {
  useCallback,
  useId,
  useState,
  type ComponentProps,
  type FC,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { Grid, type GridProps } from "../layout";
import styles from "./radio.module.css";

export interface RadioOption {
  label: ReactNode;
  value: string;
}

export interface RadioGroupProps {
  columns: GridProps["columns"];
  options: RadioOption[];
}

export const RadioGroup: FC<RadioGroupProps> = ({ columns, options }) => {
  const id = useId();
  const [checkedIndex, setCheckedIndex] = useState(0);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        setCheckedIndex((idx) => (idx >= options.length - 1 ? 0 : idx + 1));
        return;
      }

      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        setCheckedIndex((idx) => (idx === 0 ? options.length - 1 : idx - 1));
        return;
      }
    },
    [options],
  );

  return (
    <Grid
      as="ul"
      id={id}
      columns={columns}
      gap={4}
      role="radiogroup"
      aria-activedescendant={`${id}_${checkedIndex}`}
      tabIndex={0}
      className={styles.radioGroup}
      onKeyDownCapture={handleKeyDown}
    >
      {options.map((option, index) => (
        <RadioButton
          key={option.value}
          id={`${id}_${index}`}
          checked={checkedIndex === index}
          onClick={() => setCheckedIndex(index)}
        >
          {option.label}
        </RadioButton>
      ))}
    </Grid>
  );
};

interface RadioButtonProps extends Omit<ComponentProps<"li">, "id"> {
  id: string;
  checked: boolean;
}

const RadioButton: FC<RadioButtonProps> = ({ checked, ...props }) => (
  <li
    className={styles.radioButton}
    role="radio"
    aria-checked={checked}
    {...props}
  />
);
