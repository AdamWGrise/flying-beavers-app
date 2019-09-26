import React from 'react'
import './styles.css'
import Button from '../Button'

function ListClick (props) {
  return (
    <nav className='nav flex-column'>
      {props.list.map((list, index) => (
        <Button
          key={index}
          value={list._id}
          name={list.listName}
          onClick={props.onClick}
        />
      ))}
    </nav>
  )
}

export default ListClick
