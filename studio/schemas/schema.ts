// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

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
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    creator,
    opera,
    aria,
    featuredAria,
    voiceType,
    externalLink,
    track
  ])
});
