import React from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { Navbar, Footer, Info, Header } from '../components';
import styles from '../styles/shop.module.scss';

export default function Shop() {
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
                            <p className={styles.text}>{t("shop:text1")}<a className={styles.phone} href="tel:+37126118112">+371 26 118 112</a>{t("shop:text2")}</p>
                            <h3 className={styles.title}>{t("shop:title1")}</h3>
                            <ul className={styles.list}>
                                <li>{t("shop:list1")}</li> 
                                <li>{t("shop:list2")}</li>
                                <li>{t("shop:list3")}</li>
                            </ul> 
                        </div>
                    </section>
                </Info>
            </div>

            <Footer />
        </div>
    );
}
