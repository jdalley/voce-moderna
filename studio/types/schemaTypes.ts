import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
};

/**
 * Creator
 *
 *
 */
export interface Creator extends SanityDocument {
  _type: "creator";

  /**
   * First Name — `string`
   *
   *
   */
  firstName?: string;

  /**
   * Last Name — `string`
   *
   *
   */
  lastName?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Website — `url`
   *
   *
   */
  website?: string;

  /**
   * Bio — `array`
   *
   *
   */
  bio?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Photo — `image`
   *
   *
   */
  photo?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Opera
 *
 *
 */
export interface Opera extends SanityDocument {
  _type: "opera";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Composers — `array`
   *
   *
   */
  composers?: Array<SanityKeyedReference<Creator>>;

  /**
   * Librettists — `array`
   *
   *
   */
  librettists?: Array<SanityKeyedReference<Creator>>;

  /**
   * Year — `string`
   *
   *
   */
  year?: string;

  /**
   * Source Material — `string`
   *
   *
   */
  sourceMaterial?: string;

  /**
   * Synopsis — `array`
   *
   *
   */
  synopsis?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Score Link — `externalLink`
   *
   *
   */
  scoreLink?: ExternalLink;

  /**
   * Media Links — `array`
   *
   *
   */
  mediaLinks?: Array<SanityKeyed<ExternalLink>>;
}

/**
 * Aria
 *
 *
 */
export interface Aria extends SanityDocument {
  _type: "aria";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Opera — `reference`
   *
   *
   */
  opera?: SanityReference<Opera>;

  /**
   * Voice Type — `reference`
   *
   *
   */
  voiceType?: SanityReference<VoiceType>;

  /**
   * Description — `array`
   *
   *
   */
  description?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Character — `string`
   *
   *
   */
  character?: string;

  /**
   * Length — `string`
   *
   *
   */
  length?: string;

  /**
   * Tessitura — `image`
   *
   *
   */
  tessitura?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Score Link — `externalLink`
   *
   *
   */
  scoreLink?: ExternalLink;

  /**
   * Performance Links — `array`
   *
   *
   */
  performanceLinks?: Array<SanityKeyed<ExternalLink>>;

  /**
   * Piano Track — `track`
   *
   *
   */
  pianoTrack?: Track;

  /**
   * Vocal Track — `track`
   *
   *
   */
  vocalTrack?: Track;
}

/**
 * Featured Aria
 *
 *
 */
export interface FeaturedAria extends SanityDocument {
  _type: "featuredAria";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Aria — `reference`
   *
   *
   */
  aria?: SanityReference<Aria>;
}

/**
 * Voice Type
 *
 *
 */
export interface VoiceType extends SanityDocument {
  _type: "voiceType";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Display Name — `string`
   *
   *
   */
  displayName?: string;
}

export type ExternalLink = {
  _type: "externalLink";
  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * URL — `url`
   *
   *
   */
  url?: string;
};

export type Track = {
  _type: "track";
  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Id — `slug`
   *
   *
   */
  id?: { _type: "id"; current: string };

  /**
   * Price — `number`
   *
   *
   */
  price?: number;

  /**
   * Relative URL — `string`
   *
   * /arias/aria-name
   */
  relativeUrl?: string;

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * File GUID — `string`
   *
   * Snipcart file identifier
   */
  fileGuid?: string;
};

export type Documents = Creator | Opera | Aria | FeaturedAria | VoiceType;
