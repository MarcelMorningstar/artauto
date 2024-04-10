import React from 'react';
import Head from 'next/head';

import useTranslation from 'next-translate/useTranslation';
import { client } from '../sanity'

import { Navbar, Footer, Info, Header } from '../components';

import styles from '../styles/tow-truck.module.scss';

export default function TowTruck({ towTruck }) {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <Head>
                <meta name="description" content="ARTauto evakuators ir profesionāla auto evakuācija. Эвакуатор ARTauto — это профессиональный автомобильный эвакуатор." />
                <title>ARTauto Evakuators</title>
            </Head>

            <Navbar />
                
            <Header />

            <div className={styles.content}>
                <Info title={t("common:service2")}>
                    <section className={styles.box}>
                        <div className={styles.text_box}>
                            <p className={styles.text}>{ towTruck.description2.text }</p>
                            <h3 className={styles.title}>{t("tow-truck:title1")}</h3>
                            <ul className={styles.list}>
                                {
                                    towTruck.description2.list.map(item => (
                                        <li>{ item }</li>
                                    ))
                                }
                            </ul>
                            <h3 className={styles.title}>{t("tow-truck:title2")}</h3>
                            <p>{ towTruck.description2.price }</p>
                        </div>
                    </section>
                </Info>
            </div>

            <Footer />
        </div>
    );
}

export async function getServerSideProps({ locale }) {
    const towTruck = await client.fetch(`*[_type == "home" && language == "${ locale }"][0]{
      description2
    }`);
  
    return { props: { towTruck } }
}
