import React from 'react'
import './Navbar.css'
import LOGO from '../assets/LOGO.webp'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={ LOGO } alt="logo"/>
        </div>
        <ul className="nav-links">
          <li><a href="/emotions">Emotions</a></li>
          <li><a href="/manifesto">Manifesto</a></li>
          <li><a href="/self-awareness-test">Self-awareness test</a></li>
          <li><a href="/work-with-us">Work with us</a></li>
        </ul>
        <button className='nav-button'>Download app</button>
    </div>
  )
}

export default Navbar