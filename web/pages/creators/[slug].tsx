import { useRouter } from 'next/router';
import Layout, { LayoutProps } from '@components/Layout';
import CreatorDetails from '@components/CreatorDetails';
import LoadingSpinner from '@components/LoadingSpinner';
import NotFound from '@components/NotFound';
import { creatorBySlugQuery, creatorSlugsQuery } from '@utils/queries';
import { getClient, sanityClient } from '@utils/sanity.server';
import type { Creator as CreatorType } from 'types/sanity';
import type { PathParams } from 'types/next';

export default function Creator({
  creator,
  preview,
}: {
  creator: CreatorType;
  preview: boolean;
}) {
  const router = useRouter();
  const layoutProps: LayoutProps = {
    customMeta: {
      title: `Creator - ${creator?.firstName ?? ''} ${creator?.lastName ?? ''}`,
    },
    preview,
  };

  if (router.isFallback) {
    return (
      <Layout customMeta={layoutProps.customMeta} preview={layoutProps.preview}>
        <LoadingSpinner marginTop={24} />
      </Layout>
    );
  }

  if (!creator) {
    return <NotFound />;
  }

  return (
    <Layout customMeta={layoutProps.customMeta} preview={layoutProps.preview}>
      <CreatorDetails creator={creator} />
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }: PathParams) {
  const creator: CreatorType = await getClient(preview).fetch(
    creatorBySlugQuery,
    {
      slug: params.slug,
    }
  );
  return {
    props: {
      creator,
      preview,
    },
  };
}

export async function getStaticPaths() {
  const paths: Array<string> = await sanityClient.fetch(creatorSlugsQuery);
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
