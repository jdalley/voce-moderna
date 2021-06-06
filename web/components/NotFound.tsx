import Head from 'next/head';
import Layout, { LayoutProps } from '@components/Layout';

export default function NotFound() {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: `Not found`,
    },
  };
  return (
    <Layout customMeta={layoutProps.customMeta}>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <p className="mt-24 text-center text-xl text-gray-500">
        Sorry, we couldn't find that page.
      </p>
    </Layout>
  );
}
