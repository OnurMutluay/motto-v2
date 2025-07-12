import styles from '../../styles/studio/frame.module.css';
import Marquee from 'react-fast-marquee';

const Frame = () => {
    return (
        <Marquee>
            <div className={styles.marquee}>
                <img src="/studio/frame_1.png" />
                <img src="/studio/frame_2.png" />
                <img src="/studio/frame_3.png" />
                <img src="/studio/frame_4.png" />
                <img src="/studio/frame_5.png" />
                <img src="/studio/frame_6.png" />
                <img src="/studio/frame_7.png" />
                <img src="/studio/frame_8.png" />
            </div>
        </Marquee>
    );
};

export default Frame;
