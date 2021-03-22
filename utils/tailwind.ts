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
  soprano: 'from-amber-600 to-rose-500',
  tenor: 'from-fuchsia-600 to-red-600',
};

export const voiceHoverToGradientMap: Record<string, string> = {
  baritoneHover: 'hover:from-blue-700 hover:to-cyan-700',
  bassHover: 'hover:from-bluegray-700 hover:to-blue-700',
  bassBaritoneHover: 'hover:from-amber-600 hover:to-red-700',
  contraltoHover: 'hover:from-fuchsia-700 hover:to-indigo-700',
  counterTenorHover: 'hover:from-emerald-800 hover:to-lime-700',
  mezzoSopranoHover: 'hover:from-cyan-800 hover:to-green-600',
  sopranoHover: 'hover:from-rose-600 hover:to-amber-700',
  tenorHover: 'hover:from-red-700 hover:to-fuchsia-700',
};
