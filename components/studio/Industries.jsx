import styles from '../../styles/studio/industries.module.css';
import Button from '../ui/Button';

const Industries = () => {
    return (
        <div className={styles.container}>
            <svg width="64" height="56" viewBox="0 0 64 56" fill="none">
                <g clip-path="url(#clip0_9781_2043)">
                    <path
                        d="M29.87 0V24.29H14.79V26H14.93C23.18 26 29.86 32.72 29.86 41C29.86 49.28 23.18 56 14.93 56C6.68 56 0 49.28 0 41C0 40.86 0 40.71 0 40.57V17.14C0 7.68 7.64 0 17.06 0H29.86H29.87ZM64 0V24.29H48.92V26H49.06C57.31 26 63.99 32.72 63.99 41C63.99 49.28 57.31 56 49.06 56C40.81 56 34.13 49.28 34.13 41C34.13 40.86 34.13 40.71 34.13 40.57V17.14C34.13 7.68 41.77 0 51.2 0H64Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_9781_2043">
                        <rect width="64" height="56" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <div className={styles.descriptionContainer}>
                <h3>We have extensive experience serving key industries.</h3>
                <p>
                    The knowledge and experience we have gained by collaborating with leading
                    companies in the sector enable us to offer the most effective solutions to our
                    customers. We develop specifically tailored strategies for each project and
                    respond to our customers' needs in the best possible way.
                </p>

                <Button href="/services">What We Do</Button>
            </div>

            <ul className={styles.serviceList}>
                <li>Arts and Culture</li>
                <li>Communication and Network</li>
                <li>Media and Entertaintment</li>
                <li>Fashion and Lifestyle</li>
                <li>Automotive and Transportation</li>
                <li>Agriculture and Food</li>
                <li>Travel and Accommodation</li>
                <li>Manufacturing and Industry</li>
                <li>Startups</li>
            </ul>
        </div>
    );
};

export default Industries;
