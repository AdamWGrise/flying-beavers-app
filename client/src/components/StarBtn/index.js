import React from "react";
import "./style.css";

function StarBtn(props) {
  return (
    <span className="star-btn" role="button" tabIndex="0" {...props}>
      {(props.starred ? "*" : "0" )}
    </span>
  );
}

export default StarBtn;
