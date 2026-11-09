const colorLookupTable = {
  koi600: "var(--color-koi-600)",
  koi500: "var(--color-koi-500)",
  koi400: "var(--color-koi-400)",
  grey900: "var(--color-grey-900)",
  grey800: "var(--color-grey-800)",
  grey700: "var(--color-grey-700)",
  grey600: "var(--color-grey-600)",
  grey500: "var(--color-grey-500)",
  grey400: "var(--color-grey-400)",
  grey300: "var(--color-grey-300)",
  grey200: "var(--color-grey-200)",
  grey100: "var(--color-grey-100)",
  grey0: "var(--color-grey-0)",
  pond900: "var(--color-teal-900)",
  pond800: "var(--color-teal-800)",
  pond700: "var(--color-teal-700)",
  pond600: "var(--color-teal-600)",
  pond500: "var(--color-teal-500)",
  pond400: "var(--color-teal-400)",
} as const satisfies Record<string, string>;

export type Color = keyof typeof colorLookupTable;

export function colorToCssVariable(
  color: Color | undefined,
): string | undefined {
  if (!color) return undefined;
  return colorLookupTable[color];
}
