import { useState } from 'react';
import { voiceTypes } from '@utils/enums';
import { classNames, voiceToGradientMap } from '@utils/tailwind';
import Layout, { LayoutProps } from '@components/Layout';
import SearchResults from '@components/SearchResults';
import { SearchIcon } from '@heroicons/react/solid';

export default function Database() {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'Database',
    },
  };

  const searchResults = [];

  const [voiceType, setVoiceType] = useState('');
  //TODO: Implement state for select/text changes in search criteria.
  const [searchType, setSearchType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const searchBorderGradient =
    voiceType === '' || voiceType === 'all'
      ? 'bg-gradient-to-tr from-yellow-200 via-cyan-600 to-rose-600'
      : `bg-gradient-to-r ${voiceToGradientMap[voiceType]}`;

  return (
    <Layout customMeta={layoutProps.customMeta} preview={layoutProps.preview}>
      <div className="py-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-10 lg:gap-6">
          <div className="bg-white sticky top-6 lg:relative lg:top-0 lg:col-span-3">
            <div aria-label="Search criteria" className="lg:sticky lg:top-6">
              <div className="flex flex-col rounded-lg shadow overflow-hidden border-b border-gray-200">
                <div className={classNames('h-20', searchBorderGradient)}></div>
                <div className="-mt-14 mx-2 px-3 pt-4 pb-6 bg-white rounded-lg flex-1 flex flex-col justify-between space-y-4 sm:px-20 lg:px-4">
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
                      defaultValue=""
                      onChange={(e) => setVoiceType(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="opera">Opera Title</option>
                      <option value="aria">Aria Title</option>
                      <option value="composer">Composer Name</option>
                      <option value="librettist">Librettist Name</option>
                    </select>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="searchTerm"
                      id="searchTerm"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Search"
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="w-full inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-600 to-indigo-500 sm:w-auto hover:from-indigo-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <SearchIcon className="h-6 w-6 mr-2" /> Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <main className="lg:col-span-7">
            <SearchResults results={searchResults} />
          </main>
        </div>
      </div>
    </Layout>
  );
}
