import React from 'react'
import './styles.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

function Icons() {
    return (
    <div className='icon-set'>
        <a href="/calendar" className="icon" data-placement="top"><i className="fa fa-3x fa-calendar"></i>
        <span className="tooltiptext">Family Calendars</span>
        </a>
        <a href="lists" className="icon" data-placement="top"><i className="fa fa-3x fa-edit"></i>
        <span className="tooltiptext">Shopping Lists</span>
        </a>
        <a href="family-info" className="icon" data-placement="top"><i className="fa fa-3x fa-address-card"></i>
        <span className="tooltiptext">Family Info</span>
        </a>
    </div>
    )
}

export default Icons
