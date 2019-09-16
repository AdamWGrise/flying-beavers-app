import React from "react";
import './styles.css';
import { List, ListItem } from "../List";
import Button from "../Button";

function ListClick(props) {
  let activeList = props.testLists[props.activeListId];
  console.log("activeList", activeList);
  // {
  //   props.testLists[props.activeListId].length ? (
  //     <List>
  //       {props.testLists[props.activeListId].map((list, index) => (
  //         <ListItem key={index}>
  //           <Button value={index} name={index.title}>
  //             {index.title}
  //           </Button>
  //         </ListItem>
  //       ))}
  //     </List>
  //   ) : (
  //     <h3>blah</h3>
  //   )
  // }
  // {this.state.books.length ? (
  //   <List>
  //     {this.state.books.map(book => (
  //       <ListItem key={book._id}>
  //         <Link to={"/books/" + book._id}>
  //           <strong>
  //             {book.title} by {book.author}
  //           </strong>
  //         </Link>
  //         <DeleteBtn onClick={() => this.deleteBook(book._id)} />
  //       </ListItem>
  //     ))}
  //   </List>
  // ) : (
  //   <h3>No Results to Display</h3>
  // )}

  return (
    <div>

      {props.testLists.map((list, index) => (
        <Button
          key={index}
          value={index}
          name={list.title}
          onClick={props.handleListClick}
        >
        </Button>
      ))}
    </div>
  )
}


export default ListClick;