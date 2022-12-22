import React from 'react'
import Model_3D from '../../Components/Model_3D/Model_3D'
import Navbar from '../../Components/Navbar/Navbar'
import About from '../../Components/About/About'
import Project from '../../Components/Project/Project'
import Presentation from '../../Components/Presentation/Presentation'

import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home_containeur">
        <div className="home">
          <div id="Presentation">
            <Presentation />
          </div>
          <div className="model3D">
            <Model_3D />
          </div>
        </div>
        <div id="About">
          <About />
        </div>
        <div id="Portfolio">
          <Project />
        </div>
      </div>
    </div>
  )
}

export default Home
