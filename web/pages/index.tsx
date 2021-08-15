import Head from 'next/head';
import { featuredAriasQuery } from '@utils/queries';
import { getClient } from '@utils/sanity.server';
import Layout, { LayoutProps } from '@components/Layout';
import FeaturedArias from '@components/FeaturedArias';
import type { FeaturedAria } from 'types/sanity';

export default function Index({
  featuredArias,
  preview,
}: {
  featuredArias: Array<FeaturedAria>;
  preview: boolean;
}) {
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
      <section className="relative bg-white" aria-labelledby="intro-blurb">
        <div className="max-w-6xl mx-auto rounded-2xl shadow-lg lg:shadow-xl overflow-hidden">
          <div className="relative text-center py-12 px-4 sm:px-6 lg:py-24  lg:px-12">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-800 sm:text-4xl">
              Welcome to <i>VOCE MODERNA</i>
            </h2>
            <p
              id="intro-blurb"
              className=" max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
            >
              A new and ongoing resource to help connect singers with
              contemporary opera arias. Head over to the Database to get
              started!
            </p>
          </div>
        </div>
      </section>

      <FeaturedArias featuredArias={featuredArias} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const featuredArias: Array<FeaturedAria> = await getClient(preview).fetch(
    featuredAriasQuery
  );
  return {
    props: { featuredArias, preview },
  };
}
