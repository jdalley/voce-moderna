import { ExternalLinkIcon } from '@heroicons/react/solid';

export default function ScoreLink({ link }) {
  if (link === undefined || !link) {
    return null;
  }
  return (
    <>
      <p>{link.description}</p>
      <span className="inline-flex items-center my-1 text-cyan-600">
        <a href={link.url} className="hover:underline">
          Get It Here
        </a>
        <ExternalLinkIcon className="h-4 w-4 mx-1" />
      </span>
    </>
  );
}
