import { useRouter } from 'next/router';
import Layout, { LayoutProps } from '@components/Layout';
import AriaDetails from '@components/AriaDetails';
import LoadingSpinner from '@components/LoadingSpinner';
import NotFound from '@components/NotFound';
import { ariaBySlugQuery, ariaSlugsQuery } from '@utils/queries';
import { getClient, sanityClient } from '@utils/sanity.server';
import type { Aria as AriaType } from 'types/sanity';
import type { PathParams } from 'types/next';

export default function Aria({
  aria,
  preview,
}: {
  aria: AriaType;
  preview: boolean;
}) {
  const router = useRouter();
  const layoutProps: LayoutProps = {
    customMeta: {
      title: `Aria - ${aria?.title ?? ''}`,
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

  if (!aria) {
    return <NotFound />;
  }

  return (
    <Layout customMeta={layoutProps.customMeta} preview={layoutProps.preview}>
      <AriaDetails aria={aria} />
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }: PathParams) {
  const aria: AriaType = await getClient(preview).fetch(ariaBySlugQuery, {
    slug: params.slug,
  });

  return {
    props: {
      aria,
      preview,
    },
  };
}

export async function getStaticPaths() {
  const paths: Array<string> = await sanityClient.fetch(ariaSlugsQuery);
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
