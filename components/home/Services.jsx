import styles from '../../styles/home/services.module.css';
import Button from '../ui/Button';

const Services = () => {
    return (
        <div className={styles.container}>
            <div className={styles.meet}>
                <div>
                    <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.00759031 21.462H5.58039C14.2813 21.462 21.3498 14.3563 21.3498 5.6021V0C9.56639 0 -2.06064e-06 9.61669 0.00759031 21.462ZM45 21.462C45 9.61923 35.4377 0.00413024 23.6578 0V5.60974C23.6578 14.3563 30.7187 21.462 39.4272 21.462H45ZM39.4196 23.538H44.9924C44.9924 35.3833 35.426 45 23.6427 45V39.3979C23.6427 30.6437 30.7112 23.5456 39.412 23.5456L39.4196 23.538ZM0 23.5304C0 35.3757 9.56639 44.9924 21.3498 44.9924V39.3903C21.3498 30.636 14.2813 23.5304 5.5728 23.5304H0Z"
                            fill="#FF3D00"
                        />
                    </svg>
                </div>

                <div className={styles.texts}>
                    <h3>
                        We add our unique touch to every job and set new standards by combining
                        aesthetics and function.
                    </h3>
                    <div style={{ marginTop: 'auto' }}>
                        <Button href="/contact" inline>
                            LET'S MEET
                        </Button>
                    </div>
                </div>
            </div>

            <div className={styles.whatWeDo}>
                <ul className={styles.whatWeDoList}>
                    <li>Branding</li>
                    <li>Mobile App</li>
                    <li>UX / UI Design</li>
                    <li>Web Site</li>
                    <li>Marketing</li>
                    <li>Startup Projects</li>
                    <li>Art Direction</li>
                    <li>Development</li>
                    <li>Animation</li>
                    <li>E-Shop</li>
                </ul>

                <Button href="/services" inline>
                    WHAT WE DO
                </Button>
            </div>
        </div>
    );
};

export default Services;
