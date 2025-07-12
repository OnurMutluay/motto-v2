import React from 'react';
import styles from '../../styles/home/header.module.css';
import Logo from '../global/Logo';
import Burger from '../global/Burger';
import Button from '../ui/Button';
import Link from 'next/link';
import Menu from '../global/Menu';

const Header = () => {
    React.useEffect(() => {
        const video = document.getElementById('video');
        video.play().catch((error) => console.log('Autoplay başlatılamadı:', error));
    }, []);

    return (
        <div className={styles.header}>
            <video className={styles.video} id="video" autoplay loop muted>
                <source src="/video.mp4" type="video/mp4" />
            </video>

            <div className={styles.btn}>
                <Button href="/cases"> ALL WORKS </Button>
            </div>
        </div>
    );
};

export default Header;
