import React from 'react'
import Model_3D from '../../Components/Model_3D/Model_3D'
import Navbar from '../../Components/Navbar/Navbar'
import About from '../../Components/About/About'
import Project from '../../Components/Project/Project'
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
          <Model_3D />
        </div>
      </div>
      <div>
        <About />
        <Project/>
      </div>
    </div>
  )
}

export default Home
