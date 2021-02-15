import Prismic from '@prismicio/client';

const repository = process.env.PRISMIC_REPOSITORY_NAME;
const clientAPIUrl = `https://${repository}.prismic.io/api/v2`;
const APIToken = process.env.PRISMIC_API_TOKEN;
const APILocale = process.env.PRISMIC_REPOSITORY_LOCALE;

// Client method to query documents from the Prismic repo
export default function PrismicClient(req = null) {
  return Prismic.client(clientAPIUrl, createClientOptions(req, APIToken));
}

function createClientOptions(req = null, prismicAccessToken = null) {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption
  };
}
