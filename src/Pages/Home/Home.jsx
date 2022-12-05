import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Personnage from '../../Components/Navbar/spline/Personnage'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home_containeur">
        <div className="text">
          <h1>
            <span style={{ color: 'Black' }}>Anthony </span>
            <span style={{ color: '#66b7ad' }}>LABADIE</span>
          </h1>
          <br />
          <p>
            Web Développeur <br />
            <br />
            anthony.labadie@outlook.fr <br />
            <br />
            06.31.66.76.59
          </p>
        </div>
        <div className="3D">
          <Personnage />
        </div>
      </div>
    </div>
  )
}

export default Home
