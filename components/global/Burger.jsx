const Burger = (props) => {
    return (
        <svg
            style={{ marginTop: props.open ? '1rem' : 0 }}
            width="40"
            height="13"
            viewBox="0 0 40 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d={props.open === false ? 'M0 3H40V0H0V3ZM0 13H40V10H0V13Z' : 'M0 0V2V4H40V2V0H0Z'}
                fill={props.fill ? props.fill : '#FF4F17'}
            />
        </svg>
    );
};

export default Burger;
