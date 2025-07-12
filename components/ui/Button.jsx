import Link from 'next/link';
import styles from '../../styles/ui/button.module.css';
import ButtonArrow from '../global/ButtonArrow';

const Button = (props) => {
    if (props.inline) {
        return (
            <Link
                style={props.style}
                className={[styles.containerInline]}
                href={props.href ? props.href : '#'}
            >
                <ButtonArrow />
                {props.children}
            </Link>
        );
    } else {
        return (
            <Link
                style={props.style}
                className={[styles.container]}
                href={props.href ? props.href : '#'}
            >
                {props.children}

                <ButtonArrow />
            </Link>
        );
    }
};

export default Button;
