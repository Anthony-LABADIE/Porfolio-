import React from 'react'
import './Project.css'
import { ProjectsData } from '../../tools/Tools'
import ProjectCards from '../../Components/Project/ProjectCards/ProjectCards'
import { NavLink } from 'react-router-dom'

const Project = () => {
  console.log(ProjectsData)
  return (
    <div>
      <div className="containeur_project">
        <h1> Porfolio</h1>
        <NavLink exact to="/projet" className="nav-project" >
          <div className="fond_project">
            {ProjectsData.map((el) => (
              <ProjectCards
                key={el.id}
                name={el.name}
                img_desktop={el.img_desktop}
              />
            ))}
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Project
