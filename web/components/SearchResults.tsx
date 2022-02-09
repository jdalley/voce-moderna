import SearchResultRow from '@components/SearchResultRow';
import { useMemo, useState } from 'react';
import type { SearchResult } from 'types/sanity';
import LoadingSpinner from './LoadingSpinner';

export default function SearchResults({
  results,
  loading,
}: {
  results: Array<SearchResult>;
  loading: boolean;
}) {
  const [sortConfig, setSortConfig] = useState(null);

  const doSort = (key: string) => {
    let direction = 'ascending';
    if (
      sortConfig !== null &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedResults = useMemo(() => {
    let resultsToSort = [...results];
    if (sortConfig !== null) {
      switch (sortConfig.key) {
        case 'opera':
          resultsToSort.sort((a, b) => {
            if (a.opera.title.toLowerCase() < b.opera.title.toLowerCase()) {
              return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a.opera.title.toLowerCase() > b.opera.title.toLowerCase()) {
              return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
          });
          break;
        case 'aria':
          resultsToSort.sort((a, b) => {
            if (a.ariaTitle.toLowerCase() < b.ariaTitle.toLowerCase()) {
              return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a.ariaTitle.toLowerCase() > b.ariaTitle.toLowerCase()) {
              return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
          });
          break;
        case 'composer':
          resultsToSort.sort((a, b) => {
            if (
              a.opera.composers[0].lastName.toLowerCase() <
              b.opera.composers[0].lastName.toLowerCase()
            ) {
              return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (
              a.opera.composers[0].lastName.toLowerCase() >
              b.opera.composers[0].lastName.toLowerCase()
            ) {
              return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
          });
          break;
        case 'librettist':
          resultsToSort.sort((a, b) => {
            if (
              a.opera.librettists[0].lastName.toLowerCase() <
              b.opera.librettists[0].lastName.toLowerCase()
            ) {
              return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (
              a.opera.librettists[0].lastName.toLowerCase() >
              b.opera.librettists[0].lastName.toLowerCase()
            ) {
              return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
          });
          break;
      }
    }
    return resultsToSort;
  }, [results, sortConfig]);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          {loading ? (
            <LoadingSpinner />
          ) : (
            sortedResults?.length === 0 && (
              <div className="text-center">
                <p className="my-14 text-xl text-gray-500">No results found</p>
              </div>
            )
          )}
          {!loading && sortedResults?.length > 0 && (
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left">
                      <button
                        type="button"
                        onClick={() => doSort('opera')}
                        className="text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        Opera
                      </button>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <button
                        type="button"
                        onClick={() => doSort('aria')}
                        className="text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        Aria
                      </button>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <button
                        type="button"
                        onClick={() => doSort('composer')}
                        className="text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        Composer
                      </button>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <button
                        type="button"
                        onClick={() => doSort('librettist')}
                        className="text-xs font-medium uppercase tracking-wider text-gray-500"
                      >
                        Librettist
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {sortedResults?.map((result) => (
                    <SearchResultRow key={result.ariaSlug} result={result} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
