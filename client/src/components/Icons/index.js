import React from 'react'
import './styles.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

function Icons() {
  return (
    <div>
      <div className="tooltip" data-placement="top"><i className="fa fa-calendar fa-3x" ></i>
        <span className="tooltiptext">sync the family calenders</span>
      </div>
      <div className="tooltip" data-placement="top"><i className="fa fa-edit fa-3x"></i>
        <span className="tooltiptext">to do list</span>
      </div>
      <div className="tooltip" data-placement="top"><i className="fa fa-address-card fa-3x"></i>
        <span className="tooltiptext">family info</span>
      </div>
    </div>
  )
}

export default Icons
