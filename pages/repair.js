import React from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { Navbar, Footer, Info, Header } from '../components';
import styles from '../styles/repair.module.scss';

export default function Repair() {
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
                            <p className={styles.text}>{t("repair:text1")}</p>
                            <h3 className={styles.title}>{t("repair:title1")}</h3>
                            <ul className={styles.list}>
                                <li>{t("repair:list1")}</li> 
                                <li>{t("repair:list2")}</li>
                                <li>{t("repair:list3")}</li>
                                <li>{t("repair:list4")}</li> 
                                <li>{t("repair:list5")}</li>
                                <li>{t("repair:list6")}</li>
                                <li>{t("repair:list7")}</li>
                            </ul> 
                        </div>
                    </section>
                </Info>
            </div>

            <Footer />
        </div>
    );
}
