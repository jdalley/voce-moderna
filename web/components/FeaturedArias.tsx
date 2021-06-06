import FeaturedAriaCard from '@components/FeaturedAriaCard';
import type { FeaturedAria } from 'types/sanity';

export default function FeaturedArias({
  featuredArias,
}: {
  featuredArias: Array<FeaturedAria>;
}) {
  return (
    <section className="relative pt-12 pb-14 px-4 sm:px-6 lg:pt-20 lg:pb-24 lg:px-12">
      <div className="text-center">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-800 sm:text-4xl">
          Newly Added Arias
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Check out some recently added arias.
        </p>
      </div>
      <div className="mt-12 max-w-sm mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {featuredArias.map((featuredAria) => (
          <FeaturedAriaCard
            key={featuredAria.aria.slug.current}
            featuredAria={featuredAria}
          />
        ))}
      </div>
    </section>
  );
}
