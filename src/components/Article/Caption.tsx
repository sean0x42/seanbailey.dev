import React from "react";

const Caption: React.FunctionComponent = (props) => (
  <figcaption className="mx-5 text-center text-grey-500 dark:text-grey-300">
    {props.children}
  </figcaption>
);

export default Caption;
