/** Voice Types */
export enum VoiceType {
  Baritone = 'baritone',
  Bass = 'bass',
  BassBaritone = 'bassBaritone',
  Contralto = 'contralto',
  CounterTenor = 'counterTenor',
  MezzoSoprano = 'mezzoSoprano',
  Soprano = 'soprano',
  Tenor = 'tenor',
}

/** VoiceType names to Tailwind colours */
export enum VoiceColour {
  Baritone = 'blue',
  Bass = 'bluegray',
  BassBaritone = 'amber',
  Contralto = 'fuchsia',
  CounterTenor = 'emerald',
  MezzoSoprano = 'cyan',
  Soprano = 'yellow',
  Tenor = 'red',
}

/** Get an array of voice types */
export function getVoiceTypes(): Array<string> {
  const voiceTypes = Object.keys(VoiceType) as (keyof typeof VoiceType)[];

  return voiceTypes;
}
