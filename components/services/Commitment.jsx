import LogoIcon from '../global/LogoIcon';
import styles from '../../styles/services/commitment.module.css';

const Commitment = () => {
    return (
        <div className={styles.container}>
            <LogoIcon />
            <h3>
                We strongly advocate for the potency of collaboration in achieving business triumph.
            </h3>
            <p>
                Our approach entails forging close alliances with our clientele, comprehending their
                distinct aspirations and necessities, and crafting tailored strategies that yield
                tangible outcomes. Our commitment lies in sculpting digital landscapes that propel
                our collaborators towards unprecedented achievements.
            </p>
        </div>
    );
};

export default Commitment;
