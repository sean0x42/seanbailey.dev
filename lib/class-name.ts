export function merge(...classNames: (string | undefined)[]): string {
  return classNames.filter(Boolean).join(" ");
}
