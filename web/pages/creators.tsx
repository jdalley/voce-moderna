import React from 'react';
import Link from 'next/link';
import { creatorsQuery } from '@utils/queries';
import { getClient } from '@utils/sanity.server';
import Layout, { LayoutProps } from '@components/Layout';
import type { Creator } from 'types/sanity';
import { urlForImage } from '@utils/sanity';
import { UserCircleIcon } from '@heroicons/react/outline';

export type Directory = {
  letter: string;
  creators: Array<Creator>;
};

export default function Creators({
  directory,
  preview,
}: {
  directory: Array<Directory>;
  preview: boolean;
}) {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'Creators',
    },
  };

  return (
    <Layout customMeta={layoutProps.customMeta}>
      <div className="max-w-2xl mx-auto text-center pt-6 pb-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Creators
        </h2>
        <p className="mt-4 text-gray-500">
          The composers and librettists that make this site tick.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <nav className="h-full" aria-label="Directory">
          {Object.keys(directory).map((letter) => (
            <div key={letter} className="relative">
              <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                <h3>{letter}</h3>
              </div>
              <ul className="relative z-0 divide-y divide-gray-200">
                {directory[letter].map((creator: Creator) => (
                  <li key={creator.slug.current} className="bg-white">
                    <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                      <div className="flex-shrink-0">
                        {creator.photo ? (
                          <img
                            className="h-10 w-10 rounded-full"
                            alt={`Avatar photo of ${creator.firstName} ${creator.lastName}`}
                            src={urlForImage(creator.photo)
                              .width(40)
                              .height(40)
                              .url()}
                          />
                        ) : (
                          <UserCircleIcon
                            className="h-10 w-10 text-gray-400"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link href={`/creators/${creator.slug.current}`}>
                          <a className="focus:outline-none">
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            <p className="text-sm font-medium text-gray-900">
                              {creator.firstName} {creator.lastName}
                            </p>
                            <p className="text-sm text-gray-500 truncate"></p>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const creators: Array<Creator> = await getClient(preview).fetch(
    creatorsQuery
  );

  // create an array of unique letters in order to group creators
  // alphabetically by their last name.
  let directory = creators.reduce((acc, cur) => {
    // first letter of last name to group by
    let letter = cur.lastName[0].toUpperCase();
    // add the letter and first creator if it doesn't exist yet.
    if (!acc[letter]) {
      acc[letter] = [cur];
    } else {
      // letter exists, add creator.
      acc[letter].push(cur);
    }

    return acc;
  }, {}); // initialValue to avoid skipping first value.

  return {
    props: { directory, preview },
  };
}
