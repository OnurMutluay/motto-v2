import Marquee from 'react-fast-marquee';
import styles from '../../styles/cases/casedetailheader.module.css';
import LogoIcon from '../global/LogoIcon';

const CaseDetailHeader = (props) => {
    return (
        <div
            style={{
                background: ` url(${props.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className={styles.header}
        >
            <Marquee>
                <div className={styles.marquee}>
                    <LogoIcon />
                    <h3>{props.title}</h3>

                    <LogoIcon />
                    <h3>{props.title}</h3>

                    <LogoIcon />
                    <h3>{props.title}</h3>

                    <LogoIcon />
                    <h3>{props.title}</h3>

                    <LogoIcon />
                    <h3>{props.title}</h3>

                    <LogoIcon />
                    <h3>{props.title}</h3>

                    <LogoIcon />
                    <h3>{props.title}</h3>

                    <LogoIcon />
                    <h3>{props.title}</h3>

                    <LogoIcon />
                    <h3>{props.title}</h3>

                    <LogoIcon />
                    <h3>{props.title}</h3>

                    <LogoIcon />
                    <h3>{props.title}</h3>

                    <LogoIcon />
                    <h3>{props.title}</h3>

                    <LogoIcon />
                    <h3>{props.title}</h3>
                </div>
            </Marquee>
        </div>
    );
};

export default CaseDetailHeader;
