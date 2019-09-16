import React from "react";
import './styles.css';

function ListClick(props) {

  return (
    <div>
      <button name="nametest" className="list-click" value="0" onClick={props.handleListClick}>
        ListClick
    </button>
    <button name="nametest" className="list-click" value="1" onClick={props.handleListClick}>
        ListClick
    </button>
    </div>
  );
}

export default ListClick;