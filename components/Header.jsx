import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

function Header({ phone}) {
    const { t } = useTranslation();
    const router = useRouter();
    const [path, setPath] = useState(router.asPath);

    useEffect(() => {
        setPath(router.asPath);
    }, [router.asPath]);

    return (
        <header id="home" className='home'>
            <Image
                src="/img/header.jpg"
                alt='header'
                layout="fill"
                objectFit="cover"
                priority
            />
            <div>
                <div className='logo_content'>
                    <Link href='/' style={{ textDecoration: 'none' }}>
                        <svg className='svg' viewBox="26.453 -27.436 147.035 250">
                            <g>
                                <circle cx="100" cy="100" r="120" stroke="#EEEEEE" strokeWidth="6" fill="transparent"/>
                                <path d="M63.2 136.9c8.4 8.4 8.4 22.1 0 30.5-2.3 2.3-5.1 4.1-8.2 5.1-.8.3-1.6-.5-1.4-1.3l4.7-16c.1-.5.1-1-.2-1.3-4.6-6.2-12.4-8.5-19.6-5.7-.4.2-.8.5-.9 1L32.9 165c-.2.8-1.3 1-1.9.4-6.6-8.5-6-20.7 1.7-28.5 8.4-8.4 22.1-8.5 30.5 0zm0-73.8c8.4-8.4 8.4-22.1 0-30.5-2.3-2.3-5.1-4.1-8.2-5.1-.8-.3-1.6.5-1.4 1.3l4.7 16c.1.5.1 1-.2 1.3-4.6 6.2-12.4 8.5-19.6 5.7-.4-.2-.8-.5-.9-1L32.9 35c-.2-.8-1.3-1.1-1.9-.4-6.6 8.5-6 20.7 1.7 28.5 8.4 8.4 22.1 8.5 30.5 0zm104 0c7.7-7.7 8.4-20 1.7-28.5-.5-.7-1.6-.5-1.9.4l-4.6 15.9c-.1.5-.5.9-.9 1-7.2 2.8-15 .5-19.6-5.7-.3-.4-.4-.9-.2-1.3l4.7-16c.2-.8-.6-1.6-1.4-1.3-3.1 1.1-5.9 2.9-8.2 5.1-8.4 8.4-8.4 22 0 30.5 8.4 8.4 22.1 8.3 30.4-.1zm-37.8 2.4c1.5 2 3.1 3.5 5.1 5.1l-21.8 21.8 5.1 5.1L138 77.3c3.3-3.3 7.4-5.7 11.8-7-5-.5-9.8-2.6-13.6-6.4-3.8-3.8-5.9-8.7-6.4-13.6-1.3 4.5-3.7 8.5-7 11.8l-20.2 20.2 5.1 5.1 21.7-21.9zm-58.8 69c-1.5-2-3.1-3.5-5.1-5.1l21.8-21.8-5.1-5.1L62 122.7c-3.3 3.3-7.4 5.7-11.8 7 5 .5 9.8 2.6 13.6 6.4 3.8 3.8 5.9 8.7 6.4 13.6 1.3-4.5 3.7-8.5 7-11.8l20.2-20.2-5.1-5.1-21.7 21.9zm96.6 2.4c-8.4-8.4-22-8.4-30.4 0-8.4 8.4-8.4 22.1 0 30.5 2.3 2.3 5.1 4.1 8.2 5.1.8.3 1.6-.5 1.4-1.3l-4.7-16c-.1-.5-.1-1 .2-1.3 4.6-6.2 12.4-8.5 19.6-5.7.4.2.8.5.9 1l4.6 15.9c.2.8 1.3 1 1.9.4 6.7-8.7 6-20.9-1.7-28.6zm-31-.7c-3.8 3.8-5.9 8.7-6.4 13.6-1.3-4.5-3.7-8.5-7-11.8L62.1 77.2c-3.3-3.3-7.4-5.7-11.8-7 5-.5 9.8-2.6 13.6-6.4 3.8-3.8 5.9-8.7 6.4-13.6 1.3 4.5 3.7 8.5 7 11.8l60.7 60.8c3.3 3.3 7.4 5.7 11.8 7-5 .5-9.8 2.6-13.6 6.4zm-1.8-6.8L70.6 65.5c-1.5 2-3.1 3.5-5.1 5.1l63.8 63.9c1.6-2 3.2-3.6 5.1-5.1z M55 97 L0 97 L0 103 L55 103 L55 103 Z M145 97 L200 97 L200 103 L145 103 L145 97 Z"></path>
                            </g>
                        </svg>
                        <h1 className='title'>ARTAUTO</h1>
                    </Link>
                    <Link href={`tel:${phone}`} style={{ textDecoration: 'none' }}><span id='phone'>{ phone }</span></Link>
                    <div className='services'>
                        <Link href='/repair' as='repair'><button className={path == '/repair' ? 'link active' : 'link'}>{t("common:service1")}</button></Link>
                        <Link href='/tow-truck' as='tow-truck'><button className={path == '/tow-truck' ? 'link active' : 'link'}>{t("common:service2")}</button></Link>
                        <Link href='/shop' as='shop'><button className={path == '/shop' ? 'link active' : 'link'}>{t("common:service3")}</button></Link>
                    </div>
                </div>
            </div>
            <div className='top_line'>
                <svg className='svg' viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className='shape_fill'></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className='shape_fill'></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className='shape_fill'></path>
                </svg>
            </div> 
            <div className='bottom_line'>
                <svg className='svg' viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className='shape_fill'></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className='shape_fill'></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className='shape_fill'></path>
                </svg>
            </div>
            <style jsx>{`
                .home {
                    position: relative;
                    height: clamp(300px, 80vw, 950px);
                    opacity: 0;
                    animation: fade-slide-down 2s .1s ease forwards;
                }

                @keyframes fade-slide-down {
                    0% {
                        transform: translateY(-64px);
                        opacity: 0;
                    }
                
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .logo_content {
                    position: absolute;
                    z-index: 1;
                    top: 100px;
                    left: 50%;
                    transform: translateX(-50%);
                    cursor: pointer;
                }

                .logo_content .svg {
                    width: 100%;
                    height: clamp(100px, 20vw, 170px);
                    opacity: 0;
                    fill: var(--color_light);
                    animation: pop-in .6s .3s cubic-bezier(0, 0.9, 0.3, 1.2) forwards;
                }

                #phone {
                    display: block;
                    opacity: 0;
                    color: var(--color_light);
                    font-size: clamp(20px, 7vw, 42px);
                    text-align: center;
                    line-height: 1.4em;
                    text-shadow: -2px 0px 7px black;
                    animation: pop-in .6s .5s cubic-bezier(0, 0.9, 0.3, 1.2) forwards;
                }

                .logo_content .title {
                    opacity: 0;
                    color: var(--color_light);
                    font-size: clamp(24px, 7vw, 48px);
                    text-align: center;
                    line-height: 1.4em;
                    text-shadow: -2px 0px 7px black;
                    animation: pop-in .6s .5s cubic-bezier(0, 0.9, 0.3, 1.2) forwards;
                }

                .logo_content .services {
                    width: min(90vw, 400px);
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    opacity: 0;
                    text-align: center;
                    animation: pop-in .6s .7s cubic-bezier(0, 0.9, 0.3, 1.2) forwards;
                }

                .logo_content .services .link {
                    margin: 0 4px;
                    padding: 3px 5px;
                    background-color: transparent;
                    color: var(--color_light);
                    text-decoration: none;
                    font-size: clamp(16px, 3.7vw, 20px);
                    border: solid 2px var(--color_light);
                    text-shadow: 0px 0px 3px black;
                    white-space: nowrap;
                    cursor: pointer;
                    transition: all .2s linear;
                }

                .logo_content .services .link.active {
                    background-color: var(--color_light);
                    color: var(--color-1);
                    text-shadow: none;
                }

                @media (pointer: fine) {
                    .logo_content .services .link:hover {
                        background-color: var(--color_light);
                        color: var(--color-1);
                        text-shadow: none;
                    }
                }
            
                @media (hover: hover) {
                    .logo_content .services .link:active {
                        background-color: var(--color_light);
                        color: var(--color-1);
                        transition: 0s;
                    }
                }

                @media screen and (max-width: 831px) {
                    .logo_content {
                        top: 32px;
                    }
                }

                @keyframes pop-in {
                    0% {
                        opacity: 0;
                        transform: translateY(-64px) scale(.8);
                    }
                
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .top_line {
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    width: 100%;
                    overflow: hidden;
                    line-height: 0;
                    transform: rotate(180deg);
                }

                .top_line .svg {
                    position: relative;
                    display: block;
                    width: calc(110% + 1.3px);
                    height: 41px;
                }

                .top_line .shape_fill {
                    fill: var(--color_dark);
                }

                .bottom_line {
                    position: absolute;
                    bottom: -59px;
                    left: 0;
                    width: 100%;
                    overflow: hidden;
                    line-height: 0;
                }

                .bottom_line .svg {
                    position: relative;
                    display: block;
                    width: calc(100% + 1.3px);
                    height: 59px;
                }
            
                .bottom_line .shape_fill {
                    fill: var(--color_dark);
                }
            `}</style>
        </header>
    );
}

export default Header;
