import Head from 'next/head';
import '../styles/globals.scss';
import '../styles/navbar.scss';
import '../styles/footer.scss';
import { GoogleTagManager } from '@next/third-parties/google'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#414141" />
        <link rel="icon" href="/favicon.ico" />
        <title>ARTauto</title>
      </Head>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
