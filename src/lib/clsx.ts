// Tiny classname joiner — filters out falsy values so you can write
// conditional classes without pulling in a dependency.
export function clsx(
  ...values: Array<string | false | null | undefined>
): string {
  return values.filter(Boolean).join(" ");
}
