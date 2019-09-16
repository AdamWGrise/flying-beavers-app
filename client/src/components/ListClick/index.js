import React from "react";
import './styles.css';

function ListClick(props) {

  return (
    <div>
      <button name="nametest" className="list-click" value="0" onClick={props.handleListClick}>
        ListClick 0
    </button>
    <button name="nametest" className="list-click" value="1" onClick={props.handleListClick}>
        ListClick 1
    </button>
    <button name="nametest" className="list-click" value="2" onClick={props.handleListClick}>
        ListClick 2
    </button>
    </div>
  );
}

export default ListClick;