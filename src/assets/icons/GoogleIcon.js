import * as React from "react";

const GoogleIcon = (props) => (
  <svg
    width={props.width || 40}
    height={props.height || 40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M20.583 17.083v6.334h9.084a9.083 9.083 0 0 1-9.084 6.666 10.082 10.082 0 0 1-6.727-17.563 10.082 10.082 0 0 1 13.31-.187l4.667-4.666a16.667 16.667 0 1 0-11.25 29c14 0 17.084-13.084 15.75-19.584h-15.75Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default GoogleIcon;
