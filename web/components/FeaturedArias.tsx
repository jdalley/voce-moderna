import FeaturedAriaCard from '@components/FeaturedAriaCard';
import type { FeaturedAria } from 'types/sanity';

export default function FeaturedArias({
  featuredArias,
}: {
  featuredArias: Array<FeaturedAria>;
}) {
  return (
    <section
      className="relative mt-6 pt-4 pb-6 px-4 xs:mt-10 sm:pt-6 sm:px-6 md:mt-12 lg:pt-10 lg:pb-18 lg:px-12"
      aria-labelledby="new-additions-title"
    >
      <div className="text-center">
        <h2
          id="new-additions-title"
          className="tracking-tight font-bold text-gray-800 xs:text-lg sm:text-2xl"
        >
          New additions to the VM Database
        </h2>
      </div>
      <div className="mt-6 sm:mt-10 max-w-sm mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
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
