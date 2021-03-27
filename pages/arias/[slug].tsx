import { ariaBySlugQuery, ariaSlugsQuery } from '@utils/queries';
import { getClient, sanityClient } from '@utils/sanity.server';

export default function Aria({ aria, preview }) {
  return <></>;
}

export async function getStaticProps({ params, preview = false }) {
  const aria = await getClient(preview).fetch(ariaBySlugQuery, {
    slug: params.slug,
  });

  return {
    props: {
      data: { aria },
      preview,
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(ariaSlugsQuery);
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}
