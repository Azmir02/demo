import React from "react";

const NextArrow = ({ onClick }) => {
  return (
    <div className="next_Arrow hidden lg:block" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="40"
        viewBox="0 0 39 40"
        fill="none"
      >
        <path
          d="M14.5156 32.5496L25.095 21.9703C26.3444 20.7209 26.3444 18.6764 25.095 17.427L14.5156 6.84766"
          stroke="#000"
          stroke-width="1.46034"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default NextArrow;
