import Layout, { LayoutProps } from '@components/Layout';
import { allOperas } from '@utils/queries';
import { getClient } from '@utils/sanity.server';
import opera from 'studio/schemas/opera';

export default function Index({ operas, preview }) {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'Home',
    },
  };

  return (
    <Layout customMeta={layoutProps.customMeta}>
      <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
        Project Voce Moderna
      </h1>
      <h2 className="text-5xl text-center text-gray-700 dark:text-gray-100">
        Listing of {operas.length} operas
      </h2>
      {operas.map((opera) => {
        return (
          <div key={opera.slug} className="py-5">
            <div className="text-center">
              {opera.slug} - {opera.title}
              {/* {aria.title[0].text} - ({aria.voice_type.name}) */}
            </div>
            {/* <div className="text-center">
              <button
                className="snipcart-add-item inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                data-item-id={aria.piano_track[0].track_id}
                data-item-price={aria.piano_track[0].track_price}
                data-item-url="/"
                data-item-description={
                  aria.piano_track[0].track_description[0].text
                }
                data-item-name={aria.piano_track[0].track_name}
                data-item-file-guid={aria.vocal_track[0].file_guid}
              >
                Buy Piano Track
              </button>
              <button
                className="snipcart-add-item mx-4 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                data-item-id={aria.vocal_track[0].track_id}
                data-item-price={aria.vocal_track[0].track_price}
                data-item-url="/"
                data-item-description={
                  aria.vocal_track[0].track_description[0].text
                }
                data-item-name={aria.vocal_track[0].track_name}
                data-item-file-guid={aria.vocal_track[0].file_guid}
              >
                Buy Vocal Track
              </button>
            </div> */}
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const operas = await getClient(preview).fetch(allOperas);

  console.log(operas);

  return {
    props: { operas, preview },
  };
}
