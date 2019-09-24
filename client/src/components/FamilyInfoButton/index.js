import React from 'react'
import './styles.css'

function FamilyInfoButton (props) {
  return (
    <button value={props.value} name={props.name} datatext={props.datatext} onClick={props.onClick} className='btn'>
      {props.name}
    </button>
  )
}

export default FamilyInfoButton
