/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Store24 = ({ color = "black", style }) => {
  return (
    <svg
      className="store-24"
      style={style}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_57_35)">
        <path
          className="path"
          d="M19 6H17C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6H5C3.9 6 3.01 6.9 3.01 8L3 20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6ZM12 3C13.66 3 15 4.34 15 6H9C9 4.34 10.34 3 12 3ZM12 13C9.24 13 7 10.76 7 8H9C9 9.66 10.34 11 12 11C13.66 11 15 9.66 15 8H17C17 10.76 14.76 13 12 13Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip_path" id="clip0_57_35">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

Store24.propTypes = {
  color: PropTypes.string,
};
