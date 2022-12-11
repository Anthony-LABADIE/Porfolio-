import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useParams } from 'react-router'
import { ProjectsData } from '../../tools/Tools'
import './Portfolio.css'


const Portfolio = () => {
  const { id } = useParams()
  console.log(ProjectsData[id])
  return (
    <div>
      <div>
        <Navbar />
        <div className="fond_project" />
      </div>
      <h1>{ProjectsData[id].name}</h1>
      <img className='img_project' src={ProjectsData[id].img_desktop} alt="img_site" />
      <p>{ProjectsData[id].description}</p>
    </div>
  )
}

export default Portfolio
