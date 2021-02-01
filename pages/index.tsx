import Layout, { LayoutProps } from '../components/Layout';
import { getAllArias } from '../lib/cms';

export default function Index(props) {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'Home'
    }
  };

  const aria = props.allArias.length > 0 ? props.allArias[0].node : null;

  return (
    <Layout customMeta={layoutProps.customMeta}>
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Project Voce Moderna
        </h1>
        {console.log(props.allArias[0].node)}
        {console.log(aria)}
        <div className="mt-28 text-center">
          {aria.title[0].text} - ({aria.voice_type.name})
        </div>
        <div className="mb-10 text-center">{aria.opera.title[0].text}</div>
        <div className="text-center">
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
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ preview = false, previewData }) {
  const allArias = await getAllArias(previewData);

  return {
    props: { preview, allArias }
  };
}
