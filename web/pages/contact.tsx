import Layout, { LayoutProps } from '@components/Layout';
import { MailIcon } from '@heroicons/react/outline';

export default function Contact() {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'Contact',
    },
  };
  return (
    <Layout customMeta={layoutProps.customMeta}>
      <div className="max-w-3xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Contact Us
          </h2>
          <div className="mt-8 text-lg text-gray-500">
            <p>
              Have an aria to suggest? Want to get your music in the database?
              Want a consultation? Find a typo?
            </p>
            <p className="mt-4">Get in touch, we’d love to hear from you!</p>
          </div>
          <div className="mt-8">
            <div className="flex justify-center">
              <div className="flex-shrink-0">
                <MailIcon
                  className="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3 text-base text-cyan-600 hover:underline">
                <p>
                  <a href="mailto:info@projectvocemoderna.com">
                    info@projectvocemoderna.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
