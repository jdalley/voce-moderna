import Layout, { LayoutProps } from '@components/Layout';
import FeaturedArias from '@components/FeaturedArias';
import { featuredAriasQuery } from '@utils/queries';
import { getClient } from '@utils/sanity.server';
import Head from 'next/head';

export default function Index({ featuredArias, preview }) {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'Home',
    },
    preview,
  };

  return (
    <Layout customMeta={layoutProps.customMeta} preview={layoutProps.preview}>
      <Head>
        <link rel="preload" href="/images/vm-hero.png" as="image" />
      </Head>
      <div className="relative px-4 py-36 sm:px-6 sm:py-32 md:py-44 lg:px-8 lg:py-56 ">
        <div className="absolute inset-0">
          <img
            className="object-cover h-full w-full"
            src="/images/vm-hero.png"
            alt="Layered smudges of paint and the words Voce Modern - A Contemporary Aria Project"
          />
        </div>
      </div>
      <FeaturedArias featuredArias={featuredArias} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const featuredArias = await getClient(preview).fetch(featuredAriasQuery);
  return {
    props: { featuredArias, preview },
  };
}
