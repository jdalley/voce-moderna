import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react';
import { urlForImage } from '@utils/sanity';
import ExternalMediaList from '@components/ExternalMediaList';
import CreatorList from '@components/CreatorList';
import ScoreLink from '@components/ScoreLink';
import TrackButtons from '@components/TrackButtons';

export default function AriaDetails({ aria }) {
  // Right: Voice Type, Character, Description, Length

  return (
    <div className="max-w-5xl mx-auto bg-white shadow overflow-hidden sm:rounded-lg sm:mt-4">
      <div className="relative h-32 w-full bg-gradient-to-tr from-yellow-200 via-cyan-600 to-rose-600 lg:h-48">
        <div className="absolute inset-0 bg-topography"></div>
      </div>
      <div className="flex flex-col px-4 py-5 sm:px-9 sm:justify-between sm:flex-row">
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
      <div className="border-t border-gray-200 px-4 pt-5 pb-5 sm:pb-9 sm:px-9">
        <div className="grid grid-cols-1 gap-4 md:grid-flow-col-dense md:grid-cols-2 md:grid-rows-1">
          <dl className="mt-3 row-start-2 md:col-start-1 md:row-start-1 md:mt-0">
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
              <Link href={`/operas/${aria.opera.slug}`}>
                <a className="text-cyan-600 hover:underline">
                  {aria.opera.title}
                </a>
              </Link>
            </dd>

            <dt className="mt-6 font-medium text-gray-500">Score</dt>
            <dd className="mt-1 text-gray-900">
              {aria.scoreLink !== undefined && (
                <ScoreLink link={aria.scoreLink} />
              )}
            </dd>

            <dt className="mt-6 font-medium text-gray-500">Performances</dt>
            <dd className="mt-1">
              {aria.performanceLinks !== undefined && (
                <ExternalMediaList links={aria.performanceLinks} />
              )}
            </dd>
          </dl>

          <dl className="row-start-1 md:col-start-2">
            <dt className="font-medium text-gray-500">Voice Type</dt>
            <dd className="mt-1">{aria.voiceType.displayName}</dd>

            <dt className="mt-6 font-medium text-gray-500">Character</dt>
            <dd className="mt-1">{aria.character}</dd>

            <dt className="mt-6 font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-gray-900 prose max-w-2xl">
              <BlockContent blocks={aria.description} />
            </dd>

            <dt className="mt-6 font-medium text-gray-500">Length</dt>
            <dd className="mt-1">{aria.length}</dd>

            <img
              className="mt-6 h-36 w-36 rounded-md p-1 ring-2 ring-gray-200"
              alt={`Image of the tessitura for the aria`}
              src={urlForImage(aria.tessitura).width(144).height(144).url()}
            />
          </dl>
        </div>
      </div>
    </div>
  );
}
