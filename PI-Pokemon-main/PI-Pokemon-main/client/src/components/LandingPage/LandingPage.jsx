import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

export default function LandingPage() {
    document.title = 'Henry Pokemon App';
    return (
        <div className={styles.div}>
            <h1 className={styles.h1}>Henry Pokemon</h1>
            <Link to='/home'>
                <button className={styles.button}>Home</button>
            </Link>
        </div>
    )
}