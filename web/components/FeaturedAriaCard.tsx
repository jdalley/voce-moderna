import Link from 'next/link';
import { classNames, voiceToGradientMap } from '@utils/tailwind';
import { urlForImage } from '@utils/sanity';
import CreatorList from '@components/CreatorList';
import type { FeaturedAria } from 'types/sanity';

export default function FeaturedAriaCard({
  featuredAria,
}: {
  featuredAria: FeaturedAria;
}) {
  const aria = featuredAria.aria;

  return (
    <article className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div
        className={classNames(
          'h-24',
          'bg-linear-to-r',
          voiceToGradientMap[aria.voiceType.name]
        )}
      ></div>
      <div className="mx-5 -mt-10 flex flex-1 flex-col justify-between rounded-lg bg-white px-8 pt-6 pb-7 ">
        <div className="flex-1">
          <dt className="font-medium text-gray-500">Voice Type</dt>
          <dd className="mt-1">
            <span className="text-gray-900">{aria.voiceType.displayName}</span>
          </dd>
        </div>
        <div className="mt-3 flex-1">
          <dt className="font-medium text-gray-500">Aria</dt>
          <dd className="mt-1">
            <Link
              href={'/arias/' + aria.slug.current}
              className="text-cyan-600 hover:underline"
            >
              {aria.title}
            </Link>
          </dd>
        </div>
        <div className="mt-3 flex-1">
          <dt className="font-medium text-gray-500">Opera</dt>
          <dd className="mt-1">
            <Link
              href={'/operas/' + aria.opera.slug.current}
              className="text-cyan-600 hover:underline"
            >
              {aria.opera.title}
            </Link>
          </dd>
        </div>
        <div className="mt-3 flex-1 ">
          <dt className="font-medium text-gray-500">Composer</dt>
          <dd className="mt-1">
            <CreatorList creators={aria.opera.composers} />
          </dd>
        </div>
        <div className="mt-3 flex-1 ">
          <dt className="font-medium text-gray-500">Librettist</dt>
          <dd className="mt-1">
            <CreatorList creators={aria.opera.librettists} />
          </dd>
        </div>
      </div>
    </article>
  );
}
