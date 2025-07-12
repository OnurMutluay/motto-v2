import styles from '../../styles/home/frame.module.css';
import Marquee from 'react-fast-marquee';

const Frame = () => {
    return (
        <Marquee>
            <div className={styles.marquee}>
                <img src="/frame/frame_1.jpg" />
                <img src="/frame/frame_2.jpg" />
                <img src="/frame/frame_3.jpg" />
                <img src="/frame/frame_4.jpg" />
                <img src="/frame/frame_5.jpg" />
                <img src="/frame/frame_6.jpg" />
                <img src="/frame/frame_7.jpg" />
                <img src="/frame/frame_8.jpg" />
            </div>
        </Marquee>
    );
};

export default Frame;
