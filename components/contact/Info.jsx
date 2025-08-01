import { Fragment } from 'react';
import styles from '../../styles/contact/info.module.css';
import Link from 'next/link';

const Info = () => {
    return (
        <div>
            <div className={styles.contact}>
                <h5>Addresses & Phone : </h5>
                <p>
                    Motto Istanbul : <br /> Şenlik Mah. Vişneli Sok. N.75 <br /> Istanbul . Türkiye
                </p>
                <p>
                    E-Mail : connect@motto.studio <br /> Phone : +908503033147
                </p>
            </div>

            <div className={styles.social}>
                <h5>Follow Us</h5>

                <div className={styles.socialLinks}>
                    <Link href="#">
                        <li>LinkedIn</li>
                    </Link>

                    <Link href="#">
                        <li>Instagram</li>
                    </Link>

                    <Link href="#">
                        <li>Dribbble</li>
                    </Link>

                    <Link href="#">
                        <li>Behance</li>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Info;
