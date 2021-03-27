import { classNames, voiceToGradientMap } from '@utils/tailwind';

export default function FeaturedAriaCard({ featuredAria }) {
  const aria = featuredAria.aria;

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div
        className={classNames(
          'h-24',
          'bg-gradient-to-r',
          voiceToGradientMap[aria.voiceType.name]
        )}
      ></div>
      <div className="-mt-10 mx-5 px-8 pt-6 pb-7 bg-white rounded-lg flex-1 flex flex-col justify-between ">
        <div className="flex-1">
          <p className="text-lg leading-6 font-medium text-gray-900">
            Voice Type
          </p>
          <p className="text-sm font-medium">{aria.voiceType.displayName}</p>
        </div>
        <div className="flex-1 mt-3">
          <p className="ext-lg leading-6 font-medium text-gray-900">Aria</p>
          <p className="text-sm font-medium">
            <a
              href={'/aria/' + aria.slug}
              className="text-cyan-600 hover:underline"
            >
              {aria.title}
            </a>
          </p>
        </div>
        <div className="flex-1 mt-3">
          <p className="text-lg leading-6 font-medium text-gray-900">Opera</p>
          <p className="text-sm font-medium">
            <a
              href={'/opera/' + aria.opera.slug}
              className="text-cyan-600 hover:underline"
            >
              {aria.opera.title}
            </a>
          </p>
        </div>
        <div className="flex-1 mt-3 ">
          <p className="text-lg leading-6 font-medium text-gray-900">
            Creators
          </p>
          {aria.opera.composers.map((c) => (
            <div key={c.id} className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                <a
                  href={'/creator/' + c.slug}
                  className="text-cyan-600 hover:underline"
                >
                  {c.firstName} {c.lastName} (Composer)
                </a>
              </p>
            </div>
          ))}
          {aria.opera.librettists.map((l) => (
            <div key={l.id} className="flex-1">
              <p className="mt-1 text-sm font-medium text-gray-900">
                <a
                  href={'/creator/' + l.slug}
                  className="text-cyan-600 hover:underline"
                >
                  {l.firstName} {l.lastName} (Librettist)
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
