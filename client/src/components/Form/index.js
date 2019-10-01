import React from 'react'

// This file exports the Input, TextArea, and FormBtn components
// Added Select, Option

export function Select (props) {
  return (
    <select {...props}>{props.children}</select>
  )
}

export function Option (props) {
  return <option {...props}>{props.children}</option>
}

export function Input (props) {
  return (
    <div className='form-group'>
      <input {...props} />
    </div>
  )
}

export function TextArea (props) {
  return (
    <div className='form-group'>
      <textarea rows='20' {...props} />
    </div>
  )
}

export function FormBtn (props) {
  return (
    <button {...props} >
      {props.children}
    </button>
  )
}
