import * as React from "react";

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export function navigate(name, params) {
  console.log(name);
  if (isReadyRef.current && navigationRef.current)
    navigationRef.current.navigate(name, params);
}
