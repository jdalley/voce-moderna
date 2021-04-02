import Layout, { LayoutProps } from '@components/Layout';
import OperaDetails from '@components/OperaDetails';
import { operaBySlugQuery, operaSlugsQuery } from '@utils/queries';
import { getClient, sanityClient } from '@utils/sanity.server';

export default function Opera({ data, preview }) {
  if (data.opera === undefined)
    return (
      <div>
        Oops, can't find the data for this opera. It has to be around here
        somewhere...
      </div>
    );

  const opera = data.opera;
  const layoutProps: LayoutProps = {
    customMeta: {
      title: `Opera - ${opera.title}`,
    },
    preview,
  };

  return (
    <Layout customMeta={layoutProps.customMeta} preview={layoutProps.preview}>
      <OperaDetails opera={opera} />
    </Layout>
  );
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
