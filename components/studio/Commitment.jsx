import LogoIcon from '../global/LogoIcon';
import styles from '../../styles/studio/commitment.module.css';

const Commitment = () => {
    return (
        <div className={styles.container}>
            <LogoIcon />
            <h3>
                We offer fast and effective solutions to our customers by blending visual artificial
                intelligence and traditional design.
            </h3>
            <p>
                By combining the power of design and the innovation of artificial intelligence
                technology, we produce solutions specific to our customers' needs and focus on
                maximizing their business results. Thanks to this approach, we provide our customers
                with a competitive advantage by optimizing their design processes and help them
                achieve their digital goals.
            </p>
        </div>
    );
};

export default Commitment;
