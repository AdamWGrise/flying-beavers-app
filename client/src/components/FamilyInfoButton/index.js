import React from 'react'

function FamilyInfoButton (props) {
  return (
    <button datatext={props.datatext} value={props.value} name={props.name} onClick={props.onClick} className='btn'>
      {props.name}
    </button>
  )
}

export default FamilyInfoButton
