import React from 'react'

function DeleteBtn (props) {
  return (
    <span className='delete-btn' {...props} role='button' tabIndex='0'>
      {<i className='fa fa-trash' />} 
      {/* X */}
    </span>
  )
}

export default DeleteBtn
