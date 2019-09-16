import React from "react";
import './styles.css';

// function ContentPanel({ children }) {
function ContentPanel(props) {

  return (
    <div id="content-panel">
      <h3>List Title</h3>
      {props.testingLists[props.activeListId]}
    </div>
  );
}

export default ContentPanel;
