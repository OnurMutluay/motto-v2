import styles from '../../styles/studio/frame.module.css';
import Marquee from 'react-fast-marquee';

const Frame = () => {
    return (
        <Marquee>
            <div className={styles.marquee}>
                <img src="/studio/frame_1.jpg" />
                <img src="/studio/frame_2.jpg" />
                <img src="/studio/frame_3.jpg" />
                <img src="/studio/frame_4.jpg" />
                <img src="/studio/frame_5.jpg" />
                <img src="/studio/frame_6.jpg" />
                <img src="/studio/frame_7.jpg" />
                <img src="/studio/frame_8.jpg" />
            </div>
        </Marquee>
    );
};

export default Frame;
