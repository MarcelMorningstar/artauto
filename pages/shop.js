import React from 'react';
import { Navbar, Footer, Info } from '../components';
import global from '../styles/services.module.scss';
import styles from '../styles/shop.module.scss';

export default function Shop() {
    return (
        <div className={global.container}>
            <Navbar />

            <div className={global.content}>
                <Info title='VEIKALS'>
                    
                </Info>
            </div>

            <Footer />
        </div>
    );
}
