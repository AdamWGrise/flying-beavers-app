import React from 'react'
import './styles.css'
import FamilyInfoButton from '../FamilyInfoButton'

function FamilyInfoList (props) {
  return (
    <nav className='nav flex-column'>
      {props.list.map((list, index) => (
        <FamilyInfoButton
          key={index}
          value={list._id}
          name={list.category}
          datatext={list.dataText}
          onClick={props.onClick}
        />
      ))}
    </nav>
  )
}

export default FamilyInfoList
