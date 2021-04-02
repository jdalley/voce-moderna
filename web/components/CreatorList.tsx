import Link from 'next/link';

export default function CreatorList({ creators }) {
  return (
    <>
      {creators.map((creator) => (
        <dd key={creator.slug} className="mt-1">
          <Link href={`/creators/${creator.slug}`}>
            <a className="text-cyan-600 hover:underline">
              {`${creator.firstName} ${creator.lastName}`}
            </a>
          </Link>
        </dd>
      ))}
    </>
  );
}
