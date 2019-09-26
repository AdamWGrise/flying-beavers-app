import React from 'react'
import './styles.css'

function CheckBox (props) {
  return (
    <div className='form-check'>
      <input type='checkbox' className='form-check-input' id={props.id} />
      <label className='form-check-label' htmlFor={props.id}>{props.item}</label>
    </div>
  )
}

export default CheckBox
