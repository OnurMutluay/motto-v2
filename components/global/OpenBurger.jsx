const OpenBurger = (props) => {
    return (
        <svg
            width="40"
            height="4"
            viewBox="0 0 40 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0V2V4H40V2V0H0Z"
                fill={props.fill ? props.fill : '#000000'}
            />
        </svg>
    );
};

export default OpenBurger;
