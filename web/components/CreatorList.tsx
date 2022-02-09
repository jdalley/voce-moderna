import Link from 'next/link';
import { urlForImage } from '@utils/sanity';
import { getFullName, getInitials } from '@utils/content';
import type { Creator } from 'types/sanity';
import { classNames } from '@utils/tailwind';

export default function CreatorList({
  creators,
  splitLine,
}: {
  creators: Array<Creator>;
  splitLine?: boolean;
}) {
  if (creators === undefined || !creators || creators.length === 0) {
    return null;
  }

  return (
    <ul>
      {creators.map((creator) => {
        const fullName = getFullName(creator.firstName, creator.lastName);
        const initials = getInitials(creator.firstName, creator.lastName);
        return (
          <li key={creator.slug.current} className="mt-1">
            {creator.photo ? (
              <img
                className={classNames(
                  splitLine ? 'block' : 'inline-block',
                  `mr-3 h-8 w-8 rounded-full`
                )}
                alt={`Avatar photo of ${creator.firstName} ${creator.lastName}`}
                src={urlForImage(creator.photo).width(32).height(32).url()}
              />
            ) : (
              <span
                className={classNames(
                  splitLine ? 'flex' : 'inline-flex',
                  'items-center justify-center',
                  'mr-3 h-8 w-8 rounded-full',
                  'bg-gray-100 font-bold'
                )}
              >
                <span className="">{initials}</span>
              </span>
            )}

            <Link href={`/creators/${creator.slug.current}`}>
              <a className="whitespace-nowrap text-cyan-600 hover:underline">
                {`${fullName}`}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
