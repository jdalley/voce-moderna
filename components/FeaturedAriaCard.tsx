export default function FeaturedAriaCard({ featuredAria }) {
  const aria = featuredAria.aria;

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-teal-500 to-cyan-600"></div>
      <div className="-mt-10 mx-5 rounded-lg flex-1 bg-white px-8 pb-6 flex flex-col justify-between text-center">
        <div className="flex-1">
          <p className="mt-3 text-lg leading-6 font-medium text-gray-900">
            Voice Type
          </p>
          <p className="text-sm font-medium">{aria.voiceType.name}</p>

          <p className="mt-3 text-lg leading-6 font-medium text-gray-900">
            Aria
          </p>
          <p className="text-sm font-medium">
            <a
              href={'/aria/' + aria.slug.current}
              className="text-indigo-600 hover:underline"
            >
              {aria.title}
            </a>
          </p>
          <p className="mt-3 text-lg leading-6 font-medium text-gray-900">
            Opera
          </p>
          <p className="text-sm font-medium">
            <a
              href={'/opera/' + aria.opera.slug.current}
              className="text-indigo-600 hover:underline"
            >
              {aria.opera.title}
            </a>
          </p>
        </div>
        <div className="flex-1">
          <p className="mt-3 text-lg leading-6 font-medium text-gray-900">
            Creators
          </p>
        </div>
        {aria.opera.composers.map((c) => (
          <div key={c.id} className="flex-1">
            <p className="text-sm font-medium text-gray-900">
              <a
                href={'/creator/' + c.slug.current}
                className="hover:underline"
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
                href={'/creator/' + l.slug.current}
                className="hover:underline"
              >
                {l.firstName} {l.lastName} (Librettist)
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
