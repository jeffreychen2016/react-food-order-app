import React from "react";
import classes from "./Input.module.css";

export default function Input(props) {
  // {...props.input}
  // this ensures other properties (attributes) will be added into this input
  // this make the input field more configurable, like: {type: 'text'}
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
}
