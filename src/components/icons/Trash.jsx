import * as React from "react";
const Trash = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M7 21c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 5 19V6H4V4h5V3h6v1h5v2h-1v13c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9Z"
    />
  </svg>
);
export default Trash;
