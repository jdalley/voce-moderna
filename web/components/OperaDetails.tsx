import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react';
import ExternalMediaList from '@components/ExternalMediaList';
import CreatorList from '@components/CreatorList';
import ScoreLink from '@components/ScoreLink';

export default function OperaDetails({ opera }) {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow overflow-hidden sm:rounded-lg sm:mt-4">
      <div>
        <div className="relative h-32 w-full bg-gradient-to-tr from-yellow-200 via-cyan-600 to-rose-600 lg:h-48">
          <div className="absolute inset-0 bg-topography"></div>
        </div>
      </div>
      <div className="px-4 py-5 sm:px-9">
        <h1 className="text-xl font-medium leading-9 text-gray-900">
          {opera.title}
        </h1>
      </div>
      <div className="border-t border-gray-200 px-4 pt-5 pb-5 sm:pb-9 sm:px-9">
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
            {opera.sourceMaterial !== undefined && (
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
                  <li key={aria.slug}>
                    <Link href={`/arias/${aria.slug}`}>
                      <a className="text-cyan-600 hover:underline">
                        {aria.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </dd>
            {opera.scoreLink !== undefined && (
              <>
                <dt className="mt-6 font-medium text-gray-500">Score</dt>
                <dd className="mt-1 text-gray-900">
                  <ScoreLink link={opera.scoreLink} />
                </dd>
              </>
            )}
            {opera.mediaLinks !== undefined && (
              <>
                <dt className="mt-6 font-medium text-gray-500">Media</dt>
                <dd className="mt-1">
                  <ExternalMediaList links={opera.mediaLinks} />
                </dd>
              </>
            )}
          </div>
          <div className="sm:col-span-2">
            <dt className=" font-medium text-gray-500">Synopsis</dt>
            <dd className="mt-1 text-gray-900 prose max-w-2xl">
              {opera.synopsis !== undefined && (
                <BlockContent blocks={opera.synopsis} />
              )}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
