import { urlForImage } from '@utils/sanity';
import Link from 'next/link';

export default function CreatorList({ creators }) {
  return (
    <ul>
      {creators.map((creator) => (
        <li key={creator.slug} className="flex-1 mt-1">
          <img
            className="inline-block mr-3 h-8 w-8 rounded-full"
            alt={`Avatar photo of ${creator.firstName} ${creator.lastName}`}
            src={urlForImage(creator.photo).width(32).height(32).url()}
          />
          <Link href={`/creators/${creator.slug}`}>
            <a className="text-cyan-600 hover:underline">
              {`${creator.firstName} ${creator.lastName}`}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}