import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar--logo-holder">
          <h1>StickMe</h1>
        </div>
        <ul className="navbar--link">
          <Link to="/">
            <li className="navbar--link-item">Home</li>
          </Link>
          <li className="navbar--link-item">Home</li>
          <li className="navbar--link-item">About</li>
          <li className="navbar--link-item">Blog</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
