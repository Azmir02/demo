import React from "react";

const CrArrow = ({ onClick }) => {
  return (
    <div className="prev_ClArrow" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="40"
        viewBox="0 0 39 40"
        fill="none"
      >
        <path
          d="M24.3386 32.5496L13.7593 21.9703C12.5099 20.7209 12.5099 18.6764 13.7593 17.427L24.3386 6.84766"
          stroke="#fff"
          stroke-width="1.46034"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default CrArrow;
