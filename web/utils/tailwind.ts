/** Build a classNames string from an array of values.
 *  Borrowed from: https://www.skies.dev/tailwind-react-trick
 */
export function classNames(
  ...classes: (false | null | undefined | string)[]
): string {
  return classes.filter(Boolean).join(' ');
}

/** Map of Voice Type to Tailwind gradients (from/to) */
export const voiceToGradientMap: Record<string, string> = {
  baritone: 'from-cyan-600 to-blue-600',
  bass: 'from-blue-600 to-bluegray-600',
  bassBaritone: 'from-red-600 to-amber-600',
  contralto: 'from-indigo-600 to-fuchsia-600',
  counterTenor: 'from-lime-600 to-emerald-700',
  mezzoSoprano: 'from-green-500 to-cyan-700',
  soprano: 'from-amber-500 to-rose-500',
  tenor: 'from-fuchsia-600 to-red-600',
};

export const voiceHoverToGradientMap: Record<string, string> = {
  baritone: 'hover:from-blue-600 hover:to-cyan-600',
  bass: 'hover:from-bluegray-600 hover:to-blue-600',
  bassBaritone: 'hover:from-amber-600 hover:to-red-600',
  contralto: 'hover:from-fuchsia-600 hover:to-indigo-600',
  counterTenor: 'hover:from-emerald-700 hover:to-lime-600',
  mezzoSoprano: 'hover:from-cyan-700 hover:to-green-500',
  soprano: 'hover:from-rose-500 hover:to-amber-500',
  tenor: 'hover:from-red-600 hover:to-fuchsia-600',
};
