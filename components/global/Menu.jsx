import React from 'react';
import styles from '../../styles/global/menu.module.css';
import Logo from '../global/Logo';
import Burger from '../global/Burger';
import Link from 'next/link';
import OpenBurger from './OpenBurger';
import { motion } from 'framer-motion';
import useScreenSize from '@/hooks/useScreenSize';

const Menu = () => {
    const [menu, setMenu] = React.useState(false);
    const screenSize = useScreenSize();

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Case Studies', href: '/cases' },
        { label: 'Services', href: '/services' },
        { label: 'Studio', href: '/studio' },
        { label: 'Brands', href: '/brands' },
        { label: 'Connect Us', href: '/contact' },
    ];

    const socials = [
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kullanici' },
        { name: 'Behance', href: 'https://www.behance.net/kullanici' },
        { name: 'Dribbble', href: 'https://dribbble.com/kullanici' },
        { name: 'Instagram', href: 'https://www.instagram.com/kullanici' },
    ];

    const containerVariants = {
        hidden: { opacity: 0, pointerEvents: 'none', visibility: 'hidden' },
        visible: {
            opacity: 1,
            pointerEvents: 'auto',
            visibility: 'visible',
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
                ease: [0.65, 0, 0.35, 1],
                duration: 0.6,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2,
            },
        },
    };

    const imageVariants = {
        hidden: { scale: 1, opacity: 1 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96], // Arka plan resmi için de aynı easing
            },
        },
    };

    return (
        <div className={styles.menu}>
            <div
                style={{
                    position: menu && 'fixed',
                    paddingRight: menu && '4rem',
                }}
                className={styles.burgerAndLogo}
            >
                <div
                    onClick={() => {
                        setMenu(!menu);
                    }}
                >
                    <div className={styles.burgerIcon}>
                        <Burger open={menu} fill={menu && '#000'} />
                    </div>
                </div>

                <Link className={styles.logoDiv} href="/">
                    <Logo fill={menu && '#000000'} />
                </Link>
            </div>

            <ul style={{ opacity: menu ? 0 : 1 }} className={styles.socials}>
                <li>
                    <Link href="#" target="_blank">
                        LinkedIn
                    </Link>
                </li>
                <li>
                    <Link href="#" target="_blank">
                        Behance
                    </Link>
                </li>
                <li>
                    <Link href="#" target="_blank">
                        Dribbble
                    </Link>
                </li>
                <li>
                    <Link href="#" target="_blank">
                        Instagram
                    </Link>
                </li>
            </ul>

            <motion.div
                initial="hidden"
                animate={menu ? 'visible' : 'hidden'}
                variants={containerVariants}
                className={styles.menuContainer}
            >
                {screenSize.width > 1200 && <div className={styles.openBurger}></div>}

                <div className={styles.menuContent}>
                    <div className={styles.linksAndContacts}>
                        <motion.ul className={styles.menuLinks} variants={containerVariants}>
                            {menuItems.map(({ label, href }) => (
                                <motion.li
                                    whileHover={{ x: '0.5rem' }}
                                    key={label}
                                    style={{ cursor: 'pointer' }}
                                    variants={itemVariants}
                                >
                                    <a href={href}>{label}</a>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.ul className={styles.contact} variants={containerVariants}>
                            <motion.li variants={itemVariants}>
                                Motto Istanbul : <br />
                                Şenlik Mah. Vişneli Sok. N.75 Istanbul . Türkiye
                            </motion.li>
                            <motion.li variants={itemVariants}>
                                Email : hello@motto.studio <br /> Phone : +908503033147
                            </motion.li>
                        </motion.ul>
                    </div>

                    <motion.ul className={styles.socialsMobile} variants={containerVariants}>
                        {[
                            { label: 'LinkedIn', link: '#' },
                            { label: 'Behance', link: '#' },
                            { label: 'Dribbble', link: '#' },
                            { label: 'Instagram', link: '#' },
                        ].map((platform) => (
                            <a href={platform.link} target="_blank">
                                <motion.li key={platform} variants={itemVariants}>
                                    {platform.label}
                                </motion.li>
                            </a>
                        ))}
                    </motion.ul>
                </div>

                <motion.img
                    className={styles.bg}
                    src="/motto-menu-looper.gif"
                    alt="Background"
                    initial="hidden"
                    animate={menu ? 'visible' : 'hidden'}
                    variants={imageVariants}
                />
            </motion.div>
        </div>
    );
};

export default Menu;
