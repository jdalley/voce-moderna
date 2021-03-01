import { groq } from 'next-sanity';

export const allOperas = groq`
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
