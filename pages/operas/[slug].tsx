import { operaBySlugQuery, operaSlugsQuery } from '@utils/queries';
import { getClient, sanityClient } from '@utils/sanity.server';

export default function Opera() {
  return <></>;
}

export async function getStaticProps({ params, preview = false }) {
  const opera = await getClient(preview).fetch(operaBySlugQuery, {
    slug: params.slug,
  });

  return {
    props: {
      data: { opera },
      preview,
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(operaSlugsQuery);
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}
