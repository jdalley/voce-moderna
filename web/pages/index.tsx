import Head from 'next/head';
import Image from 'next/image';
import VMHero from '../public/images/vm-hero.png';
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
      <div className="hidden sm:block">
        <Image
          src={VMHero}
          alt="Layered smudges of paint and the words Voce Modern - A Contemporary Aria Project"
          priority
        />
      </div>
      <div className="relative px-4 py-36 sm:hidden">
        <div className="absolute inset-0">
          <Image
            src={VMHero}
            alt="Layered smudges of paint and the words Voce Modern - A Contemporary Aria Project"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="relative hidden lg:block lg:mt-2.5 lg:py-0">
        <svg
          className=" absolute lg:-right-8 lg:left-auto lg:-top-2"
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
      </div>
      <div className="relative mx-auto px-4 xs:pt-2 sm:px-0 md:pt-4 lg:max-w-none">
        <div className="bg-white rounded-2xl shadow-lg lg:shadow-xl">
          <div className="text-center pt-10 pb-6 xs:py-10 sm:py-16 px-4 sm:px-6 lg:py-24 lg:px-12">
            <h2 className="text-xl tracking-tight font-extrabold text-gray-800 xs:text-2xl sm:text-2xl md:text-3xl">
              Welcome to <i>VOCE MODERNA</i>
            </h2>
            <p
              id="intro-blurb"
              className="max-w-2xl mx-auto mt-4 xs:text-lg md:text-xl text-gray-500 "
            >
              A new and ongoing resource to help connect singers with
              contemporary opera arias. Head over to the Database to get
              started!
            </p>
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
