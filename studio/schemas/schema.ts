// Documents
import creator from './creator';
import voiceType from './voiceType';
import opera from './opera';
import aria from './aria';
import featuredAria from './featuredAria';

// Objects
import externalLink from './externalLink';
import track from './track';

// Then we give our schema to the builder and provide the result to Sanity
export default [
  creator,
  opera,
  aria,
  featuredAria,
  voiceType,
  externalLink,
  track
];
