import { urlForImage } from '@utils/sanity';
import Link from 'next/link';
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
      {creators.map((creator) => (
        <li key={creator.slug.current} className="mt-1">
          <img
            className="inline-block mr-3 h-8 w-8 rounded-full"
            alt={`Avatar photo of ${creator.firstName} ${creator.lastName}`}
            src={urlForImage(creator.photo).width(32).height(32).url()}
          />
          <Link href={`/creators/${creator.slug.current}`}>
            <a className="whitespace-nowrap text-cyan-600 hover:underline">
              {`${creator.firstName} ${creator.lastName}`}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
