import Prismic from 'prismic-javascript';

const repository = process.env.PRISMIC_REPOSITORY_NAME;
const clientAPIUrl = `https://${repository}.prismic.io/api/v2`;
const graphqlAPIUrl = `https://${repository}.prismic.io/graphql`;

const APIToken = process.env.PRISMIC_API_TOKEN;
const APILocale = process.env.PRISMIC_REPOSITORY_LOCALE;

export const prismicClient = Prismic.client(clientAPIUrl, {
  accessToken: APIToken
});

// Type me later?
export type PreviewData = any;
export type QueryProps = {
  previewData?: PreviewData;
  variables?: any;
};

export default async function runQuery(
  query: string,
  { previewData, variables }: QueryProps = {}
) {
  const prismicAPI = await prismicClient.getApi();
  const res = await fetch(
    `${graphqlAPIUrl}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': APILocale,
        Authorization: `Token ${APIToken}`
      }
    }
  );

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error('Failed to fetch API');
  }

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllArias(previewData: PreviewData) {
  const data = await runQuery(
    `
		{
			allArias {
				edges {
					node {
						_meta {
							uid
						}
						title
						description
						character
						voice_type {
							... on Voicetype {
								name
							}
						}
						score_link {
							publisher
							link {
								... on _ExternalLink {
									url
								}
							}
						}
						tessitura
						range
						performances {
							link_description
							link {
								... on _ExternalLink {
									url
								}
							}
						}
						piano_track {
							track_id
							track_name
							track_price
							track_url
							track_description
							file_guid
						}
						vocal_track {
							track_id
							track_name
							track_price
							track_url
							track_description
							file_guid
						}
						opera {
							... on Opera {
								title
								
								librettists {
									librettist {
										... on Creator {
											first_name
											last_name
										}
									}
								}
								composers {
									composer {
										... on Creator {
											first_name
											last_name
										}
									}
								}
							}
						}
					}
				}
			}
		}
	`,
    { previewData }
  );
  return data?.allArias?.edges;
}
