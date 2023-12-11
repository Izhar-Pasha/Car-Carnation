import React from 'react'
import "./NavBar.css"

export const NavBar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo"><span>C</span>ar <span>C</span>arnation</div>
      <ul className='nav-menu'>
      <li>Home</li>
      <li>Explore</li>
      <li>About</li>
      <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  )
}
