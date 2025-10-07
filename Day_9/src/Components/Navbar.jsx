import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink className={({ isActive }) => (isActive ? 'red' : 'active')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'red' : 'active')} to="/about">About</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'red' : 'active')} to="/contact">Contact</NavLink>
      </nav>
    </div>
  )
}

export default Navbar

