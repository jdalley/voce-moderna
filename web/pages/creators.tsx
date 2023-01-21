import React from 'react';
import Link from 'next/link';
import { creatorsQuery } from '@utils/queries';
import { getClient } from '@utils/sanity.server';
import { urlForImage } from '@utils/sanity';
import { getFullName, getInitials } from '@utils/content';
import Layout, { LayoutProps } from '@components/Layout';
import type { Creator } from 'types/sanity';

export type Directory = {
  letter: string;
  creators: Array<Creator>;
};

export default function Creators({
  directory,
}: {
  directory: Array<Directory>;
}) {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'Creators - Voce Moderna',
    },
  };

  return (
    <Layout customMeta={layoutProps.customMeta}>
      <div className="mx-auto max-w-2xl px-2 pt-6 pb-10 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Creators
        </h2>
        <p className="mt-4 text-gray-500">
          Voce Moderna is meant to be an ongoing project!
        </p>
        <p className="mt-3 text-gray-500">
          There are already hundreds of arias ready and waiting to be added to
          this database.
        </p>
        <p className="mt-3 text-gray-500">
          Below is a list of the composers and librettists whose work is either
          currently displayed on the VM Database, or is soon to be added.
        </p>
      </div>
      <div className="mx-auto max-w-2xl">
        <nav className="h-full" aria-label="Directory">
          {Object.keys(directory).map((letter) => (
            <div key={letter} className="relative">
              <div className="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                <h3>{letter}</h3>
              </div>
              <ul className="relative z-0 divide-y divide-gray-200">
                {directory[letter].map((creator: Creator) => {
                  const fullName = getFullName(
                    creator.firstName,
                    creator.lastName
                  );
                  const initials = getInitials(
                    creator.firstName,
                    creator.lastName
                  );
                  return (
                    <li key={creator.slug.current} className="bg-white">
                      <div className="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50">
                        <div className="shrink-0">
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
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 font-bold ">
                              <span className="">{initials}</span>
                            </span>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <Link
                            href={`/creators/${creator.slug.current}`}
                            className="focus:outline-none"
                          >
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            <p className="text-sm font-medium text-gray-900">
                              {fullName}
                            </p>
                            <p className="truncate text-sm text-gray-500"></p>
                          </Link>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const creators: Array<Creator> = await getClient().fetch(creatorsQuery);
  // create an array of unique letters in order to group creators
  // alphabetically by their last name.
  const directory = creators.reduce((acc, cur) => {
    // first letter of last name to group by
    const letter = cur.lastName[0].toUpperCase();
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
    props: { directory },
  };
}
