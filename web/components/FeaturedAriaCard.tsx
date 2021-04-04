import Link from 'next/link';
import { classNames, voiceToGradientMap } from '@utils/tailwind';
import { urlForImage } from '@utils/sanity';

export default function FeaturedAriaCard({ featuredAria }) {
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
            <Link href={'/arias/' + aria.slug}>
              <a className="text-cyan-600 hover:underline">{aria.title}</a>
            </Link>
          </dd>
        </div>
        <div className="flex-1 mt-3">
          <dt className="font-medium text-gray-500">Opera</dt>
          <dd className="mt-1">
            <Link href={'/operas/' + aria.opera.slug}>
              <a className="text-cyan-600 hover:underline">
                {aria.opera.title}
              </a>
            </Link>
          </dd>
        </div>
        <div className="flex-1 mt-3 ">
          <dt className="font-medium text-gray-500">Creators</dt>
          {aria.opera.composers.map((composer) => (
            <dd key={composer.slug} className="flex-1 mt-1">
              <img
                className="inline-block mr-3 h-8 w-8 rounded-full"
                alt={`Avatar photo of ${composer.firstName} ${composer.lastName}`}
                src={urlForImage(composer.photo).width(32).height(32).url()}
              />
              <Link href={'/creators/' + composer.slug}>
                <a className="text-cyan-600 hover:underline">
                  {composer.firstName} {composer.lastName} (Composer)
                </a>
              </Link>
            </dd>
          ))}
          {aria.opera.librettists.map((librettist) => (
            <dd key={librettist.slug} className="flex-1 mt-1">
              <img
                className="inline-block mr-3 h-8 w-8 rounded-full"
                alt={`Avatar photo of ${librettist.firstName} ${librettist.lastName}`}
                src={urlForImage(librettist.photo).width(32).height(32).url()}
              />
              <Link href={'/creators/' + librettist.slug}>
                <a className="text-cyan-600 hover:underline">
                  {librettist.firstName} {librettist.lastName} (Librettist)
                </a>
              </Link>
            </dd>
          ))}
        </div>
      </div>
    </article>
  );
}
