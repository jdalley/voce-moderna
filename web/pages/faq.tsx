import Layout, { LayoutProps } from '@components/Layout';
import Link from 'next/link';

const faqs = [
  {
    id: 1,
    question: `How does the Voce Moderna database work?`,
    answer: `VM is categorized by voice type. Select a voice type to see the arias that are currently entered into the database. Every entry has information about the opera, its creators, where to find the score, and practice tracks available for purchase. These entries are meant to help you browse and find an aria that might be suitable for you, and provides you with the tools you may need in learning the piece.`,
  },
  {
    id: 2,
    question: `What’s the difference between a Piano Track and a Vocal Track?`,
    answer: `A Piano Track is a recording of an aria’s piano accompaniment only. A Vocal Track is a recording of the piano accompaniment as well as the vocal line played overtop at a slightly louder volume.`,
  },
  {
    id: 3,
    question: `Can I request a specific track?`,
    answer: `Yes! If you’re interested in an aria that isn’t currently listed on the database, please reach out to us. If the aria is not already on our radar, we can go about securing a license to share the work.`,
  },
  {
    id: 4,
    question: `Do you have permission to sell these tracks?`,
    answer: `Yes! Depending on the status of the work, all publishers or composers have been contacted for licensing agreements in order to share these practice tracks.`,
  },
  {
    id: 5,
    question: `Can I record a video with the track?`,
    answer: `These arias were written by living composers and are not available in the public domain. The tracks are meant to be used as practice tools, and not for performance. If you would like to record the work, please get in touch with us or reach out to the composer directly to ensure that you are following the proper copyright guidelines.`,
  },
  {
    id: 6,
    question: `What do the 'R' and 'T' represent on the aria information pages?`,
    answer: `These stand for "Range" and "Tessitura". The range shows the lowest and highest pitches found in the aria, and the tessitura indicates which part of the range is most consistently used. This can help determine if an aria might suit your voice!`,
  },
  {
    id: 7,
    question: `I accidentally lost access to my track, can I have it resent?`,
    answer: `Email us and we will resend the download link as soon as possible.`,
  },
  {
    id: 8,
    question: `I encountered a problem with my download, what should I do?`,
    answer: `Email us and we will make sure you get your track(s)!`,
  },
];

export default function Faq() {
  const layoutProps: LayoutProps = {
    customMeta: {
      title: 'FAQ',
    },
  };
  return (
    <Layout customMeta={layoutProps.customMeta}>
      <div className="max-w-4xl mx-auto py-4 px-4 sm:py-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-500">
            Have another question?
            <Link href="/contact">
              <a className="text-cyan-600 hover:underline">{` Reach out!`}</a>
            </Link>
          </p>
        </div>
        <div className="mt-14">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
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
