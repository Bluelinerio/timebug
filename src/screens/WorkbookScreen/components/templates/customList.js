import React from "react";
import FormList from "./FormList";

export default function customList({ stylesheet, config, ...rest }) {
  if (rest.hidden) {
    return null;
  }
  return (
    <FormList
      {...{
        ...rest,
        ...config,
        styles: stylesheet
      }}
    />
  );
}
