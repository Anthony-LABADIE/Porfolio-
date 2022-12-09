import React from 'react'
import './Project.css'
import { ProjectsData } from '../../tools/Tools'
import ProjectCards from '../../Components/Project/ProjectCards/ProjectCards'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div>
      <div className="containeur_project">
        <h1>Portfolio</h1>

        <div className="fond_project">
          {ProjectsData.map((el) => (
            <Link to={`/Portfolio/${el.id}`} className="nav-project" key={el.id}>
              <ProjectCards
                name={el.name}
                img_desktop={el.img_desktop}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
