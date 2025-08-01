import styles from '../../styles/cases/casedetaildescription.module.css';

const CaseDetailDescription = (props) => {
    const description = props.description || '';
    const services = props.services || [];

    if (props.oneCol === true) {
        return (
            <div className={styles.oneColContainer}>
                <h3 style={{ color: props.color }}>{props.oneColTitle}</h3>
                <p style={{ color: props.color }}>{props.oneColDescription}</p>
            </div>
        );
    } else {
        return (
            <div className={styles.container}>
                <p>{description}</p>

                <div className={styles.servicesContainer}>
                    <h3>Services</h3>
                    <ul>
                        {services.map((i, index) => {
                            return <li key={index}>{i}</li>;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
};

export default CaseDetailDescription;
