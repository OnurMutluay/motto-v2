import Link from 'next/link';
import styles from '../../styles/global/footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/brands">Brands</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link href="/cases">Case Studies</Link>
                    </li>
                    <li>
                        <Link href="/studio">Studio</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact Us</Link>
                    </li>
                </ul>

                <div className={styles.contact}>
                    <p>
                        Motto Istanbul : <br />
                        Şenlik Mah. Vişneli Sok. N.75 Istanbul . Türkiye
                    </p>
                    <p>
                        E-Mail : connect@motto.studio <br /> Phone : +908503033147
                    </p>
                </div>
            </div>

            <div className={styles.links}>
                <p style={{ fontSize: 18, color: '#000' }}>Motto is a Rubrec company.</p>

                <ul>
                    <li>
                        <Link href="#">Linkedin</Link>
                    </li>
                    <li>
                        <Link href="#">Behance</Link>
                    </li>
                    <li>
                        <Link href="#">Dribbble</Link>
                    </li>
                    <li>
                        <Link href="#">Instagram</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
