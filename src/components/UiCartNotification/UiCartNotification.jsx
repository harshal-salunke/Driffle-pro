/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const UiCartNotification = ({ style, overlapGroupStyle, groupStyle, rectangleStyle, elementStyle }) => {
  return (
    <div className="ui-cart-notification" style={style}>
      <div className="overlap-group" style={overlapGroupStyle}>
        <div
          className="group"
          style={{
            ...{
              backgroundImage:
                "url(https://generation-sessions.s3.amazonaws.com/257ab4f37ea366bbcf49f1ba14d2ba47/img/store-24.svg)",
            },
            ...groupStyle,
          }}
        />
        <div className="rectangle" style={rectangleStyle} />
        <div className="element" style={elementStyle}>
          2
        </div>
      </div>
    </div>
  );
};
