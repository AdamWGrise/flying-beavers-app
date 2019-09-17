import React from "react";
import './styles.css';
import Button from "../Button";

function ListClick(props) {
  let activeList = props.testLists[props.activeListId];
  console.log("activeList", activeList);

  return (
    <nav className="nav flex-column">
      {props.testLists.map((list, index) => (
        <Button
          key={index}
          value={index}
          name={list.title}
          onClick={props.handleListClick}
        >
        </Button>
      ))}
    </nav>
  )
}

export default ListClick;