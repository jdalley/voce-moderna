import FeaturedAriaCard from '@components/FeaturedAriaCard';
import type { FeaturedAria } from 'types/sanity';

export default function FeaturedArias({
  featuredArias,
}: {
  featuredArias: Array<FeaturedAria>;
}) {
  return (
    <section
      className="lg:pb-18 relative mt-6 px-4 pt-4 pb-6 sm:px-6 sm:pt-6 md:mt-12 lg:px-12 lg:pt-10"
      aria-labelledby="new-additions-title"
    >
      <div className="text-center">
        <h2
          id="new-additions-title"
          className="font-bold tracking-tight text-gray-800 xs:text-lg sm:text-xl md:text-2xl"
        >
          New additions to the VM Database
        </h2>
      </div>
      <div className="mx-auto mt-6 grid max-w-sm gap-5 sm:mt-10 lg:max-w-none lg:grid-cols-3">
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
