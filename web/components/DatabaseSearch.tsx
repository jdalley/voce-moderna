import SearchResultRow from '@components/SearchResultRow';
import { voiceTypes } from '@utils/enums';
import { classNames, voiceToGradientMap } from '@utils/tailwind';

export default function DatabaseSearch() {
  return (
    <div className="py-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-8 lg:gap-6">
        <div className="bg-white sticky top-6 lg:relative lg:top-0 lg:col-span-2">
          <div aria-label="Search criteria" className="lg:sticky lg:top-6">
            <div className="flex flex-col rounded-lg shadow overflow-hidden border-b border-gray-200">
              <div
                className={classNames(
                  'h-20',
                  'bg-gradient-to-r',
                  voiceToGradientMap['soprano']
                )}
              ></div>
              <div className="-mt-14 mx-2 px-3 pt-4 pb-6 bg-white rounded-lg flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Voice Type
                  </label>
                  <select
                    id="location"
                    name="location"
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
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Search Type
                  </label>
                  <select
                    id="location"
                    name="location"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Opera Title</option>
                    <option>Aria Title</option>
                    <option>Composer Name</option>
                    <option>Librettist Name</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Search
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="What are you looking for?"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="lg:col-span-6">
          <div className=" flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Opera
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Composer
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Librettist
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Aria
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <SearchResultRow result={``}></SearchResultRow>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
