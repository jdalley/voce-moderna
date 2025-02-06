import { classNames } from '@utils/tailwind';
import type { Track } from 'types/sanity';

export default function TrackButtons({
  pianoTrack,
  vocalTrack,
}: {
  pianoTrack: Track;
  vocalTrack: Track;
}) {
  const buttonClasses = classNames(
    'snipcart-add-item',
    'block w-full px-2.5 py-2',
    'text-sm font-medium text-white',
    'border border-transparent rounded-sm shadow-xs',
    'bg-linear-to-r',
    'sm:inline-block sm:w-auto'
  );

  if (
    (pianoTrack === undefined || !pianoTrack) &&
    (vocalTrack === undefined || !vocalTrack)
  ) {
    return (
      <>
        <div className="h-full text-right text-gray-900">
          <p>Request a track:</p>
          <div>
            <a
              className="ml-1 text-cyan-600 hover:underline"
              href="mailto:info@projectvocemoderna.com"
            >
              info@projectvocemoderna.com
            </a>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {pianoTrack !== undefined && pianoTrack && (
          <button
            className={classNames(
              buttonClasses,
              'from-red-600 to-rose-500',
              'hover:from-red-700 hover:to-rose-600'
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
        )}
        {vocalTrack !== undefined && vocalTrack && (
          <button
            className={classNames(
              buttonClasses,
              'mt-2',
              'sm:my-0 sm:ml-4',
              'from-blue-600 to-violet-500',
              'hover:from-blue-700 hover:to-violet-600'
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
        )}
      </>
    );
  }
}
