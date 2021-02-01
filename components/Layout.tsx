import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

export type LayoutProps = {
  children?: ReactNode;
  customMeta?: {
    title?: string;
    description?: string;
  };
};

export default function Layout({ children, customMeta }: LayoutProps) {
  const router = useRouter();
  const meta = {
    title: 'Project Voce Moderna',
    description: 'New music database and practice tracks',
    image: 'https://projectvocemoderna.com/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-white">
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
      <Header />
      <main id="skip">{children}</main>
      <Footer />
    </div>
  );
}
