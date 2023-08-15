import React from "react";

const SmallNextArrow = ({ onClick }) => {
  return (
    <div className="next-arrow-small" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M14.9401 11.2875L10.0501 6.3975C9.47256 5.82 8.52756 5.82 7.95006 6.3975L3.06006 11.2875"
          stroke="#939393"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default SmallNextArrow;
