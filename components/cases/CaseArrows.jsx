import Link from 'next/link';
import styles from '../../styles/cases/casearrows.module.css';
import Button from '../ui/Button';

const CaseArrows = (props) => {
    return (
        <div className={styles.container}>
            <Button href="/cases"> ALL WORKS </Button>
        </div>
    );
};

export default CaseArrows;
