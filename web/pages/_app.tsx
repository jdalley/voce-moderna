import { AppProps } from 'next/app';
import Router from 'next/router';
import Script from 'next/script';
import NProgress from 'nprogress';
import '@styles/index.css';
import '@styles/nprogress.css';

function handleRouteStart(url: string, { shallow }: { shallow: boolean }) {
  if (!shallow) {
    NProgress.start();
  }
}

function handleRouteDone(url: string, { shallow }: { shallow: boolean }) {
  if (!shallow) {
    NProgress.done();
  }
}

Router.events.on('routeChangeStart', handleRouteStart);
Router.events.on('routeChangeComplete', handleRouteDone);
Router.events.on('routeChangeError', handleRouteDone);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://cdn.snipcart.com/themes/v3.4.0/default/snipcart.js"
      />
      <div
        hidden
        id="snipcart"
        data-api-key={process.env.SNIPCART_PUBLIC_API_KEY}
        data-config-modal-style="side"
      ></div>
      <Component {...pageProps} />
    </>
  );
}
