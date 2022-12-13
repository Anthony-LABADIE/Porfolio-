import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
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
              <Link to="/" className="nav-links">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#About" className="nav-links">
                A propos de moi
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#Portfolio" className="nav-links">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Compétences
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Contact
              </Link>
            </li>
          </ul>

            <ul className="nav-icone">
              <a href="https://github.com/Anthony-LABADIE">
                <img className="img_reseau" src={ImgGithub} alt="icone" />
              </a>
              <a href="https://www.linkedin.com/in/anthony-labadie/">
                <img
                  className="img_reseau"
                  src={ImgLinkedin}
                  alt="icone"
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
