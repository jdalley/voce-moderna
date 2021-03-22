import { voiceTypes } from '@utils/enums';
import {
  classNames,
  voiceHoverToGradientMap,
  voiceToGradientMap,
} from '@utils/tailwind';

export default function VoiceTypeGroup() {
  return (
    <div className="flex justify-center">
      {Object.entries(voiceTypes).map(([key, value]) => {
        return (
          <button
            type="button"
            className={classNames(
              'flex-wrap items-center m-4 px-4 py-2 border border-transparent',
              'text-base font-medium rounded-md shadow-sm text-white',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
              'bg-gradient-to-r',
              voiceToGradientMap[key],
              voiceHoverToGradientMap[key + 'Hover']
            )}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
}
