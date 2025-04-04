import Link from 'next/link';
import Image from 'next/image';
import SplashBanner from '../public/images/splash-banner-1024x371.png';
import { PortableText } from '@portabletext/react';
import CreatorList from '@components/CreatorList';
import ExternalMediaList from '@components/ExternalMediaList';
import PortableImage from '@components/PortableImage';
import ScoreLink from '@components/ScoreLink';
import type { Opera } from 'types/sanity';

export default function OperaDetails({ opera }: { opera: Opera }) {
  return (
    <div className="mx-auto max-w-5xl overflow-hidden bg-white shadow-sm sm:mt-4 sm:rounded-lg">
      <div className="relative h-44 w-full lg:h-64">
        <Image
          src={SplashBanner}
          className="object-cover"
          alt="Layered smudges of paint"
          fill
          priority
        />
      </div>
      <div className="px-4 py-5 sm:px-9">
        <h1 className="text-xl font-medium leading-9 text-gray-900">
          {opera.title}
        </h1>
      </div>
      <div className="border-t border-gray-200 px-4 pb-5 pt-5 sm:px-9 sm:pb-9">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3">
          <div className="sm:col-span-1">
            <dt className="font-medium text-gray-500">Composer</dt>
            <dd className="mt-1">
              <CreatorList creators={opera.composers} />
            </dd>
            <dt className="mt-6 font-medium text-gray-500">Librettist</dt>
            <dd className="mt-1">
              <CreatorList creators={opera.librettists} />
            </dd>
            {opera.sourceMaterial !== undefined && opera.sourceMaterial && (
              <>
                <dt className="mt-6 font-medium text-gray-500">
                  Source Material
                </dt>
                <dd className="mt-1 text-gray-900">{opera.sourceMaterial}</dd>
              </>
            )}
            <dt className="mt-6 font-medium text-gray-500">Arias</dt>
            <dd className="mt-1 text-gray-900">
              <ul>
                {opera.arias.map((aria) => (
                  <li key={aria.slug.current}>
                    <Link
                      href={`/arias/${aria.slug.current}`}
                      className="text-cyan-600 hover:underline"
                    >
                      {aria.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </dd>
            {opera.scoreLink !== undefined && opera.scoreLink && (
              <>
                <dt className="mt-6 font-medium text-gray-500">Score</dt>
                <dd className="mt-1 text-gray-900">
                  <ScoreLink link={opera.scoreLink} />
                </dd>
              </>
            )}
            {opera.mediaLinks !== undefined && opera.mediaLinks && (
              <>
                <dt className="mt-6 font-medium text-gray-500">Media</dt>
                <dd className="mt-1">
                  <ExternalMediaList links={opera.mediaLinks} />
                </dd>
              </>
            )}
          </div>
          <div className="sm:col-span-2">
            <dt className="text-lg font-medium text-gray-500">SYNOPSIS</dt>
            <dd className="prose mt-1 max-w-2xl text-gray-900">
              {opera.synopsis !== undefined && (
                <PortableText
                  value={opera.synopsis}
                  components={{
                    types: {
                      image: PortableImage,
                    },
                  }}
                />
              )}
            </dd>
            {opera.premiereInformation !== undefined &&
              opera.premiereInformation && (
                <>
                  <dt className="mt-20 text-lg font-medium text-gray-500">
                    PREMIERE INFORMATION
                  </dt>
                  <dd className="prose mt-1 max-w-2xl text-gray-900">
                    <PortableText
                      value={opera.premiereInformation}
                      components={{
                        types: {
                          image: PortableImage,
                        },
                      }}
                    />
                  </dd>
                </>
              )}
          </div>
        </dl>
      </div>
    </div>
  );
}
