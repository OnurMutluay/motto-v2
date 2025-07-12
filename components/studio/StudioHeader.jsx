import Marquee from 'react-fast-marquee';
import LogoIcon from '../global/LogoIcon';
import styles from '../../styles/studio/studioheader.module.css';

const StudioHeader = () => {
    return (
        <div className={styles.container}>
            <Marquee>
                <div className={styles.marquee}>
                    <LogoIcon />
                    <h3>STUDIO</h3>

                    <LogoIcon />
                    <h3>STUDIO</h3>

                    <LogoIcon />
                    <h3>STUDIO</h3>

                    <LogoIcon />
                    <h3>STUDIO</h3>

                    <LogoIcon />
                    <h3>STUDIO</h3>

                    <LogoIcon />
                    <h3>STUDIO</h3>

                    <LogoIcon />
                    <h3>STUDIO</h3>

                    <LogoIcon />
                    <h3>STUDIO</h3>

                    <LogoIcon />
                    <h3>STUDIO</h3>

                    <LogoIcon />
                    <h3>STUDIO</h3>

                    <LogoIcon />
                    <h3>STUDIO</h3>

                    <LogoIcon />
                    <h3>STUDIO</h3>

                    <LogoIcon />
                    <h3>STUDIO</h3>

                    <LogoIcon />
                    <h3>STUDIO</h3>
                </div>
            </Marquee>

            <div className={styles.image}>
                <img src="/studio-header.png" alt="Studio" />
                <p>
                    We are a design studio with a proven track record of delivering exceptional
                    digital solutions to our clients. We work with a wide range of businesses, from
                    newly established startups to industry-leading companies around the world.
                </p>
            </div>
        </div>
    );
};

export default StudioHeader;
