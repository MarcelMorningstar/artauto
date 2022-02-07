import Head from 'next/head';
import '../styles/globals.scss';
import '../styles/navbar.scss';
import '../styles/footer.scss';
import '../styles/home.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#414141" />
        <meta name="description" content="ARTauto | autoserviss rezekne | evakuators rezekne | autoveikals rezekne" />
        <link rel="icon" href="/favicon.ico" />
        <title>ARTauto</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
