import { useRouter } from 'next/router';
import Layout, { LayoutProps } from '@components/Layout';
import OperaDetails from '@components/OperaDetails';
import LoadingSpinner from '@components/LoadingSpinner';
import NotFound from '@components/NotFound';
import { operaBySlugQuery, operaSlugsQuery } from '@utils/queries';
import { getClient, sanityClient } from '@utils/sanity.server';
import type { Opera as OperaType } from 'types/sanity';
import type { PathParams } from 'types/next';

export default function Opera({ opera }: { opera: OperaType }) {
  const router = useRouter();
  const layoutProps: LayoutProps = {
    customMeta: {
      title: `Opera - ${opera?.title ?? ''} - Voce Moderna`,
    },
  };

  if (router.isFallback) {
    return (
      <Layout customMeta={layoutProps.customMeta}>
        <LoadingSpinner marginTop={24} />
      </Layout>
    );
  }

  if (!opera) {
    return <NotFound />;
  }

  return (
    <Layout customMeta={layoutProps.customMeta}>
      <OperaDetails opera={opera} />
    </Layout>
  );
}

export async function getStaticProps({ params }: PathParams) {
  const opera: OperaType = await getClient().fetch(operaBySlugQuery, {
    slug: params.slug,
  });

  return {
    props: {
      opera,
    },
  };
}

export async function getStaticPaths() {
  const paths: Array<string> = await sanityClient.fetch(operaSlugsQuery);
  return {
    paths: paths.map((slug: string) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: true,
  };
}
