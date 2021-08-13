import React from "react";

interface WrapperProps {
  className?: string;
  width?: string;
}

const Wrapper: React.FunctionComponent<WrapperProps> = (props) => {
  const classes = ["mx-auto px-5", props.width ?? "max-w-screen-xl"];

  props.className && classes.push(props.className);

  return <div className={classes.join(" ")}>{props.children}</div>;
};

export default Wrapper;
