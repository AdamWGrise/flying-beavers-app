import React from "react";
import './styles.css';

// function ContentPanel({ children }) {
function ContentPanel(props) {
  let x = props.testingLists[props.activeListId];
  return (
    <div id="content-panel">
      <h3>List Title</h3>
      {x.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default ContentPanel;
