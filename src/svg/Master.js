function Master() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={45}
      height={30}
      viewBox="0 0 45 30"
      fill="none"
    >
      <rect width={45} height="29.4828" fill="url(#masterPattern)" />
      <defs>
        <pattern
          id="masterPattern"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0_436_2177"
            transform="scale(0.0172414 0.0263158)"
          />
        </pattern>
        <image
          id="image0_436_2177"
          width={58}
          height={38}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default Master;
