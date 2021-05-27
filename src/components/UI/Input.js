import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  // {...props.input}
  // this ensures other properties (attributes) will be added into this input
  // this make the input field more configurable, like: {type: 'text'}
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
