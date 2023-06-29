/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Favorite242 = ({ color = "white", style }) => {
  return (
    <svg
      className="favorite-24-2"
      style={style}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_0_145)">
        <path
          className="path"
          d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip_path" id="clip0_0_145">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

Favorite242.propTypes = {
  color: PropTypes.string,
};
