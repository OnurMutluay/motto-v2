import styles from '../../styles/contact/form.module.css';
import Button from '../ui/Button';

const Form = () => {
    return (
        <div className={styles.container}>
            <svg
                width="64"
                height="56"
                viewBox="0 0 64 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_9781_2040)">
                    <path
                        d="M29.87 0V24.29H14.79V26H14.93C23.18 26 29.86 32.72 29.86 41C29.86 49.28 23.18 56 14.93 56C6.68 56 0 49.28 0 41C0 40.86 0 40.71 0 40.57V17.14C0 7.68 7.64 0 17.06 0H29.86H29.87ZM64 0V24.29H48.92V26H49.06C57.31 26 63.99 32.72 63.99 41C63.99 49.28 57.31 56 49.06 56C40.81 56 34.13 49.28 34.13 41C34.13 40.86 34.13 40.71 34.13 40.57V17.14C34.13 7.68 41.77 0 51.2 0H64Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_9781_2040">
                        <rect width="64" height="56" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <p>
                Contact the Motto Studio team or join our mailing list to get help with your
                project.
            </p>

            <div className={styles.inputs}>
                <input type="text" placeholder="Name - Surname" />
                <input type="text" placeholder="Business / Brand Name" />
                <input type="text" placeholder="E-Mail" />
                <input type="text" placeholder="Phone Number" />
                <textarea placeholder="Your Message"></textarea>
            </div>

            <Button>SEND</Button>
        </div>
    );
};

export default Form;
