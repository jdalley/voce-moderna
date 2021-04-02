import { groq } from 'next-sanity';

const slug = groq`"slug": slug.current`;

const shortCreatorFields = groq`
	firstName,
	lastName,
	${slug},
	photo
`;

const ariaTrackFields = groq`
	"id": id.current,
	name,
	description, 
	relativeUrl,
	price,
	fileGuid
`;

export const ariaSlugsQuery = groq`
	*[_type == "aria" && defined(slug.current)][].slug.current
`;

export const ariaBySlugQuery = groq`
	*[_type == "aria" && slug.current == $slug][0] {
		title,
		${slug},
		voiceType->{displayName},
		character,
		description,
		tessitura,
		opera->{
			title,
			${slug},
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
		${slug},
		sourceMaterial,
		synopsis,
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
			${slug},
			voiceType->{displayName}
		}
	}	
`;

export const creatorSlugsQuery = groq`
	*[_type == "creator" && defined(slug.current)][].slug.current
`;

export const creatorBySlugQuery = groq`
	*[_type == "creator" && slug.current == $slug][0] {
		firstName,
		lastName,
		${slug},
		website,
		bio,
		photo,
		"operas": *[_type == "opera" && references(^._id)]{
			title,
			${slug}
		}
	}
`;

export const featuredAriasQuery = groq`
	*[_type == 'featuredAria'] | order(_updatedAt desc) {
		aria->{
			title, 
			${slug},
			voiceType->{name, displayName},
			description,
			opera->{
				title,
				${slug},
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
