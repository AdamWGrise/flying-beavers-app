import React from "react";
import './styles.css';

function Button(props) {

  return (
    <>
    <button key={props.key} value={props.value} name={props.name} onClick={props.onClick}>
      {props.name}
    </button>
    </>
  );
}

export default Button;