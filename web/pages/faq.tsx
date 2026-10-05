import Layout, { LayoutProps } from '@components/Layout';
import Link from 'next/link';

const faqs = [
  {
    id: 1,
    question: `How does the Voce Moderna database work?`,
    answer: `VM is categorized by voice type. Select a voice type to see the arias that are currently entered into the database. Every entry has information about the opera, its creators, and where to find the score. These entries are meant to help you browse and find an aria that might be suitable for you.`,
  },
  {
    id: 2,
    question: `What do the 'R' and 'T' represent on the aria information pages?`,
    answer: `These stand for "Range" and "Tessitura". The range shows the lowest and highest pitches found in the aria, and the tessitura indicates which part of the range is most consistently used. This can help determine if an aria might suit your voice!`,
  }
];

export default function Faq() {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'FAQ - Voce Moderna',
    },
  };
  return (
    <Layout customMeta={layoutProps.customMeta}>
      <div className="mx-auto max-w-4xl py-4 px-4 sm:py-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-500">
            Have another question?
            <Link href="/contact" className="text-cyan-600 hover:underline">
              {` Reach out!`}
            </Link>
          </p>
        </div>
        <div className="mt-14">
          <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-3 text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Layout>
  );
}
