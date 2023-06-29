/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LogoHorizontal = ({
  style,
  logoHorizontal = "https://generation-sessions.s3.amazonaws.com/257ab4f37ea366bbcf49f1ba14d2ba47/img/logo---horizontal---white---no-padding.svg",
}) => {
  return <img className="logo-horizontal" style={style} alt="Logo horizontal" src={logoHorizontal} />;
};

LogoHorizontal.propTypes = {
  logoHorizontal: PropTypes.string,
};
