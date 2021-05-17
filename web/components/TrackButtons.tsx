import { classNames } from '@utils/tailwind';

export default function TrackButtons({ pianoTrack, vocalTrack }) {
  const buttonClasses = classNames(
    'snipcart-add-item',
    'block w-full px-2.5 py-2',
    'text-sm font-medium text-white',
    'border border-transparent rounded shadow-sm',
    'bg-gradient-to-r',
    'sm:inline-block sm:w-auto'
  );

  return (
    <>
      <button
        className={classNames(
          buttonClasses,
          'from-blue-600 to-blue-500',
          'hover:from-blue-700 hover:to-blue-600'
        )}
        data-item-id={pianoTrack.id}
        data-item-price={pianoTrack.price}
        data-item-url={pianoTrack.relativeUrl}
        data-item-description={pianoTrack.description}
        data-item-name={pianoTrack.name}
        data-item-file-guid={pianoTrack.fileGuid}
        data-item-max-quantity="1"
      >
        Buy Piano Track
      </button>
      <button
        className={classNames(
          buttonClasses,
          'mt-2',
          'sm:ml-4 sm:my-0',
          'from-violet-600 to-violet-500',
          'hover:from-violet-700 hover:to-violet-600'
        )}
        data-item-id={vocalTrack.id}
        data-item-price={vocalTrack.price}
        data-item-url={vocalTrack.relativeUrl}
        data-item-description={vocalTrack.description}
        data-item-name={vocalTrack.name}
        data-item-file-guid={vocalTrack.fileGuid}
        data-item-max-quantity="1"
      >
        Buy Vocal Track
      </button>
    </>
  );
}
