import * as React from "react";

const TradeIcon = (props) => (
  <svg
    width={props.width || 40}
    height={props.height || 40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 36.667h10c8.333 0 11.667-3.334 11.667-11.667V15c0-8.333-3.334-11.667-11.667-11.667H15C6.667 3.333 3.333 6.667 3.333 15v10c0 8.333 3.334 11.667 11.667 11.667Z"
      stroke="#E18B1F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.217 24.15 16.183 19a1.673 1.673 0 0 1 2.35-.3l3.05 2.4a1.686 1.686 0 0 0 2.35-.283l3.85-4.967"
      stroke="#E18B1F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TradeIcon;
