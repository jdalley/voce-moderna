import Link from 'next/link';
import CreatorList from '@components/CreatorList';
import type { SearchResult } from 'types/sanity';

export default function SearchResultRow({ result }: { result: SearchResult }) {
  return (
    <tr key={result?.id}>
      <td className="px-6 py-4 text-sm">
        <Link href={'/operas/' + result.opera.slug.current}>
          <a className="text-cyan-600 hover:underline">{result.opera.title}</a>
        </Link>
      </td>
      <td className="px-6 py-4 text-sm">
        <Link href={'/arias/' + result.ariaSlug}>
          <a className="text-cyan-600 hover:underline">{result.ariaTitle}</a>
        </Link>
      </td>
      <td className="px-6 py-4 text-sm">
        <CreatorList creators={result.opera.composers} />
      </td>
      <td className="px-6 py-4 text-sm">
        <CreatorList creators={result.opera.librettists} />
      </td>
    </tr>
  );
}
