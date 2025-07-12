import Marquee from 'react-fast-marquee';
import LogoIcon from '../global/LogoIcon';
import styles from '../../styles/cases/caseheader.module.css';

const CaseHeader = () => {
    return (
        <div className={styles.container}>
            <Marquee>
                <div className={styles.marquee}>
                    <LogoIcon />
                    <h3>CASE STUDIES</h3>

                    <LogoIcon />
                    <h3>CASE STUDIES</h3>

                    <LogoIcon />
                    <h3>CASE STUDIES</h3>

                    <LogoIcon />
                    <h3>CASE STUDIES</h3>

                    <LogoIcon />
                    <h3>CASE STUDIES</h3>

                    <LogoIcon />
                    <h3>CASE STUDIES</h3>

                    <LogoIcon />
                    <h3>CASE STUDIES</h3>
                </div>
            </Marquee>

            <p className={styles.description}>
                Explore our case studies and see how Motto® enhances brands for a changing world,
                ensuring cultural relevance and future readiness.
            </p>
        </div>
    );
};

export default CaseHeader;
