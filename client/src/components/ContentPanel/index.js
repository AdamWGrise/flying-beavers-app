import React from "react";
import './styles.css';

function ContentPanel(props) {
  let x = props.testLists[props.activeListId];
  console.log("x", x);
  return (
    <div id="content-panel">
      <h3>{x.title}</h3>
      {x.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default ContentPanel;