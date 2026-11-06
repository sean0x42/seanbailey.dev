export type Space = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const spaceToCssVariable = (
  space: Space | undefined,
): string | undefined =>
  space === undefined ? undefined : `var(--spacing-${space})`;
