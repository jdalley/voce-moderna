export default function TrackButtons({ pianoTrack, vocalTrack }) {
  return (
    <>
      <div className="text-center">
        <button
          className="snipcart-add-item inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          data-item-id={pianoTrack.id}
          data-item-price={pianoTrack.price}
          data-item-url={pianoTrack.relativeUrl}
          data-item-description={pianoTrack.description}
          data-item-name={pianoTrack.name}
          data-item-file-guid={pianoTrack.fileGuid}
        >
          Buy Piano Track
        </button>
        <button
          className="snipcart-add-item mx-4 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          data-item-id={vocalTrack.id}
          data-item-price={vocalTrack.price}
          data-item-url={vocalTrack.relativeUrl}
          data-item-description={vocalTrack.description}
          data-item-name={vocalTrack.name}
          data-item-file-guid={vocalTrack.fileGuid}
        >
          Buy Vocal Track
        </button>
      </div>
    </>
  );
}
