import React from "react";
import "./styles.css";

function Jumbotron(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-3">
          <div className="jumbotron">
            <h1 className="display-4">{props.pageName}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
