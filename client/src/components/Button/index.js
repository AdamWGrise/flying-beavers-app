import React from "react";
import './styles.css';

function Button(props) {

  return (
    <button value={props.value} name={props.name} onClick={props.onClick} className="nav-link" href="#">
      {props.name}
    </button>
  );
}

export default Button;