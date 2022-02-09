import { ExternalLinkIcon } from '@heroicons/react/solid';
import type { ExternalLink } from 'types/sanity';

export default function ScoreLink({ link }: { link: ExternalLink }) {
  if (link === undefined || !link) {
    return null;
  }
  return (
    <>
      <p>{link.description}</p>
      <span className="my-1 inline-flex items-center text-cyan-600">
        <a
          href={link.url}
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get It Here
        </a>
        <ExternalLinkIcon className="mx-1 h-4 w-4" />
      </span>
    </>
  );
}
