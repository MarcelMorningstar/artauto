import React from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { Navbar, Footer, Info, Header } from '../components';
import styles from '../styles/tow-truck.module.scss';

export default function TowTruck() {
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
                            <p className={styles.text}>{t("tow-truck:text1")}<a className={styles.phone} href="tel:+37126118112">+371 26 118 112</a></p>
                            <h3 className={styles.title}>{t("tow-truck:title1")}</h3>
                            <ul className={styles.list}>
                                <li>{t("tow-truck:list1")}</li>
                                <li>{t("tow-truck:list2")}</li>
                                <li>{t("tow-truck:list3")}</li>
                                <li>{t("tow-truck:list4")}</li>
                            </ul>
                            <h3 className={styles.title}>{t("tow-truck:title2")}</h3>
                            <p>{t("tow-truck:text2")}</p>
                        </div>
                    </section>
                </Info>
            </div>

            <Footer />
        </div>
    );
}
