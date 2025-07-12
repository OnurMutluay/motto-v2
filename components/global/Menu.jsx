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
        { label: 'Contact Us', href: '/contact' },
    ];

    const containerVariants = {
        hidden: { opacity: 1, top: '-100vh' },
        visible: {
            top: 0,
            opacity: 1,
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
                duration: 0.4,
                ease: [0.43, 0.13, 0.23, 0.96], // Alt öğeler için de aynı easing
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
                    <Burger open={menu} fill={menu && '#000'} />
                </div>

                <Link href="/">
                    <Logo fill={menu && '#000'} />
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
                style={{ top: menu ? 0 : '-100vh' }}
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

                            <motion.li variants={itemVariants}>
                                <div className={styles.language}>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.97595 18.0001C3.67578 17.9018 -0.0474979 13.6725 0.000457928 8.96718C0.0551134 3.6114 4.38665 -0.0481461 9.03202 0.000478777C14.3163 0.0561507 18.0378 4.3066 17.9994 9.01404C17.9567 14.2719 13.7275 17.9829 8.9756 18.0001H8.97595ZM9.00769 6.83297C8.37932 6.83297 7.75061 6.8365 7.12225 6.83051C6.97098 6.8291 6.90856 6.88195 6.90892 7.03205C6.91068 8.33858 6.91033 9.64476 6.90892 10.9513C6.90892 11.0943 6.95722 11.1606 7.1152 11.1599C8.37192 11.1549 9.629 11.1553 10.8857 11.1595C11.0292 11.1599 11.0895 11.1084 11.0895 10.9671C11.0885 9.65498 11.0885 8.34281 11.0902 7.03029C11.0902 6.87878 11.0247 6.8291 10.8751 6.83051C10.2528 6.8365 9.63005 6.83297 9.00733 6.83297H9.00769ZM3.60173 6.83297C2.97901 6.83297 2.35664 6.82769 1.73427 6.84002C1.65952 6.84143 1.53892 6.92776 1.51988 6.99682C1.15669 8.3259 1.15598 9.65885 1.51847 10.9883C1.53751 11.0584 1.65634 11.149 1.72898 11.1497C2.97407 11.1595 4.21916 11.1546 5.46425 11.1595C5.61905 11.1602 5.67264 11.1098 5.66277 10.9566C5.63421 10.5063 5.5926 10.0553 5.59613 9.60494C5.60247 8.77268 5.63103 7.94042 5.66383 7.10887C5.67229 6.89922 5.62433 6.8217 5.39831 6.82769C4.79956 6.84354 4.20047 6.83297 3.60137 6.83333L3.60173 6.83297ZM14.4129 11.1567C15.0297 11.1567 15.6464 11.1627 16.2628 11.149C16.3396 11.1472 16.4623 11.0521 16.4824 10.9781C16.8411 9.66061 16.8439 8.33893 16.4839 7.02148C16.4627 6.94361 16.3343 6.84178 16.2547 6.84108C15.0216 6.8298 13.7881 6.83579 12.5547 6.8298C12.3872 6.8291 12.3237 6.87596 12.3357 7.04861C12.3664 7.48694 12.4059 7.92633 12.4027 8.36501C12.3963 9.19128 12.3699 10.0179 12.3357 10.8435C12.3262 11.0774 12.3685 11.1736 12.6336 11.1638C13.226 11.1419 13.8198 11.1567 14.4129 11.1567ZM10.939 5.56344C10.806 4.96585 10.7038 4.40138 10.5521 3.8503C10.3311 3.04658 10.0733 2.25132 9.52885 1.59277C9.15861 1.14457 8.84443 1.14316 8.47559 1.58642C7.94843 2.2196 7.68925 2.9828 7.47486 3.75833C7.31337 4.34218 7.19947 4.93907 7.05701 5.56344H10.939ZM9.01791 12.4044C8.4368 12.4044 7.85569 12.4055 7.27423 12.4033C7.14199 12.403 7.07747 12.4368 7.11237 12.5894C7.16068 12.8001 7.18325 13.0168 7.22874 13.2285C7.44807 14.2518 7.71006 15.2613 8.28623 16.1548C8.77637 16.9152 9.22772 16.918 9.71186 16.1548C10.3988 15.0721 10.665 13.8469 10.8857 12.6073C10.9153 12.4414 10.8603 12.4009 10.7084 12.4019C10.1449 12.4062 9.58139 12.4037 9.01756 12.404L9.01791 12.4044ZM6.97768 1.56352C5.66101 1.46944 2.20149 4.3154 2.09958 5.56415C2.13802 5.57084 2.17751 5.58388 2.21665 5.58423C3.36195 5.58529 4.5076 5.58775 5.65254 5.57754C5.71601 5.57683 5.82286 5.47676 5.83449 5.40982C6.03619 4.24 6.28796 3.08499 6.77704 1.9948C6.84086 1.85245 6.90856 1.71186 6.97803 1.56352H6.97768ZM11.0151 1.54943C11.0916 1.71362 11.1601 1.85421 11.2235 1.99656C11.7034 3.07089 11.9654 4.20547 12.1442 5.36154C12.1721 5.5416 12.2479 5.58952 12.4192 5.58881C13.5176 5.58282 14.616 5.58635 15.7144 5.58494C15.7804 5.58494 15.846 5.57014 15.9144 5.56168C15.5381 4.08461 12.5522 1.63188 11.0148 1.54943H11.0151ZM6.95299 16.4307C6.95546 16.4198 6.96392 16.4061 6.96004 16.398C6.9001 16.2644 6.83769 16.1323 6.77809 15.9988C6.29501 14.9191 6.03372 13.7782 5.85248 12.6169C5.82497 12.4396 5.74634 12.4012 5.5859 12.4019C4.4875 12.4065 3.3891 12.404 2.2907 12.4051C2.22406 12.4051 2.15741 12.4178 2.089 12.4248C2.38203 13.8367 5.60494 16.4794 6.95299 16.4311V16.4307ZM11.0204 16.43C12.4013 16.473 15.8509 13.6281 15.8971 12.4262C15.8759 12.4202 15.8537 12.4086 15.8315 12.4086C14.6626 12.4072 13.494 12.404 12.3251 12.4132C12.269 12.4136 12.1749 12.5171 12.1636 12.5837C11.9626 13.7536 11.7101 14.9086 11.2211 15.9984C11.1576 16.1401 11.0902 16.2799 11.0204 16.4297V16.43Z"
                                            fill="black"
                                        />
                                    </svg>
                                    <div>Turkish</div>
                                </div>
                            </motion.li>
                        </motion.ul>
                    </div>

                    <motion.ul className={styles.socialsMobile} variants={containerVariants}>
                        {['LinkedIn', 'Behance', 'Dribbble', 'Instagram'].map((platform) => (
                            <motion.li key={platform} variants={itemVariants}>
                                {platform}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>

                <motion.img
                    className={styles.bg}
                    src="/lipton-menu-bg.png"
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
