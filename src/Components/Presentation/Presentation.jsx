import React from 'react'
import { useEffect, useState } from 'react'
import { gsap, Power3 } from 'gsap'
import './Presentation.css'

const Presentation = () => {
      const [Loader, setLoader] = useState(true)
  let tl = gsap.timeline()
  function animate() {
    tl.to('.h1text .textname', {
      duration: 1,
      opacity: 1,
      y: -40,
      ease: Power3.out,
      stagger: 1,
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 5000)
    animate()
  }, [Loader])

  return (
    <div className='presentation_container'>
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
    </div>
  )
}

export default Presentation
