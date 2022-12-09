import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useParams } from 'react-router';
import ProjectCards from '../../Components/Project/ProjectCards/ProjectCards'

const Portfolio = () => {
        const { id } = useParams();
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <ProjectCards />
        <h1>{id}</h1>
      </div>
    </div>
  )
}

export default Portfolio
