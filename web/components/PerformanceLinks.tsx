import { ExternalLink, SanityKeyed } from 'types/sanity';
import ExternalMediaList from '@components/ExternalMediaList';

export default function PerformanceLinks({
  performanceLinks,
}: {
  performanceLinks: Array<SanityKeyed<ExternalLink>>;
}) {
  if (performanceLinks !== undefined && performanceLinks) {
    return (
      <>
        <dt className="mt-6 font-medium text-gray-500">Performances</dt>
        <dd className="mt-1">
          <ExternalMediaList links={performanceLinks} />
        </dd>
      </>
    );
  } else {
    return (
      <>
        <dt className="mt-6 font-medium text-gray-500">Performances</dt>
        <div className="h-full text-gray-900">
          <p>Submit a video:</p>
          <div>
            <a
              className="text-cyan-600 hover:underline"
              href="mailto:info@projectvocemoderna.com"
            >
              info@projectvocemoderna.com
            </a>
          </div>
        </div>
      </>
    );
  }
}
