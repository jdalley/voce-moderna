import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import type { ExternalLink } from 'types/sanity';

export default function ExternalMediaList({
  links,
}: {
  links: Array<ExternalLink>;
}) {
  if (links === undefined || !links || links.length === 0) {
    return null;
  }
  return (
    <ul>
      {links.map((link) => (
        <li key={link.url} className="mt-1 text-cyan-600">
          <a href={link.url} className=" hover:underline">
            {link.description}
          </a>
          <ArrowTopRightOnSquareIcon className="mx-1 mb-1 inline-block h-4 w-4" />
        </li>
      ))}
    </ul>
  );
}
