import Link from 'next/link';
import CreatorList from '@components/CreatorList';

export default function SearchResultRow({ result }) {
  return (
    <tr key={result?.id}>
      <td className="px-6 py-4 text-sm">
        <Link href={'/operas/' + result.opera.slug}>
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
