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
      <div className="relative sm:mt-6 md:py-4 lg:mt-0 lg:py-0">
        <svg
          className="hidden lg:block absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
          width="404"
          height="392"
          fill="none"
          viewBox="0 0 404 392"
        >
          <defs>
            <pattern
              id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              ></rect>
            </pattern>
          </defs>
          <rect
            width="404"
            height="392"
            fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
          ></rect>
        </svg>
        <div className="mx-auto px-4 sm:px-0 lg:max-w-none lg:py-20">
          <div className="relative mx-auto pt-56 sm:pt-60 md:pt-64 lg:pb-10">
            <div className="absolute inset-0 bg-white rounded-2xl shadow-lg lg:shadow-xl overflow-hidden">
              <div className="relative text-center py-16 px-4 sm:px-6 lg:py-24  lg:px-12">
                <h2 className="text-2xl tracking-tight font-extrabold text-gray-800 sm:text-3xl md:text-4xl">
                  Welcome to <i>VOCE MODERNA</i>
                </h2>
                <p
                  id="intro-blurb"
                  className=" max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 sm:mt-4"
                >
                  A new and ongoing resource to help connect singers with
                  contemporary opera arias. Head over to the Database to get
                  started!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
