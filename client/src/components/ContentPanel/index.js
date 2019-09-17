import React from "react";
import './styles.css';
import CheckBox from "../CheckBox";

function ContentPanel(props) {
  // This gets at the active list from the testLists object
  let x = props.testLists[props.activeListId];
  
  return (
    <div id="content-panel">
      <h3>{x.title}</h3>
      {x.items.map((item, index) => (
        <div key={index}><CheckBox id={item} item={item}/></div>
      ))}
    </div>
  );
}

export default ContentPanel;