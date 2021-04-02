import { ExternalLinkIcon } from '@heroicons/react/solid';

export default function ExternalMediaList({ links }) {
  return (
    <>
      <dt className="mt-6 font-medium text-gray-500">Media</dt>
      {links.map((link) => (
        <dd key={link.url} className="mt-1">
          <span className="inline-flex items-center">
            <a href={link.url} className="text-cyan-600 hover:underline">
              {link.description}
            </a>
            <ExternalLinkIcon className="h-4 w-4 mx-1" />
          </span>
        </dd>
      ))}
    </>
  );
}
