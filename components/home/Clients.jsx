import styles from '../../styles/home/clients.module.css';
import Marquee from 'react-fast-marquee';

const Clients = () => {
    return (
        <Marquee gradient gradientColor="#101010">
            <div className={styles.marquee}>
                <img src="/clients/lipton.png" />
                <img src="/clients/metro.png" />
                <img src="/clients/yore.png" />
                <img src="/clients/fitaction.png" />
                <img src="/clients/xguard.png" />
            </div>
        </Marquee>
    );
};

export default Clients;
