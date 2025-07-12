import Marquee from 'react-fast-marquee';
import LogoIcon from '../global/LogoIcon';
import styles from '../../styles/brands/brandsheader.module.css';

const BrandsHeader = () => {
    return (
        <div className={styles.container}>
            <Marquee>
                <div className={styles.marquee}>
                    <LogoIcon />
                    <h3>BRANDS</h3>

                    <LogoIcon />
                    <h3>BRANDS</h3>

                    <LogoIcon />
                    <h3>BRANDS</h3>

                    <LogoIcon />
                    <h3>BRANDS</h3>

                    <LogoIcon />
                    <h3>BRANDS</h3>

                    <LogoIcon />
                    <h3>BRANDS</h3>

                    <LogoIcon />
                    <h3>BRANDS</h3>

                    <LogoIcon />
                    <h3>BRANDS</h3>

                    <LogoIcon />
                    <h3>BRANDS</h3>

                    <LogoIcon />
                    <h3>BRANDS</h3>

                    <LogoIcon />
                    <h3>BRANDS</h3>

                    <LogoIcon />
                    <h3>BRANDS</h3>

                    <LogoIcon />
                    <h3>BRANDS</h3>

                    <LogoIcon />
                    <h3>BRANDS</h3>
                </div>
            </Marquee>

            <p className={styles.description}>
                We are here to maximize the potential of brands with our strategies and technologies
                that will help them become leaders in the business world of the future.
            </p>
        </div>
    );
};

export default BrandsHeader;
