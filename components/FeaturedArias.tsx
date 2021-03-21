import FeaturedAriaCard from '@components/FeaturedAriaCard';

export default function FeaturedArias({ featuredArias }) {
  return (
    <div className="relative max-w-7xl mx-auto pt-12 pb-14 px-4 sm:px-6 lg:pt-24 lg:pb-24 lg:px-20">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Newly Added Arias
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Check out some recently added arias.
          </p>
        </div>
        <div className="mt-12 max-w-md mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {featuredArias.map((featuredAria) => (
            <FeaturedAriaCard
              key={featuredAria.id}
              featuredAria={featuredAria}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
