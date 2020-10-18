import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Project Voce Moderna',
    siteUrl: 'https://projectvocemoderna.com',
    description: 'New Music, but Class(ical)-y'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      // Name of the plugin
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'a31t0q44',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
