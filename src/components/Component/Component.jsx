import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ArrowBack241 } from "../../icons/ArrowBack241";
import { ArrowBack } from "../ArrowBack";
import "./style.css";

export const Component = ({ property1, style }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "group-3648",
  });

  return (
    <div
      className={`component ${state.property1}`}
      style={style}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "group-364" && <ArrowBack />}

      <div className="visit-our-store">Visit our store</div>
      {state.property1 === "group-3649" && (
        <ArrowBack241
          style={{
            height: "20px",
            left: "135px",
            position: "absolute",
            top: "14px",
            width: "20px",
          }}
        />
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "group-3649",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "group-3648",
      };
  }

  return state;
}

Component.propTypes = {
  property1: PropTypes.oneOf(["group-3648", "group-3649"]),
};
