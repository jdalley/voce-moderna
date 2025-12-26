import Image from 'next/image';
import VMHero from '../public/images/vm-hero.png';
import { featuredAriasQuery } from '@utils/queries';
import { getClient } from '@utils/sanity.server';
import Layout, { LayoutProps } from '@components/Layout';
import FeaturedArias from '@components/FeaturedArias';
import type { FeaturedAria } from 'types/sanity';

export default function Index({
  featuredArias,
}: {
  featuredArias: Array<FeaturedAria>;
}) {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'Voce Moderna',
    },
  };

  return (
    <Layout customMeta={layoutProps.customMeta}>
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
            className="object-cover"
            alt="Layered smudges of paint and the words Voce Modern - A Contemporary Aria Project"
            fill
          />
        </div>
      </div>
      <div className="relative hidden lg:mt-2.5 lg:block lg:py-0">
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
        <div className="rounded-2xl bg-white shadow-lg lg:shadow-xl">
          <div className="px-4 pt-10 pb-6 text-center xs:py-10 sm:py-16 sm:px-6 lg:py-24 lg:px-12">
            <h2 className="text-xl font-extrabold tracking-tight text-gray-800 xs:text-2xl sm:text-2xl md:text-3xl">
              Welcome to <i>VOCE MODERNA</i>
            </h2>
            <p
              id="intro-blurb"
              className="mx-auto mt-4 max-w-2xl text-gray-500 xs:text-lg md:text-xl "
            >
              A new and ongoing resource to help connect singers with
              contemporary opera arias. Head over to the Database to get
              started!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredArias: Array<FeaturedAria> = await getClient().fetch(
    featuredAriasQuery
  );
  return {
    props: { featuredArias },
  };
}
