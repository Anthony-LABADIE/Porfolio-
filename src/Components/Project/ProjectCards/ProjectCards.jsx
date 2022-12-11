import React from 'react'
import './ProjectCards.css'

const ProjectCards = ({ name, img_desktop }) => {
  return (
    <div className="container_cards">
      <img className="img_projectcards" src={img_desktop} alt="img_projects" />
      <h2>{name}</h2>
    </div>
  )
}

export default ProjectCards
