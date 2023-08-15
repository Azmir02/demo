const Rnext = ({ onClick }) => {
    return (
        <div className="hidden lg:block rnext" onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
                    stroke="#313131"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M3.5 12H20.33"
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

export default Rnext