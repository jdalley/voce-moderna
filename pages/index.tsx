import Layout, { LayoutProps } from '../components/Layout';

export default function Index(props: any) {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'Home'
    }
  };

  const arias = props.arias.results;

  return (
    <Layout customMeta={layoutProps.customMeta}>
      <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
        Project Voce Moderna
      </h1>
      <h2 className="text-5xl text-center text-gray-700 dark:text-gray-100">
        Listing of {arias.length} arias
      </h2>
      {arias.map((aria) => {
        return (
          <div key={aria.uid} className="py-5">
            <div className="text-center">
              {aria.uid} - {aria.data.title[0].text}
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

export async function getStaticProps({ preview = false, previewData }) {
  let arias = {};

  console.log('index -> getStaticProps was run.');

  return {
    props: { preview, arias }
  };
}
