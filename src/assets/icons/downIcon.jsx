const DownIcon = ({ size = 125, color = "#C7C7C7" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M117.501 0H7.33102C4.16546 0 2.25425 3.50276 3.96739 6.16471L61.4859 95.5396C63.0979 98.0444 66.784 97.9716 68.2959 95.4052L120.947 6.03032C122.518 3.3638 120.596 0 117.501 0Z"
        fill={color}
      />
    </svg>
  );
};

export default DownIcon;
