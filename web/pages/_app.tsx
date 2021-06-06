import { AppProps } from 'next/app';
import Router from 'next/router';
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
  return <Component {...pageProps} />;
}
