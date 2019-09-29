import React from 'react'
import './styles.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

function Icons() {
    return (
    <div className='icon-set'>
        <div className="icon" data-placement="top"><i className="fa fa-3x fa-calendar"></i>
        <span className="tooltiptext">Family Calendars</span>
        </div>
        <div className="icon" data-placement="top"><i className="fa fa-3x fa-edit"></i>
        <span className="tooltiptext">Shopping Lists</span>
        </div>
        <div className="icon" data-placement="top"><i className="fa fa-3x fa-address-card"></i>
        <span className="tooltiptext">Family Info</span>
        </div>
    </div>
    )
}

export default Icons
