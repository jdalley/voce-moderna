import { groq } from 'next-sanity';

export const allOperasQuery = groq`
	*[_type == 'opera']{
		_id,
		title,
		'slug': slug.current,
		synopsis,
		'composers': composers[]->{name},
		'librettists': librettists[]->{name},
		scoreLink{description, url},
		mediaLinks[]{description, url}
	}
`;

export const featuredAriasQuery = groq`
	*[_type == 'featuredAria']{
		'id': _id,
		aria->{
			title, 
			slug{current},
			voiceType->{name, displayName},
			description,
			opera->{
				title,
				slug{current},
				composers[]->{
					'id': _id,
					firstName,
					lastName,
					slug{current},
					photo
				},
				librettists[]->{
          'id': _id,
					firstName,
					lastName,
					slug{current},
					photo
				}
			}
		}
	}
`;
