/**
 * Voice Types. Using an object instead of enum to fit the access pattern
 * needed; to access the friendly name by property name and enable iteration.
 */
export const voiceTypes = {
  soprano: 'Soprano',
  mezzoSoprano: 'Mezzo-Soprano',
  contralto: 'Contralto',
  counterTenor: 'Countertenor',
  tenor: 'Tenor',
  baritone: 'Baritone',
  bassBaritone: 'Bass-Baritone',
  bass: 'Bass',
};

export const searchTypes = {
  opera: 'Opera Title',
  aria: 'Aria Title',
  composer: 'Composer Name',
  librettist: 'Librettist Name',
};
