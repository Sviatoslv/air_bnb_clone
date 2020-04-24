import React from "react";

export const useInterpolation = (value, interopolation) => {
  let interpolatedValue = React.useRef(
    value.interpolate(interopolation)
  ).current;

  return interpolatedValue;
};
