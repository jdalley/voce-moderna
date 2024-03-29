import Link from 'next/link';
import CreatorList from '@components/CreatorList';
import type { SearchResult } from 'types/sanity';

export default function SearchResultRow({ result }: { result: SearchResult }) {
  return (
    <tr key={result?.id}>
      <td className="px-6 py-4 text-sm">
        <Link
          href={'/operas/' + result.opera.slug.current}
          className="text-cyan-600 hover:underline">
          {result.opera.title}
        </Link>
      </td>
      <td className="px-6 py-4 text-sm">
        <Link
          href={'/arias/' + result.ariaSlug}
          className="text-cyan-600 hover:underline">
          {result.ariaTitle}
        </Link>
      </td>
      <td className="px-6 py-4 text-sm">
        <CreatorList creators={result.opera.composers} splitLine={true} />
      </td>
      <td className="px-6 py-4 text-sm">
        <CreatorList creators={result.opera.librettists} splitLine={true} />
      </td>
    </tr>
  );
}
