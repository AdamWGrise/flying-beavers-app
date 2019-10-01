import React from "react";
import "./style.css";

function CheckBtn(props) {
  let x = <i className="fa fa-check gold"></i>;
  let y = <i className="fa fa-check disabled"></i>;
  return (
    <span className="check-btn" role="button" tabIndex="0" {...props}>
      {(props.checked ? x : y )}
    </span>
  );
}

export default CheckBtn;
