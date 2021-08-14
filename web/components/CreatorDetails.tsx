import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react';
import { urlForImage } from '@utils/sanity';
import { getFullName, getInitials } from '@utils/content';
import type { Creator } from 'types/sanity';

export default function CreatorDetails({ creator }: { creator: Creator }) {
  const fullName = getFullName(creator.firstName, creator.lastName);
  const initials = getInitials(creator.firstName, creator.lastName);

  return (
    <div className="max-w-5xl mx-auto bg-white shadow overflow-hidden sm:rounded-lg sm:mt-4">
      <div>
        <div className="relative h-32 w-full bg-gradient-to-tr from-yellow-200 via-cyan-600 to-rose-600 lg:h-48">
          <div className="absolute inset-0 bg-topography"></div>
        </div>
        <div className="relative px-4 sm:px-6">
          <div className="-mt-12 sm:-mt-16">
            <div className="flex">
              {creator.photo ? (
                <img
                  className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                  alt={`Photo of ${fullName}`}
                  src={urlForImage(creator.photo).width(128).height(128).url()}
                />
              ) : (
                <span className="flex items-center justify-center h-24 w-24 rounded-full font-bold text-5xl bg-gray-100 ring-4 ring-white sm:text-6xl sm:h-32 sm:w-32">
                  <span className="mb-2">{initials}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-5 sm:px-9">
        <h1 className="text-lg leading-6 font-medium text-gray-900">
          {fullName}
        </h1>
      </div>
      <div className="border-t border-gray-200 px-4 pt-5 pb-5 sm:pb-9 sm:px-9">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3">
          <div className="sm:col-span-1">
            <dt className="font-medium text-gray-500">Website</dt>
            <dd className="mt-1 text-gray-900">
              <a
                href={creator.website}
                className="text-cyan-600 hover:underline"
              >
                {creator.website}
              </a>
            </dd>
            <dt className="mt-6 font-medium text-gray-500">Operas</dt>
            <dd className="mt-1 text-gray-900">
              <ul>
                {creator.operas.map((opera) => (
                  <li key={opera.slug.current}>
                    <Link href={`/operas/${opera.slug.current}`}>
                      <a className="text-cyan-600 hover:underline">
                        {opera.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className=" font-medium text-gray-500">Biography</dt>
            <dd className="mt-1 text-gray-900 prose max-w-2xl">
              <BlockContent blocks={creator.bio} />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
