/**
 * Notes:
 * These types were originally generated using sanity-codegen, then modified to correctly
 * type things like references, which should be actual types.
 */

export interface Creator extends SanityDocument {
  _type: 'creator';
  firstName?: string;
  lastName?: string;
  slug?: { _type: 'slug'; current: string };
  website?: string;
  bio?: Array<SanityKeyed<SanityBlock>>;
  photo?: {
    _type: 'image';
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
  operas?: Array<Opera>;
}

export interface Opera extends SanityDocument {
  _type: 'opera';
  title?: string;
  slug?: { _type: 'slug'; current: string };
  composers?: Array<Creator>;
  librettists?: Array<Creator>;
  sourceMaterial?: string;
  synopsis?: Array<SanityKeyed<SanityBlock>>;
  premiereInformation?: Array<SanityKeyed<SanityBlock>>;
  scoreLink?: ExternalLink;
  mediaLinks?: Array<SanityKeyed<ExternalLink>>;
  arias?: Array<Aria>;
}

export interface Aria extends SanityDocument {
  _type: 'aria';
  title?: string;
  slug?: { _type: 'slug'; current: string };
  opera?: Opera;
  voiceType?: VoiceType;
  description?: Array<SanityKeyed<SanityBlock>>;
  character?: string;
  length?: string;
  tessitura?: {
    _type: 'image';
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
  scoreLink?: ExternalLink;
  performanceLinks?: Array<SanityKeyed<ExternalLink>>;
  pianoTrack?: Track;
  vocalTrack?: Track;
}

export interface FeaturedAria extends SanityDocument {
  _type: 'featuredAria';
  title?: string;
  aria?: Aria;
}

export interface VoiceType extends SanityDocument {
  _type: 'voiceType';
  name?: string;
  displayName?: string;
}

export type ExternalLink = {
  _type: 'externalLink';
  description?: string;
  url?: string;
};

export type Track = {
  _type: 'track';
  name?: string;
  id?: { _type: 'id'; current: string };
  price?: number;
  relativeUrl?: string;
  description?: string;
  fileGuid?: string;
};

export type SearchResult = {
  id: string;
  opera: Opera;
  ariaSlug: string;
  ariaTitle: string;
};

export type Documents = Creator | Opera | Aria | FeaturedAria | VoiceType;

/**
 * The following types were originally generated with sanity-codegen.
 */

/**
 * Represents a reference in Sanity to another entity. Note that the
 * generic type is strictly for TypeScript meta programming.
 */
export declare type SanityReference<_T> = {
  _type: 'reference';
  _ref: string;
};

export declare type SanityKeyed<T> = T extends object
  ? T & {
      _key: string;
    }
  : T;

export declare type SanityAsset = SanityReference<any>;

export interface SanityDocument {
  _id: string;
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
}

export interface SanityBlock {
  _type: 'block';
  [key: string]: any;
}

export interface SanityImageCrop {
  _type: 'sanity.imageCrop';
  bottom: number;
  left: number;
  right: number;
  top: number;
}

export interface SanityImageHotspot {
  _type: 'sanity.imageHotspot';
  height: number;
  width: number;
  x: number;
  y: number;
}
