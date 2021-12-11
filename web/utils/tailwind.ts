/** Build a classNames string from an array of values.
 *  Borrowed from: https://www.skies.dev/tailwind-react-trick
 */
export function classNames(
  ...classes: (false | null | undefined | string)[]
): string {
  // Filter where truthy (value present)
  return classes.filter(Boolean).join(' ');
}

/** Map of Voice Type to Tailwind gradients (from/to) */
export const voiceToGradientMap: Record<string, string> = {
  baritone: 'from-cyan-600 to-blue-600',
  bass: 'from-blue-600 to-slate-600',
  bassBaritone: 'from-red-600 to-amber-600',
  contralto: 'from-indigo-600 to-fuchsia-600',
  counterTenor: 'from-lime-600 to-emerald-700',
  mezzoSoprano: 'from-emerald-500 to-cyan-700',
  soprano: 'from-amber-500 to-rose-500',
  tenor: 'from-fuchsia-600 to-red-600',
};

export const voiceHoverToGradientMap: Record<string, string> = {
  baritone: 'hover:from-cyan-700 hover:to-blue-700',
  bass: 'hover:from-blue-700 hover:to-slate-700',
  bassBaritone: 'hover:from-red-700 hover:to-amber-700',
  contralto: 'hover:from-indigo-700 hover:to-fuchsia-700',
  counterTenor: 'hover:from-lime-700 hover:to-emerald-800',
  mezzoSoprano: 'hover:from-emerald-600 hover:to-cyan-800',
  soprano: 'hover:from-amber-600 hover:to-rose-600',
  tenor: 'hover:from-fuchsia-700 hover:to-red-700',
};
