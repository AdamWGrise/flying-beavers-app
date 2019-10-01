import React from 'react'
import './styles.css'

function ContentBlock (props) {
  return (
    <div className='content-block'>
      <h1>{props.heading}</h1>
      <h1>{props.heading2}</h1>
      <p>{props.paragraph}</p>

    </div>
  )
}

export default ContentBlock
