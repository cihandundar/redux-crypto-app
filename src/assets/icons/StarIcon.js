import * as React from "react";

const StarIcon = (props) => (
  <svg
    width={props.width || 40}
    height={props.height || 40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.508 28.336c-.211 0-.446-.047-.633-.14l-7.57-3.774-7.407 4.101c-.539.305-1.218.165-1.64-.28a1.36 1.36 0 0 1-.328-1.079l1.265-8.367-6.21-5.79a1.284 1.284 0 0 1-.352-1.358c.14-.493.539-.844 1.054-.915l8.368-1.406 3.562-7.687c.211-.446.656-.75 1.149-.774a1.31 1.31 0 0 1 1.218.703l3.914 7.524 8.414 1.031c.516.07.915.399 1.079.89a1.323 1.323 0 0 1-.305 1.36l-5.93 6.07 1.617 8.32a1.37 1.37 0 0 1-.257 1.079c-.258.304-.633.492-1.008.492Zm-8.25-5.344c.21 0 .445.047.633.14l7.476 3.727-1.594-8.203a1.28 1.28 0 0 1 .352-1.172l5.86-5.953-8.298-1.031a1.324 1.324 0 0 1-1.007-.703L14.836 2.39l-3.54 7.57c-.187.398-.562.68-.984.75l-8.25 1.36 6.094 5.695c.328.304.469.726.399 1.172l-1.243 8.25 7.313-4.032c.21-.093.422-.14.633-.164Z"
      fill="#E18B1F"
    />
  </svg>
);

export default StarIcon;