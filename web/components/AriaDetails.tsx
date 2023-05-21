import Link from 'next/link';
import Image from 'next/image';
import SplashBanner from '../public/images/splash-banner-1024x371.png';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@utils/sanity';
import ExternalMediaList from '@components/ExternalMediaList';
import CreatorList from '@components/CreatorList';
import ScoreLink from '@components/ScoreLink';
import TrackButtons from '@components/TrackButtons';
import type { Aria } from 'types/sanity';

export default function AriaDetails({ aria }: { aria: Aria }) {
  return (
    <div className="mx-auto max-w-5xl overflow-hidden bg-white shadow sm:mt-4 sm:rounded-lg">
      <div className="relative h-44 w-full lg:h-64">
        <Image
          src={SplashBanner}
          className="object-cover"
          alt="Layered smudges of paint"
          fill
          priority
        />
      </div>
      <div className="flex flex-col px-4 py-5 sm:flex-row sm:justify-between sm:px-9">
        <h1 className="text-xl font-medium leading-9 text-gray-900">
          {aria.title}
        </h1>
        <div className="mt-4 sm:mt-0">
          <TrackButtons
            pianoTrack={aria.pianoTrack}
            vocalTrack={aria.vocalTrack}
          />
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 pb-5 pt-5 sm:px-9 sm:pb-9">
        <div className="grid grid-cols-1 gap-4 md:grid-flow-col-dense md:grid-cols-2 md:grid-rows-1">
          <dl className="row-start-2 mt-3 md:col-start-1 md:row-start-1 md:mt-0">
            <dt className="font-medium text-gray-500">Composer</dt>
            <dd className="mt-1">
              <CreatorList creators={aria.opera.composers} />
            </dd>

            <dt className="mt-6 font-medium text-gray-500">Librettist</dt>
            <dd className="mt-1">
              <CreatorList creators={aria.opera.librettists} />
            </dd>

            <dt className="mt-6 font-medium text-gray-500">Opera</dt>
            <dd className="mt-1">
              <Link
                href={`/operas/${aria.opera.slug.current}`}
                className="text-cyan-600 hover:underline"
              >
                {aria.opera.title}
              </Link>
            </dd>

            <dt className="mt-6 font-medium text-gray-500">Score</dt>
            <dd className="mt-1 text-gray-900">
              {aria.scoreLink !== undefined && aria.scoreLink && (
                <ScoreLink link={aria.scoreLink} />
              )}
            </dd>

            {aria.performanceLinks !== undefined && aria.performanceLinks && (
              <>
                <dt className="mt-6 font-medium text-gray-500">Performances</dt>
                <dd className="mt-1">
                  <ExternalMediaList links={aria.performanceLinks} />
                </dd>
              </>
            )}
          </dl>

          <dl className="row-start-1 md:col-start-2">
            <dt className="font-medium text-gray-500">Voice Type</dt>
            <dd className="mt-1">{aria.voiceType.displayName}</dd>

            <dt className="mt-6 font-medium text-gray-500">Character</dt>
            <dd className="mt-1">{aria.character}</dd>

            <dt className="mt-6 font-medium text-gray-500">Description</dt>
            <dd className="prose mt-1 max-w-2xl text-gray-900">
              <PortableText value={aria.description} />
            </dd>

            <dt className="mt-6 font-medium text-gray-500">Length</dt>
            <dd className="mt-1">{aria.length}</dd>

            {aria.tessitura !== undefined && aria.tessitura && (
              <img
                className="mt-6 h-36 w-36 rounded-md p-1 ring-2 ring-gray-200"
                alt={`Image of the tessitura for the aria`}
                src={urlForImage(aria.tessitura).width(144).height(144).url()}
              />
            )}
          </dl>
        </div>
      </div>
    </div>
  );
}
