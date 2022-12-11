import React from 'react'
import { NavLink } from 'react-router-dom'
import ImgGithub from '../../assets/Image/github.png'
import ImgLinkedin from '../../assets/Image/linkedin.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="main-container" />
      <nav className="navbar">
        <div className="nav-container">
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
                Portfolio
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
          </ul>

            <ul className="nav-icone">
              <a href="https://github.com/Anthony-LABADIE">
                <img className="img_profil" src={ImgGithub} alt="img_profil" />
              </a>
              <a href="https://www.linkedin.com/in/anthony-labadie/">
                <img
                  className="img_profil"
                  src={ImgLinkedin}
                  alt="img_profil"
                />
              </a>
            </ul>

          <div className="containeur_switch">
            <label className="switch">
              <input type="checkbox" />
              <span></span>
            </label>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
