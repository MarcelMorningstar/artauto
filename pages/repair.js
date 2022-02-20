import React from 'react';
import { Navbar, Footer, Info } from '../components';
import global from '../styles/services.module.scss';
import styles from '../styles/repair.module.scss';

export default function Repair() {
    return (
        <div className={global.container}>
            <Navbar />

            <div className={global.content}>
                <Info title='REMONTS'>
                    
                </Info>
            </div>

            <Footer />
        </div>
    );
}
