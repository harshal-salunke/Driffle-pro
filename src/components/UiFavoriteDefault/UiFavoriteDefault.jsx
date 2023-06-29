/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Favorite242 } from "../../icons/Favorite242";
import "./style.css";

export const UiFavoriteDefault = ({ style, favorite242Color = "black" }) => {
  return (
    <div className="ui-favorite-default" style={style}>
      <Favorite242
        color={favorite242Color}
        style={{
          height: "24px",
          left: "8px",
          position: "absolute",
          top: "8px",
          width: "24px",
        }}
      />
    </div>
  );
};

UiFavoriteDefault.propTypes = {
  favorite242Color: PropTypes.string,
};
