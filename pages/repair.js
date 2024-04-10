import React from 'react';
import Head from 'next/head';

import useTranslation from 'next-translate/useTranslation';
import { client } from '../sanity'

import { Navbar, Footer, Info, Header } from '../components';

import styles from '../styles/repair.module.scss';

export default function Repair({ repair }) {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <Head>
                <meta name="description" content="ARTauto serviss" />
                <title>ARTauto Serviss</title>
            </Head>

            <Navbar />

            <Header />

            <div className={styles.content}>
                <Info title={t("common:service1")}>
                    <section className={styles.box}>
                        <div className={styles.text_box}>
                            <p className={styles.text}>{ repair.description1.text }</p>
                            <h3 className={styles.title}>{t("repair:title1")}</h3>
                            <ul className={styles.list}>
                                {
                                    repair.description1.list.map(item => (
                                        <li>{ item }</li>
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
    const repair = await client.fetch(`*[_type == "home" && language == "${ locale }"][0]{
      description1
    }`);
  
    return { props: { repair } }
  }
