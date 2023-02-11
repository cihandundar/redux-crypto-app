import * as React from "react";

const ConnectingIcon = (props) => (
  <svg
    width={props.width || 40}
    height={props.height || 40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.474 24.671 21.43 36.66 36.657 3.34 3.341 19.33l12.133 5.341Zm.354-1.299-9.3-4.095L32.07 7.02 15.829 23.37l-.002.002Zm5.555 10.21-4.61-9.276L33.159 7.81 21.383 33.583Z"
      fill="#E18B1F"
    />
  </svg>
);

export default ConnectingIcon;
