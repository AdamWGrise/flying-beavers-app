import React from "react";
import './styles.css';

function ContentBlock(props) {

  return (
    <div class="content-block">
      <h1>{props.heading}</h1>
      <p>{props.paragraph}</p>
    </div>
  );
}

export default ContentBlock;
