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
    <article className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div
        className={classNames(
          'h-24',
          'bg-gradient-to-r',
          voiceToGradientMap[aria.voiceType.name]
        )}
      ></div>
      <div className="-mt-10 mx-5 px-8 pt-6 pb-7 bg-white rounded-lg flex-1 flex flex-col justify-between ">
        <div className="flex-1">
          <dt className="font-medium text-gray-500">Voice Type</dt>
          <dd className="mt-1">
            <span className="text-gray-900">{aria.voiceType.displayName}</span>
          </dd>
        </div>
        <div className="flex-1 mt-3">
          <dt className="font-medium text-gray-500">Aria</dt>
          <dd className="mt-1">
            <Link href={'/arias/' + aria.slug.current}>
              <a className="text-cyan-600 hover:underline">{aria.title}</a>
            </Link>
          </dd>
        </div>
        <div className="flex-1 mt-3">
          <dt className="font-medium text-gray-500">Opera</dt>
          <dd className="mt-1">
            <Link href={'/operas/' + aria.opera.slug.current}>
              <a className="text-cyan-600 hover:underline">
                {aria.opera.title}
              </a>
            </Link>
          </dd>
        </div>
        <div className="flex-1 mt-3 ">
          <dt className="font-medium text-gray-500">Composer</dt>
          <dd className="mt-1">
            <CreatorList creators={aria.opera.composers} />
          </dd>
        </div>
        <div className="flex-1 mt-3 ">
          <dt className="font-medium text-gray-500">Librettist</dt>
          <dd className="mt-1">
            <CreatorList creators={aria.opera.librettists} />
          </dd>
        </div>
      </div>
    </article>
  );
}
