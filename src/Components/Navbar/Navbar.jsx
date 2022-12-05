import React from 'react'
import { NavLink } from 'react-router-dom'
import ImgProfil from '../../assets/Image/Image1.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="main-container" />
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img className="img_profil" src={ImgProfil} alt="img_profil" />
          </NavLink>
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink to="/" className="nav-links">
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-links">
                A propos de moi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-links">
                Porfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-links">
                Compétences
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-links">
                Contact
              </NavLink>
            </li>
            <div className='containeur_switch'>
            <label className="switch">
              <input type="checkbox" />
              <span></span>
            </label>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
