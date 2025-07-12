import styles from '../../styles/studio/aboutmotto.module.css';
import LogoIcon from '../global/LogoIcon';

const AboutMotto = () => {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <LogoIcon />
                <h3>About Motto</h3>
                <p>
                    We have been operating in the industry since 2014. During this time, we have
                    achieved meaningful success for ourselves and our business partners. Drawing
                    strength from our past experiences, we move forward into the future with greater
                    goals. We are determined to continuously increase the value we offer to our
                    customers and further strengthen our leadership in the industry.
                </p>
            </div>

            <div className={styles.stats}>
                <div className={styles.stat}>
                    <h3>150 +</h3>
                    <p>Brands</p>
                </div>

                <div className={styles.stat}>
                    <h3>10Y +</h3>
                    <p>Experience</p>
                </div>

                <div className={styles.stat}>
                    <h3>500 +</h3>
                    <p>Projects</p>
                </div>

                <div className={styles.stat}>
                    <h3>20 +</h3>
                    <p>Startup Projects</p>
                </div>

                <div className={styles.stat}>
                    <h3>3 +</h3>
                    <p>Countries</p>
                </div>

                <div className={styles.stat}>
                    <h3>85% +</h3>
                    <p>Multiple Projects</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMotto;
