import { FormEvent, MouseEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { parse } from 'querystring';
import { SearchIcon, XIcon } from '@heroicons/react/solid';
import { searchTypes, voiceTypes } from '@utils/enums';
import { sanityClient } from '@utils/sanity.server';
import { getSearchQuery } from '@utils/queries';
import {
  classNames,
  voiceHoverToGradientMap,
  voiceToGradientMap,
} from '@utils/tailwind';
import Layout, { LayoutProps } from '@components/Layout';
import SearchResults from '@components/SearchResults';
import type { SearchResult } from 'types/sanity';

export default function Database() {
  const router = useRouter();
  const { asPath } = router;
  const searchResultDefault: Array<SearchResult> = [];

  const [voiceType, setVoiceType] = useState('');
  const [searchType, setSearchType] = useState('opera');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(searchResultDefault);
  const [searchLoading, setSearchLoading] = useState(false);

  // Update state from the query string
  useEffect(() => {
    const query = parse(asPath.substr(asPath.indexOf('?') + 1));
    const voice: string = query.voice as string;
    const type: string = query.type as string;
    const search: string = query.search as string;

    if (voice) {
      setVoiceType(voice);
    }
    if (type) {
      setSearchType(type);
    }
    if (search) {
      setSearchTerm(search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once.

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voiceType]);

  function search() {
    // Update route params
    const params = {};
    if (voiceType) {
      Object.assign(params, { voice: voiceType });
    }
    if (searchType) {
      Object.assign(params, { type: searchType });
    }
    if (searchTerm) {
      Object.assign(params, { search: searchTerm });
    }
    router.push(
      {
        pathname: '/database',
        query: params,
      },
      undefined,
      { shallow: true }
    );

    // Execute the search
    const searchCriteria = getSearchQuery(searchType, searchTerm, voiceType);
    if (searchCriteria) {
      setSearchLoading(true);
      sanityClient
        .fetch(searchCriteria.query, searchCriteria.params)
        .then((results) => {
          setSearchResults(results);
        })
        .finally(() => {
          setSearchLoading(false);
        });
    }
  }

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    search();
  }

  function handleReset(e: MouseEvent) {
    e.preventDefault();
    setSearchTerm('');
    (e.currentTarget as HTMLButtonElement).blur();
  }

  const layoutProps: LayoutProps = {
    customMeta: { title: 'Database - Voce Moderna' },
  };
  const voiceTypeGradient =
    voiceType === '' || voiceType === 'all'
      ? 'bg-gradient-to-tr from-amber-300 via-cyan-600 to-rose-600'
      : `bg-gradient-to-r ${voiceToGradientMap[voiceType]}`;
  const voiceTypeHoverGradient =
    voiceType === '' || voiceType === 'all'
      ? 'hover:from-amber-400 hover:via-cyan-700 hover:to-rose-700'
      : `${voiceHoverToGradientMap[voiceType]}`;

  return (
    <Layout customMeta={layoutProps.customMeta} preview={layoutProps.preview}>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4 sm:py-2 lg:py-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-10 lg:gap-6">
        <div className="bg-white sticky top-0 sm:top-6 lg:relative lg:top-0 lg:col-span-3">
          <div aria-label="Search criteria" className="lg:sticky lg:top-6">
            <div className="flex flex-col rounded-lg shadow overflow-hidden border-b border-gray-200">
              <div className={classNames('h-20', voiceTypeGradient)}></div>
              <form
                onSubmit={handleSearch}
                className="-mt-14 mx-2 px-3 pt-3 pb-4 bg-white rounded-lg flex-1 flex flex-col justify-between space-y-4 sm:px-20 lg:px-4"
              >
                <div>
                  <label
                    htmlFor="voiceType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Voice Type
                  </label>
                  <select
                    id="voiceType"
                    name="voiceType"
                    value={voiceType}
                    onChange={(e) => setVoiceType(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-1 sm:py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option value="" disabled>
                      Select voice type...
                    </option>
                    <option value="all">All</option>
                    {Object.entries(voiceTypes).map(([key, value]) => {
                      return (
                        <option key={key} value={key}>
                          {value}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="searchType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Search Type
                  </label>
                  <select
                    id="searchType"
                    name="searchType"
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-1 sm:py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    {Object.entries(searchTypes).map(([key, value]) => {
                      return (
                        <option key={key} value={key}>
                          {value}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="relative mt-1">
                  <input
                    type="text"
                    name="searchTerm"
                    id="searchTerm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="shadow-sm py-1 sm:py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Search"
                  />
                  <button
                    type="reset"
                    onClick={handleReset}
                    className="absolute top-[5px] right-[9px] p-1 text-gray-400 bg-transparent rounded-md cursor-pointer sm:top-[7px] sm:right-2 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Clear search</span>
                    <XIcon className="h-4 w-4" />
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className={classNames(
                      'w-full inline-flex items-center px-4 py-2',
                      'shadow-sm text-base font-medium rounded-md text-white',
                      'sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                      voiceTypeGradient,
                      voiceTypeHoverGradient
                    )}
                  >
                    <SearchIcon className="h-6 w-6 mr-2" /> Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <main className="lg:col-span-7">
          {voiceType === '' ? (
            <div className="text-center">
              <p className="my-10 text-xl text-gray-500">
                Pick a voice type to get started
              </p>
            </div>
          ) : (
            <SearchResults results={searchResults} loading={searchLoading} />
          )}
        </main>
      </div>
    </Layout>
  );
}
