import React from 'react'
import { gsap, Power3 } from 'gsap'
import Model_3D from '../../Components/Model_3D/Model_3D'
import Navbar from '../../Components/Navbar/Navbar'
import About from '../../Components/About/About'
import Project from '../../Components/Project/Project'
import { useEffect, useState } from 'react'

import './Home.css'

const Home = () => {
  const [Loader, setLoader] = useState(true)
  let tl = gsap.timeline()
  function animate() {
    tl.to('.h1text .textname', {
      duration: 1,
      opacity: 1,
      y: -40,
      ease: Power3.out,
      stagger: 1.5,
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 5000)
    animate()
  }, [Loader])

  return (
    <div>
      <Navbar />
      <div className="home_containeur">
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div className="text">
          <h1 className="h1text">
            <span className="textname" style={{ color: 'Black' }}>
              Anthony{' '}
            </span>
            <span className="textname" style={{ color: '#66b7ad' }}>
              LABADIE
            </span>
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
  )
}

export default Home
