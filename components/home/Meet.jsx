import Marquee from 'react-fast-marquee';
import styles from '../../styles/home/meet.module.css';
import LogoIcon from '../global/LogoIcon';
import Button from '../ui/Button';

const Meet = () => {
    return (
        <div className={styles.container}>
            <Marquee>
                <div className={styles.marquee}>
                    <LogoIcon />
                    <h3>LET'S MEET</h3>

                    <LogoIcon />
                    <h3>LET'S MEET</h3>

                    <LogoIcon />
                    <h3>LET'S MEET</h3>

                    <LogoIcon />
                    <h3>LET'S MEET</h3>

                    <LogoIcon />
                    <h3>LET'S MEET</h3>

                    <LogoIcon />
                    <h3>LET'S MEET</h3>

                    <LogoIcon />
                    <h3>LET'S MEET</h3>
                </div>
            </Marquee>

            <p>
                We are here to work together to develop your project and bring unique capabilities
                to your brand. Get ready for an exciting journey, because we have a lot to achieve
                together!
            </p>

            <Button href="/contact">CONNECT</Button>
        </div>
    );
};

export default Meet;
