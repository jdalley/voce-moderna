import BlockContent from '@sanity/block-content-to-react';
import { urlForImage } from '@utils/sanity';

export default function Creator({ creator }) {
  const creatorName = `${creator.firstName} ${creator.lastName}`;

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg sm:mt-4">
      <div>
        <div className="relative h-32 w-full bg-piano-man lg:h-48">
          <div className="absolute inset-0 bg-gradient-to-t from-white"></div>
        </div>
        <div className="relative max-w-5xl px-4 sm:px-6">
          <div className="-mt-12 sm:-mt-16">
            <div className="flex">
              <img
                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                alt={`Photo of ${creatorName}`}
                src={urlForImage(creator.photo).width(128).height(128).url()}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-5 sm:px-9">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {creatorName}
        </h3>
      </div>
      <div className="border-t border-gray-200 px-4 pt-5 pb-5 sm:pb-9 sm:px-9">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Website</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <a
                href={creator.website}
                className="text-cyan-600 hover:underline"
              >
                {creator.website}
              </a>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Biography</dt>
            <dd className="mt-1 text-sm text-gray-900 prose max-w-none">
              <BlockContent blocks={creator.bio} />
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Operas</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <ul>
                {creator.operas.map((opera) => (
                  <li key={opera.slug}>
                    <a
                      href={`/operas/${opera.slug}`}
                      className="text-cyan-600 hover:underline"
                    >
                      {opera.title}
                    </a>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
