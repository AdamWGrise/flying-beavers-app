import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style.css'

class Nav extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-light fixed-top py-4'>
        <div className='container'>
          <a className='navbar-brand' href='/'>ClanManager</a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/' value='Home'> Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/lists' value='Shopping'>Shopping</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/calendar' value='Calendar'>Calendar</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/family-info' value='Family Info'>Family Info</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/Login' value='Register'>Register/Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
