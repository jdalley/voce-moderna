import { creatorBySlugQuery, creatorSlugsQuery } from '@utils/queries';
import { getClient, sanityClient } from '@utils/sanity.server';

export default function Creator({ creator, preview }) {
  return <></>;
}

export async function getStaticProps({ params, preview = false }) {
  const creator = await getClient(preview).fetch(creatorBySlugQuery, {
    slug: params.slug,
  });

  return {
    props: {
      data: { creator },
      preview,
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(creatorSlugsQuery);
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}
