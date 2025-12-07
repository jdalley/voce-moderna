import { SanityImageSource, createImageUrlBuilder } from '@sanity/image-url';
import { sanityConfig } from './config';

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source: SanityImageSource) =>
  imageBuilder.image(source).auto('format').fit('max');
