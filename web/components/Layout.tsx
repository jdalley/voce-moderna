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
  preview?: Boolean;
};

export default function Layout({ children, customMeta, preview }: LayoutProps) {
  const router = useRouter();
  const meta = {
    title: 'Project Voce Moderna',
    description: 'New music database and practice tracks',
    image: 'https://projectvocemoderna.com/images/vm-logo-colour.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://projectvocemoderna.com${router.asPath}`}
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
