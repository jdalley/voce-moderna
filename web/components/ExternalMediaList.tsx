import { ExternalLinkIcon } from '@heroicons/react/solid';

export default function ExternalMediaList({ links }) {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.url} className="mt-1 text-cyan-600">
          <a href={link.url} className=" hover:underline">
            {link.description}
          </a>
          <ExternalLinkIcon className="inline-block mb-1 h-4 w-4 mx-1" />
        </li>
      ))}
    </ul>
  );
}
