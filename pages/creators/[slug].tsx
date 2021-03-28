import Layout, { LayoutProps } from '@components/Layout';
import CreatorDetails from '@components/CreatorDetails';
import { creatorBySlugQuery, creatorSlugsQuery } from '@utils/queries';
import { getClient, sanityClient } from '@utils/sanity.server';

export default function Creator({ data, preview }) {
  const creator = data.creator;
  const layoutProps: LayoutProps = {
    customMeta: {
      title: `Creator - ${creator.firstName} ${creator.lastName}`,
    },
    preview,
  };
  return (
    <Layout customMeta={layoutProps.customMeta} preview={layoutProps.preview}>
      <CreatorDetails creator={creator} />
    </Layout>
  );
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
    fallback: false, // TODO: Set to true?
  };
}
