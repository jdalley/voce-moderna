import { groq } from 'next-sanity';
import { QueryParams } from '@utils/sanity.server';

type SearchCriteria = {
  query: string;
  params?: QueryParams;
};

const shortCreatorFields = `
	firstName,
	lastName,
  slug,
	photo
`;
const ariaTrackFields = `
	"id": id.current,
	name,
	description, 
	relativeUrl,
	price,
	fileGuid
`;
const searchResultFields = `
	"ariaTitle": title,
	"ariaSlug": slug.current,
	voiceType->{name},
	opera->{
		title,
		slug,
		composers[]-> {
			${shortCreatorFields}
		},
		librettists[]-> {
			${shortCreatorFields}
		}
	}
`;

export const ariaSlugsQuery = groq`
	*[_type == "aria" && defined(slug.current)][].slug.current
`;

export const ariaBySlugQuery = groq`
	*[_type == "aria" && slug.current == $slug][0] {
		title,
		slug,
		voiceType->{displayName},
		character,
		length,
		description,
		tessitura,
		opera->{
			title,
			slug,
			composers[]->{
				${shortCreatorFields}
			},
			librettists[]->{
				${shortCreatorFields}
			}
		},
		scoreLink{description, url},
		performanceLinks[]{description, url},
		pianoTrack{
			${ariaTrackFields}
		},
		vocalTrack{
			${ariaTrackFields}
		}
	}
`;

export const operaSlugsQuery = groq`
	*[_type == "opera" && defined(slug.current)][].slug.current
`;

export const operaBySlugQuery = groq`
	*[_type == "opera" && slug.current == $slug][0] {
		title,
		slug,
		sourceMaterial,
		synopsis,
        premiereInformation,
		composers[]->{
			${shortCreatorFields}
		},
		librettists[]->{
			${shortCreatorFields}
		},
		scoreLink{description, url},
		mediaLinks[]{description, url},
		"arias": *[_type == "aria" && references(^._id)] {
			title,
			slug,
			voiceType->{displayName}
		}
	}	
`;

export const creatorsQuery = groq`
	*[_type == 'creator'] | order(upper(lastName) asc) {
    firstName,
    lastName,
    slug,
    photo
  }  
`;

export const creatorSlugsQuery = groq`
	*[_type == "creator" && defined(slug.current)][].slug.current
`;

export const creatorBySlugQuery = groq`
	*[_type == "creator" && slug.current == $slug][0] {
		firstName,
		lastName,
		slug,
		website,
		bio,
		photo,
		"operas": *[_type == "opera" && references(^._id)]{
			title,
			slug
		}
	}
`;

export const featuredAriasQuery = groq`
	*[_type == 'featuredAria'] | order(_updatedAt desc) {
		aria->{
			title, 
			slug,
			voiceType->{name, displayName},
			description,
			opera->{
				title,
				slug,
				composers[]->{
					${shortCreatorFields}
				},
				librettists[]->{
					${shortCreatorFields}
				}
			}
		}
	}
`;

export const ariasByAnyVoiceType = groq`
	*[_type == "aria"] {
		${searchResultFields}
	}	
`;

export const ariasByVoiceType = groq`
	*[_type == "aria" && references(*[_type == "voiceType" && name == $voiceType]._id)] {
		${searchResultFields}
	}	
`;

export const ariasByOperaTitle = groq`
	*[_type == "aria" 
		&& references(*[_type == "voiceType" && name == $voiceType]._id)
		&& references(*[_type == "opera" && title match "*" + $operaTitle + "*"]._id)] {
		${searchResultFields}
	}	
`;

export const ariasByAriaTitle = groq`
	*[_type == "aria" 
		&& references(*[_type == "voiceType" && name == $voiceType]._id)
		&& title match "*" + $ariaTitle + "*"] {
		${searchResultFields}
	}	
`;

export const ariasByComposerName = groq`
	*[_type == "aria" 
		&& references(*[_type == "voiceType" && name == $voiceType]._id)
		&& references(*[_type == "opera" && 
    	(composers[]->firstName match "*" + $name + "*" || composers[]->lastName match "*" + $name + "*")]._id)] {
		${searchResultFields}
	}	
`;

export const ariasByLibrettistName = groq`
	*[_type == "aria" 
		&& references(*[_type == "voiceType" && name == $voiceType]._id)
		&& references(*[_type == "opera" && 
    	(librettists[]->firstName match "*" + $name + "*" || librettists[]->lastName match "*" + $name + "*")]._id)] {
		${searchResultFields}
	}	
`;

export const ariaSearchBase = `
	*[_type == "aria" 
		{{voiceType}}
		{{filter}}	
	] | order(opera->title asc) {
		${searchResultFields}
	}	
`;

/**
 * Construct a Groq query to find Arias based on the searchType.
 * @param searchType Type of search: opear title, aria title, composer name, librettist name.
 * @param searchTerm The term to search by, wildcards are added to each side of the term.
 * @param voiceType The voice type to filter by. Null or "all" will remove this expression.
 */
export function getSearchQuery(
  searchType: string,
  searchTerm: string,
  voiceType: string
): SearchCriteria {
  let search: SearchCriteria = {
    query: '',
    params: {},
  };

  if (!voiceType || voiceType === '') {
    return null;
  }

  search.query = ariaSearchBase;

  if (!voiceType || voiceType === 'all') {
    search.query = search.query.replace('{{voiceType}}', '');
  } else {
    search.query = search.query.replace(
      '{{voiceType}}',
      `&& references(*[_type == "voiceType" && name == $voiceType]._id)`
    );
    Object.assign(search.params, { voiceType });
  }

  if (!searchType || searchType === '' || !searchTerm || searchTerm === '') {
    search.query = search.query.replace('{{filter}}', '');
  } else {
    if (searchType === 'opera') {
      search.query = search.query.replace(
        '{{filter}}',
        `&& references(*[_type == "opera" && title match "*" + $operaTitle + "*"]._id)`
      );
      Object.assign(search.params, { operaTitle: searchTerm });
    } else if (searchType === 'aria') {
      search.query = search.query.replace(
        '{{filter}}',
        `&& title match "*" + $ariaTitle + "*"`
      );
      Object.assign(search.params, { ariaTitle: searchTerm });
    } else if (searchType === 'composer') {
      search.query = search.query.replace(
        '{{filter}}',
        `&& references(*[_type == "opera" && 
					(composers[]->firstName match "*" + $name + "*" 
						|| composers[]->lastName match "*" + $name + "*")]._id)`
      );
      Object.assign(search.params, { name: searchTerm });
    } else if (searchType === 'librettist') {
      search.query = search.query.replace(
        '{{filter}}',
        `&& references(*[_type == "opera" && 
					(librettists[]->firstName match "*" + $name + "*" 
						|| librettists[]->lastName match "*" + $name + "*")]._id)`
      );
      Object.assign(search.params, { name: searchTerm });
    }
  }

  return search;
}
