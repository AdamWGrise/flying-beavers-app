import React from 'react'
import './styles.css'

function Jumbotron (props) {
  return (
    <div className='jumbotron'>
      <h1 className='display-5'>{props.pageName}</h1>
    </div>
  )
}

export default Jumbotron
