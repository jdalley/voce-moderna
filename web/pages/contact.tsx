import Layout, { LayoutProps } from '@components/Layout';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'Contact - Voce Moderna',
    },
  };
  return (
    <Layout customMeta={layoutProps.customMeta}>
      <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 sm:py-14 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Contact Us
          </h2>
          <div className="mt-8 text-lg">
            <div className="flex items-center justify-center">
              <div className="shrink-0">
                <EnvelopeIcon
                  className="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3 text-cyan-600 hover:underline">
                <p>
                  <a href="mailto:info@projectvocemoderna.com">
                    info@projectvocemoderna.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-gray-500">
            <p>
              Have an aria to suggest? Want to get your music in the database?
              Interested in a consultation? Find a typo?
            </p>
            <p className="mt-4">Get in touch, we’d love to hear from you!</p>
          </div>
          <div className="mt-8 text-gray-500">
            <dt className="font-semibold text-gray-900">
              Want to be featured on the VM database or social media?
            </dt>
            <dd className="mt-3 text-gray-500">
              If you have a video of your performance of a contemporary aria
              (written since 2000) and want to be featured on our database or
              social media, send us a link! Many arias do not yet have any media
              to share, and we are happy to consider any videos that are sent to
              us.
            </dd>
          </div>
          <div className="mt-8 text-gray-500">
            <dt className="font-semibold text-gray-900">
              Not sure where to start? Book a consultation!
            </dt>
            <dd className="mt-3 text-gray-500">
              It can be hard to find an appropriate modern aria, so we are happy
              to suggest pieces that might be best for your voice. Send us an
              email to schedule a consultation (typically a $50 fee) - be sure
              to include a list of your current repertoire, a few video links so
              we can get to know your voice, and any additional info that you
              think would be helpful (eg. an aria to be used for YAP auditions,
              an aria that's 5 minutes or shorter, an aria to use for a
              competition, etc). We will send you a list of recommended arias
              tailored for you!
            </dd>
          </div>
        </div>
      </div>
    </Layout>
  );
}
