import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image';

import useTranslation from 'next-translate/useTranslation';
import { client } from '../sanity'

import { Navbar, Footer, Info, Header } from '../components';

import styles from '../styles/home.module.scss';

export default function Home({ home }) {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <meta name="description" content="ARTauto autoserviss rēzekne parūpēsies par jūsu automašīnu. Автосервис ARTauto в Резекне позаботится о вашем автомобиле." />
      </Head>

      <Navbar />

      <Header />

      <section className={styles.content}>
        <div className={styles.box}>
          <Info id="services" title={t("common:nav2")}>
            <div className={styles.services}>
              <div className={styles.box}>
                <svg className={styles.svg} viewBox="-459 301 160 160">
                  <g>
                    <path d="M-393.6 414.3H-416c-4.6 0-8.3-4.3-8.3-9.5l-.3-36.1c0-5.3 3.6-9.5 8.1-9.5h49.4c2.8 0 5.4 1.7 6.9 4.5h.3c4.5 0 8.1 2.7 8.1 6.1v10.6c0 3.3-3.3 6-7.7 6.1-1.2 3.6-4.2 6.2-7.6 6.2h-18.3v12.1c.1 5.3-3.7 9.5-8.2 9.5zm-22.9-51.8c-2.6 0-4.8 2.8-4.8 6.2l.3 36.1c0 3.4 2.2 6.2 5 6.2h22.3c2.7 0 5-2.8 5-6.2V391c0-.9.7-1.7 1.7-1.7h20c2.2 0 4.1-2 4.6-4.8.1-.8.8-1.4 1.6-1.4h.9c2.8 0 4.7-1.5 4.7-2.8v-10.6c0-1.3-1.9-2.8-4.7-2.8h-1.4c-.7 0-1.3-.4-1.6-1.1-.8-2.1-2.5-3.4-4.3-3.4h-49.3z"></path>
                    <path d="M-398.3 405.6h-12.9c-3 0-5.5-2.2-5.5-4.9v-7.4c0-2.7 2.5-4.9 5.5-4.9h12.9c3 0 5.5 2.2 5.5 4.9v7.4c0 2.7-2.5 4.9-5.5 4.9zm-13-13.8c-1.2 0-2.2.7-2.2 1.6v7.4c0 .8 1 1.6 2.2 1.6h12.9c1.2 0 2.2-.7 2.2-1.6v-7.4c0-.8-1-1.6-2.2-1.6h-12.9z"></path>
                    <path d="M-398.7 370.8h-12.7c-.9 0-1.7-.7-1.7-1.7 0-.9.7-1.7 1.7-1.7h12.7c.9 0 1.7.7 1.7 1.7 0 .9-.8 1.7-1.7 1.7z"></path>
                    <path d="M-335.1 400c-.9 0-1.7-.7-1.7-1.7v-49c0-.9.7-1.7 1.7-1.7.9 0 1.7.7 1.7 1.7v49c0 .9-.8 1.7-1.7 1.7z"></path>
                    <path d="M-341.1 364.6a2.6 2.6 0 1 1-5.2 0 2.6 2.6 0 0 1 5.2 0z"></path>
                    <path d="M-347.2 358.2a2.6 2.6 0 1 1-5.2 0 2.6 2.6 0 0 1 5.2 0z"></path>
                    <path d="M-336.1 377.4h-15.7c-.9 0-1.7-.7-1.7-1.7 0-.9.7-1.7 1.7-1.7h15.7c.9 0 1.7.7 1.7 1.7 0 .9-.8 1.7-1.7 1.7z"></path>
                    <path d="M-349.1 392c-.4 0-.8-.1-1.1-.4-.7-.6-.8-1.7-.2-2.4l7-8.3c.6-.7 1.7-.8 2.4-.2.7.6.8 1.7.2 2.4l-7 8.3c-.3.4-.8.6-1.3.6z"></path>
                    <path d="M-379 461c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm0-156.6c-42.2 0-76.6 34.3-76.6 76.6s34.3 76.6 76.6 76.6c42.2 0 76.6-34.3 76.6-76.6s-34.4-76.6-76.6-76.6z"></path>
                  </g>
                </svg>
                <h2 className={styles.title}>{t("common:service1")}</h2>
                <p className={styles.text}>{ home.shortdescription1 }</p>
                <Link href='/repair' className={styles.a}>{t("home:service-btn")}</Link>
              </div>
              <div className={styles.box}>
                <svg className={styles.svg} viewBox="0 0 512 512">
                  <circle cx="256" cy="256" r="246" fillOpacity="0" stroke="var(--color_dark)" strokeOpacity="1" strokeWidth="10"></circle>
                  <g>
                    <path d="M80.08 82.66L60.24 102.5 192.9 242.7v58.6h78v-50.9zm-25.4 40.14v80.3l4.01 2.7c10.56 7 14.74 14.1 15.93 19.8 1.18 5.8-.43 10.8-3.85 14.9-6.86 8.3-19.91 12.3-32.73-.6l-12.72 12.8c19.18 19.1 46.13 15.1 59.27-.6 6.58-7.9 9.97-18.9 7.65-30.1-2.05-10-8.72-19.7-19.56-28v-52.2zm258.02 52.5v144h-185c22.6 5.8 40.6 23.5 46.7 46H337c7.5-27.6 32.8-48 62.7-48 29.9 0 55.2 20.4 62.7 48h24.3v-84.6l-60.2-105.4zm36 14h62.1l54.7 92H348.7v-83zm-321.49 130l11.5 46h10.25c6.12-22.5 24.09-40.2 46.74-46zm84.49 16c-26.08 0-47.02 20.9-47.02 47s20.94 47 47.02 47c26.1 0 47-20.9 47-47s-20.9-47-47-47zm288 0c-26.1 0-47 20.9-47 47s20.9 47 47 47 47-20.9 47-47-20.9-47-47-47z" transform="translate(51.2, 51.2) scale(0.8, 0.8) rotate(0, 256, 256) skewX(0) skewY(0)"></path>
                  </g>
                </svg>
                <h2 className={styles.title}>{t("common:service2")}</h2>
                <p className={styles.text}>{ home.shortdescription2 }</p>
                <Link href='/tow-truck' className={styles.a}>{t("home:service-btn")}</Link>
              </div>
              <div className={styles.box}>
                <svg className={styles.svg} viewBox="0 0 512 512">
                <circle cx="256" cy="256" r="246" fillOpacity="0" stroke="var(--color_dark)" strokeOpacity="1" strokeWidth="10"></circle>
                  <g>
                    <path d="M256.18 21c-23.242 0-46.577 3.01-63.186 8.54-8.304 2.763-14.868 6.196-18.808 9.558-3.94 3.36-5.167 5.956-5.186 8.96L168.943 57H41v14h430V57H342.967l.033-9.033c.01-3.002-1.17-5.55-5.057-8.895-3.887-3.344-10.407-6.773-18.677-9.535C302.724 24.014 279.42 21 256.18 21zM38.277 89l-10.443 94h80.9l20.243-86.36L122.81 183h81.07l17.114-86.68-3.096 86.68h75.75l-4.634-86.518L307.694 183h81.497l-6.167-86.36L403.266 183h80.9l-10.443-94H38.277zM25.834 201l-.51 4.588C39.822 226.445 52.968 235 64 235c11.32 0 24.852-8.89 39.8-30.96l.714-3.04h-78.68zm95.687 0l-.32 4.498C135.753 226.495 148.935 235 160 235c11.293 0 24.788-8.85 39.693-30.803l.63-3.197h-78.802zm95.736 0l-.156 4.352C231.69 226.455 244.908 235 256 235c11.08 0 24.28-8.525 38.85-29.576l-.237-4.424h-77.357zm94.324 0l.674 3.12c15 22.192 28.503 31.044 39.773 31.013 11.03-.03 24.212-8.62 38.772-29.637l-.32-4.496h-78.9zm95.906 0l.713 3.04C423.147 226.11 436.68 235 448 235c11.032 0 24.178-8.555 38.676-29.412l-.51-4.588h-78.68zM112 223.31C97.313 242.11 81.492 253 64 253c-13.972 0-26.884-6.906-39-19.264V487h318V279h114v208h30V233.736C474.884 246.094 461.972 253 448 253c-17.49 0-33.31-10.888-47.996-29.684-14.664 18.808-30.432 29.77-47.926 29.817-17.508.048-33.352-10.87-48.092-29.807C289.303 242.116 273.486 253 256 253c-17.492 0-33.313-10.89-48-29.69-14.687 18.8-30.508 29.69-48 29.69s-33.313-10.89-48-29.69zM55 279h258v178H55V279zm18 18v142h222V297H73zm288 0v71.064l78 .573V297h-78zM88 312h128c-108.235 8-116.31 24-128 113.11V312zm273 74.066v13.998l78 .573v-14.002l-78-.57zm0 32V487h78v-68.365l-78-.57z" transform="translate(102.4, 102.4) scale(0.6, 0.6) rotate(0, 256, 256) skewX(0) skewY(0)"></path>
                  </g>
                </svg>
                <h2 className={styles.title}>{t("common:service3")}</h2>
                <p className={styles.text}>{ home.shortdescription3 }</p>
                <Link href='/shop' className={styles.a}>{t("home:service-btn")}</Link>
              </div>
            </div>
          </Info>
          
          <Info id='about-us' title={t("common:nav3")} text={home.slogan}>
            <div className={styles.about_us}>
              <p>{home.text}</p>
            </div>
          </Info>
          
          {/* <Info id="gallery" title={t("common:nav4")}> */}
            {/* <div className={styles.gallery}>
              <div className={styles.wrapper}><section className={styles.wrapper}><Image src="/img/device1.jpg" alt='ARTauto' width={3} height={4} layout="responsive" objectFit="contain" /></section></div>
              <div className={styles.wrapper}><section className={styles.wrapper}><Image src="/img/device3.jpg" alt='ARTauto' width="100%" height="100%" layout="responsive" objectFit="contain" /></section></div>
              <div className={styles.wrapper}><section className={styles.wrapper}><Image src="/img/logo.jpg" alt='ARTauto' width={16} height={9} layout="responsive" objectFit="contain" /></section></div>
              <div className={styles.wrapper}><section className={styles.wrapper}><Image src="/img/device2.jpg" alt='ARTauto' width="100%" height="100%" layout="responsive" objectFit="contain" /></section></div>
              <div className={styles.wrapper}><section className={styles.wrapper}><Image src="/img/device4.png" alt='ARTauto' width={16} height={9} layout="responsive" objectFit="contain" /></section></div>
            </div> */}
          {/* </Info> */}
          
          <Info id="contact-us" title={t("common:nav5")}>
            <div className={styles.contact_us}>
              <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d828.8733844640251!2d27.325494200357056!3d56.51246628801215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTbCsDMwJzQ0LjgiTiAyN8KwMTknMzMuMyJF!5e1!3m2!1sen!2slv!4v1633293831028!5m2!1sen!2slv" allowFullScreen="" loading="lazy"></iframe>
                  
              <div className={styles.wrapper}>
                <div className={styles.wrapper}>
                  <h3 className={styles.title}>{t("home:contact1")}</h3>
                  <a className={styles.phone} href={`tel:${home.phone}`}>{ home.phone }</a>
                </div>
                
                <div className={styles.wrapper}>
                  <h3 className={styles.title}>{t("home:contact2")}</h3>
                  <span className={styles.text}>{ home.address }</span>
                </div>
                
                <div className={styles.wrapper}>
                  <h3 className={styles.title}>{t("home:contact3")}</h3>
                  <table className={styles.table}>
                    <tbody>
                      {
                        home.businessHours.map((item, id) => (
                          <tr key={id} className={styles.tr}>
                            <td className={styles.td}>{ item.day }</td>
                            <td className={styles.td}>{ item.hours }</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Info>
        </div>

        <Footer />
      </section>
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  const home = await client.fetch(`*[_type == "home" && language == "${ locale }"][0]{
    shortdescription1, shortdescription2, shortdescription3, slogan, text, phone, address, businessHours
  }`);

  return { props: { home } }
}
