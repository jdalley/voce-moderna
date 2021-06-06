import { classNames } from '@utils/tailwind';

interface Props {
  marginTop?: number;
}

/**
 * Shows a loading spinner.
 * @param marginTop Expects Tailwind margin sizing unit.
 * @returns
 */
export default function LoadingSpinner({ marginTop = 10 }: Props) {
  return (
    <div className={classNames('flex justify-center', `mt-${marginTop}`)}>
      <svg
        className="animate-spin h-20 w-20 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="7"
          stroke="currentColor"
          strokeWidth="2"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
}
