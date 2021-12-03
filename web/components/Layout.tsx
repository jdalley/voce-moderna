import { ReactNode } from 'react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import PreviewAlert from './PreviewAlert';

export type LayoutProps = {
  children?: ReactNode;
  customMeta?: {
    title?: string;
    description?: string;
  };
  preview?: boolean;
};

export default function Layout({ children, customMeta, preview }: LayoutProps) {
  const router = useRouter();
  const meta = {
    title: 'Project Voce Moderna',
    description:
      'Voce Moderna is a database of contemporary opera arias, including information about composers and librettists, individual arias, full opera synopses, score links, and practice tracks for download.',
    keywords:
      'opera, operas, aria, arias, opera database, aria database, contemporary opera, contemporary music, new opera, new music, synopses, practice tracks, piano tracks, accompaniment tracks',
    image: 'https://www.projectvocemoderna.com/images/vm-logo-colour.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta
          property="og:url"
          content={`https://www.projectvocemoderna.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Project Voce Moderna" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vocemoderna" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="bg-white flex flex-col min-h-screen justify-between">
        <PreviewAlert preview={preview} />
        <Header />
        <main id="skip" className="flex-grow">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
