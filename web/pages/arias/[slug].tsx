import Layout, { LayoutProps } from '@components/Layout';
import AriaDetails from '@components/AriaDetails';
import { ariaBySlugQuery, ariaSlugsQuery } from '@utils/queries';
import { getClient, sanityClient } from '@utils/sanity.server';

export default function Aria({ data, preview }) {
  const aria = data.aria;
  const layoutProps: LayoutProps = {
    customMeta: {
      title: `Aria - ${aria.title}`,
    },
    preview,
  };

  return (
    <Layout customMeta={layoutProps.customMeta} preview={layoutProps.preview}>
      <AriaDetails aria={aria} />
    </Layout>
  );
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
    fallback: false, // TODO: Set to true?
  };
}
