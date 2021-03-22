import { VoiceType } from '@utils/enums';

/** Build a classNames string from an array of values.
 *  Borrowed from: https://www.skies.dev/tailwind-react-trick
 */
export function classNames(
  ...classes: (false | null | undefined | string)[]
): string {
  return classes.filter(Boolean).join(' ');
}

/** Map of VoiceType to Tailwind gradients (from/to) */
export const voiceToGradientMap: Record<VoiceType, string> = {
  [VoiceType.Baritone]: 'from-blue-500 to-blue-600',
  [VoiceType.Bass]: 'from-bluegray-500 to-bluegray-600',
  [VoiceType.BassBaritone]: 'from-amber-500 to-amber-600',
  [VoiceType.Contralto]: 'from-fuchsia-500 to-fuchsia-600',
  [VoiceType.CounterTenor]: 'from-emerald-500 to-emerald-600',
  [VoiceType.MezzoSoprano]: 'from-cyan-500 to-cyan-600',
  [VoiceType.Soprano]: 'from-yellow-500 to-yellow-600',
  [VoiceType.Tenor]: 'from-red-500 to-red-600',
};

/** Map of colour to Tailwind gradients (from/to) */
export const colourToGradientMap: Record<string, string> = {
  blue: 'from-blue-500 to-blue-600',
  bluegray: 'from-bluegray-500 to-bluegray-600',
  amber: 'from-amber-500 to-amber-600',
  fuchsia: 'from-fuchsia-500 to-fuchsia-600',
  emerald: 'from-emerald-500 to-emerald-600',
  cyan: 'from-cyan-500 to-cyan-600',
  yellow: 'from-yellow-500 to-yellow-600',
  red: 'from-red-500 to-red-600',
};
