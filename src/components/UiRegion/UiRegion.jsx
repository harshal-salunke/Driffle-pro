/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Region242 } from "../../icons/Region242";
import "./style.css";

export const UiRegion = ({ state, style, region242Color = "black", indiaEnglishStyle, ellipseStyle, INRStyle }) => {
  return (
    <div className="ui-region" style={style}>
      <div className={`frame ${state}`}>
        <Region242
          color={region242Color}
          style={{
            height: "24px",
            minWidth: "24px",
            position: "relative",
          }}
        />
        <div className="element-spacing" />
        <div className="india-english" style={indiaEnglishStyle}>
          India (English)
        </div>
        <div className="ellipse" style={ellipseStyle} />
        <div className="INR" style={INRStyle}>
          INR
        </div>
      </div>
    </div>
  );
};

UiRegion.propTypes = {
  state: PropTypes.oneOf(["active", "default"]),
  region242Color: PropTypes.string,
};
