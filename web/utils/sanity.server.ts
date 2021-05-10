/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */
import { createClient } from 'next-sanity';
import { sanityConfig } from './config';

// This is the type used in PicoSanity for the second argument of fetch().
export type QueryParams = { [key: string]: unknown };

export const sanityClient = createClient(sanityConfig);
export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const getClient = (preview: boolean) =>
  preview ? previewClient : sanityClient;

// TODO: Implement this wrapping sanity client requests to support draft previews
// TODO: Figure out what the `docs` type is
// Use of any: type is whatever .result is in underlying fetch (next-sanity fetch = picosanity)
export function overlayDrafts(docs: any) {
  const documents = docs || [];
  const overlayed = documents.reduce((map: any, doc: any) => {
    if (!doc._id) {
      throw new Error('Ensure that `_id` is included in query projection');
    }

    const isDraft = doc._id.startsWith('drafts.');
    const id = isDraft ? doc._id.slice(7) : doc._id;
    return isDraft || !map.has(id) ? map.set(id, doc) : map;
  }, new Map());

  return Array.from(overlayed.values());
}
