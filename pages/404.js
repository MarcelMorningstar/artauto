import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/error.module.scss';

export default function Costume404() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <section className={styles.section}>
                    <svg viewBox="-26 -27 256 270" className={styles.svg}>
                        <g>
                            <circle cx="100" cy="100" r="120" stroke="var(--color_light)" strokeWidth="6" fill="transparent"/>
                            <path d="M63.2 136.9c8.4 8.4 8.4 22.1 0 30.5-2.3 2.3-5.1 4.1-8.2 5.1-.8.3-1.6-.5-1.4-1.3l4.7-16c.1-.5.1-1-.2-1.3-4.6-6.2-12.4-8.5-19.6-5.7-.4.2-.8.5-.9 1L32.9 165c-.2.8-1.3 1-1.9.4-6.6-8.5-6-20.7 1.7-28.5 8.4-8.4 22.1-8.5 30.5 0zm0-73.8c8.4-8.4 8.4-22.1 0-30.5-2.3-2.3-5.1-4.1-8.2-5.1-.8-.3-1.6.5-1.4 1.3l4.7 16c.1.5.1 1-.2 1.3-4.6 6.2-12.4 8.5-19.6 5.7-.4-.2-.8-.5-.9-1L32.9 35c-.2-.8-1.3-1.1-1.9-.4-6.6 8.5-6 20.7 1.7 28.5 8.4 8.4 22.1 8.5 30.5 0zm104 0c7.7-7.7 8.4-20 1.7-28.5-.5-.7-1.6-.5-1.9.4l-4.6 15.9c-.1.5-.5.9-.9 1-7.2 2.8-15 .5-19.6-5.7-.3-.4-.4-.9-.2-1.3l4.7-16c.2-.8-.6-1.6-1.4-1.3-3.1 1.1-5.9 2.9-8.2 5.1-8.4 8.4-8.4 22 0 30.5 8.4 8.4 22.1 8.3 30.4-.1zm-37.8 2.4c1.5 2 3.1 3.5 5.1 5.1l-21.8 21.8 5.1 5.1L138 77.3c3.3-3.3 7.4-5.7 11.8-7-5-.5-9.8-2.6-13.6-6.4-3.8-3.8-5.9-8.7-6.4-13.6-1.3 4.5-3.7 8.5-7 11.8l-20.2 20.2 5.1 5.1 21.7-21.9zm-58.8 69c-1.5-2-3.1-3.5-5.1-5.1l21.8-21.8-5.1-5.1L62 122.7c-3.3 3.3-7.4 5.7-11.8 7 5 .5 9.8 2.6 13.6 6.4 3.8 3.8 5.9 8.7 6.4 13.6 1.3-4.5 3.7-8.5 7-11.8l20.2-20.2-5.1-5.1-21.7 21.9zm96.6 2.4c-8.4-8.4-22-8.4-30.4 0-8.4 8.4-8.4 22.1 0 30.5 2.3 2.3 5.1 4.1 8.2 5.1.8.3 1.6-.5 1.4-1.3l-4.7-16c-.1-.5-.1-1 .2-1.3 4.6-6.2 12.4-8.5 19.6-5.7.4.2.8.5.9 1l4.6 15.9c.2.8 1.3 1 1.9.4 6.7-8.7 6-20.9-1.7-28.6zm-31-.7c-3.8 3.8-5.9 8.7-6.4 13.6-1.3-4.5-3.7-8.5-7-11.8L62.1 77.2c-3.3-3.3-7.4-5.7-11.8-7 5-.5 9.8-2.6 13.6-6.4 3.8-3.8 5.9-8.7 6.4-13.6 1.3 4.5 3.7 8.5 7 11.8l60.7 60.8c3.3 3.3 7.4 5.7 11.8 7-5 .5-9.8 2.6-13.6 6.4zm-1.8-6.8L70.6 65.5c-1.5 2-3.1 3.5-5.1 5.1l63.8 63.9c1.6-2 3.2-3.6 5.1-5.1z M55 97 L0 97 L0 103 L55 103 L55 103 Z M145 97 L200 97 L200 103 L145 103 L145 97 Z"></path>
                        </g>
                    </svg>
                    <h1 className={styles.title1}>404</h1>
                </section>
                
                <section className={styles.section}>
                    <h2 className={styles.title2}>{t("common:error1")}</h2>
                </section>
        
                <section className={styles.section}>
                    <Link href="/" className={styles.link}><b>{t("common:error2")}</b></Link>
                </section>
            </div>
        </div>
    );
}
