import Marquee from 'react-fast-marquee';
import LogoIcon from '../global/LogoIcon';
import styles from '../../styles/services/servicesheader.module.css';

const ServicesHeader = () => {
    return (
        <div className={styles.container}>
            <Marquee>
                <div className={styles.marquee}>
                    <LogoIcon />
                    <h3>SERVICES</h3>

                    <LogoIcon />
                    <h3>SERVICES</h3>

                    <LogoIcon />
                    <h3>SERVICES</h3>

                    <LogoIcon />
                    <h3>SERVICES</h3>

                    <LogoIcon />
                    <h3>SERVICES</h3>

                    <LogoIcon />
                    <h3>SERVICES</h3>

                    <LogoIcon />
                    <h3>SERVICES</h3>

                    <LogoIcon />
                    <h3>SERVICES</h3>

                    <LogoIcon />
                    <h3>SERVICES</h3>

                    <LogoIcon />
                    <h3>SERVICES</h3>

                    <LogoIcon />
                    <h3>SERVICES</h3>

                    <LogoIcon />
                    <h3>SERVICES</h3>

                    <LogoIcon />
                    <h3>SERVICES</h3>

                    <LogoIcon />
                    <h3>SERVICES</h3>
                </div>
            </Marquee>

            <p className={styles.description}>
                In addition to 360° design services, we also offer startup and software services in
                the development and continuity of brands.
            </p>
        </div>
    );
};

export default ServicesHeader;
