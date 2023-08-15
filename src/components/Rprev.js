const Rprev = ({ onClick }) => {
    return (
        <div className="hidden lg:block rprev" onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M9.57 5.92969L3.5 11.9997L9.57 18.0697"
                    stroke="#313131"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M20.4999 12H3.66992"
                    stroke="#313131"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>

    )
}

export default Rprev