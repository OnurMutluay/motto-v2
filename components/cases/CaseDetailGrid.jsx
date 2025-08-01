import styles from '../../styles/cases/casedetailgrid.module.css';

const CaseDetailGrid = (props) => {
    if (props.grid === 2) {
        return (
            <div className={styles.two}>
                <img src={props.images[0]} />
                <img src={props.images[1]} />
            </div>
        );
    } else if (props.grid === 3) {
        return (
            <div className={styles.three}>
                <img src={props.images[0]} />
                <img src={props.images[1]} />
                <img src={props.images[2]} />
            </div>
        );
    }
};

export default CaseDetailGrid;
