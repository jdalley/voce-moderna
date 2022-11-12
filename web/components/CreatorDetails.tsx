import Link from 'next/link';
import Image from 'next/image';
import SplashBanner from '../public/images/splash-banner-1024x371.png';
import BlockContent from '@sanity/block-content-to-react';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import { urlForImage } from '@utils/sanity';
import { getFullName, getInitials } from '@utils/content';
import type { Creator } from 'types/sanity';

export default function CreatorDetails({ creator }: { creator: Creator }) {
  const fullName = getFullName(creator.firstName, creator.lastName);
  const initials = getInitials(creator.firstName, creator.lastName);

  return (
    <div className="mx-auto max-w-5xl overflow-hidden bg-white shadow sm:mt-4 sm:rounded-lg">
      <div>
        <div className="relative h-44 w-full lg:h-64">
          <Image
            src={SplashBanner}
            className="object-cover"
            alt="Layered smudges of paint"
            fill
            priority
          />
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
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 text-5xl font-bold ring-4 ring-white sm:h-32 sm:w-32 sm:text-6xl">
                  <span className="mb-2">{initials}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-5 sm:px-9">
        <h1 className="text-lg font-medium leading-6 text-gray-900">
          {fullName}
        </h1>
      </div>
      <div className="border-t border-gray-200 px-4 pt-5 pb-5 sm:px-9 sm:pb-9">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3">
          <div className="sm:col-span-1">
            <dt className="font-medium text-gray-500">Website</dt>
            <dd className="mt-1 inline-flex items-center break-all text-cyan-600 ">
              <a
                href={creator.website}
                className=" hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {creator.website}
                <ExternalLinkIcon className="mx-1 inline h-4 w-4" />
              </a>
            </dd>
            <dt className="mt-6 font-medium text-gray-500">Operas</dt>
            <dd className="mt-1 text-gray-900">
              <ul>
                {creator.operas.map((opera) => (
                  <li key={opera.slug.current}>
                    <Link
                      href={`/operas/${opera.slug.current}`}
                      className="text-cyan-600 hover:underline"
                    >
                      {opera.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className=" font-medium text-gray-500">Biography</dt>
            <dd className="prose mt-1 max-w-2xl text-gray-900">
              <BlockContent blocks={creator.bio} />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
