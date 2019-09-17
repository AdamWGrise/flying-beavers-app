import React from "react";
import './styles.css';
import CheckBox from "../CheckBox";


function ContentPanel(props) {
  let x = props.testLists[props.activeListId];
  console.log("x", x);
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