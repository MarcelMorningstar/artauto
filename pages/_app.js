import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.scss';
import '../styles/navbar.scss';
import '../styles/footer.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#414141" />
        <link rel="icon" href="/favicon.ico" />
        <Script 
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M26S6PVG');`,
          }}
        />
        <title>ARTauto</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
