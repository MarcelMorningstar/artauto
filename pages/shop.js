import React from 'react';
import Head from 'next/head';

import useTranslation from 'next-translate/useTranslation';
import { client } from '../sanity'

import { Navbar, Footer, Info, Header } from '../components';

import styles from '../styles/shop.module.scss';

export default function Shop({ shop }) {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <Head>
                <meta name="description" content="ARTauto veikals" />
                <title>ARTauto Veikals</title>
            </Head>

            <Navbar />

            <Header />

            <div className={styles.content}>
                <Info title={t("common:service3")}>
                    <section className={styles.box}>
                        <div className={styles.text_box}>
                            <p className={styles.text}>{ shop.description3.text }</p>
                            <h3 className={styles.title}>{t("shop:title1")}</h3>
                            <ul className={styles.list}>
                                {
                                    shop.description3.list.map((item, id) => (
                                        <li key={id}>{ item }</li>
                                    ))
                                }
                            </ul> 
                        </div>
                    </section>
                </Info>
            </div>

            <Footer />
        </div>
    );
}

export async function getServerSideProps({ locale }) {
    const shop = await client.fetch(`*[_type == "home" && language == "${ locale }"][0]{
      description3
    }`);
  
    return { props: { shop } }
}
