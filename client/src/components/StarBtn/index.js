import React from "react";
import "./style.css";

function StarBtn(props) {
  let x = <i className="fa fa-star gold"></i>;
  let y = <i className="fa fa-star disabled"></i>;
  return (
    <span className="star-btn" role="button" tabIndex="0" {...props}>
      {(props.starred ? x : y )}
    </span>
  );
}

export default StarBtn;
