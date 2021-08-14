import Link from 'next/link';
import { urlForImage } from '@utils/sanity';
import { getFullName, getInitials } from '@utils/content';
import type { Creator } from 'types/sanity';

export default function CreatorList({
  creators,
}: {
  creators: Array<Creator>;
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
                className="inline-block mr-3 h-8 w-8 rounded-full"
                alt={`Avatar photo of ${creator.firstName} ${creator.lastName}`}
                src={urlForImage(creator.photo).width(32).height(32).url()}
              />
            ) : (
              <span className="inline-flex items-center justify-center h-8 w-8 mr-3 rounded-full font-bold bg-gray-100 ">
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
