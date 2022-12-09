import React from 'react'
import ImgOrdi from '../../assets/Image/ordi.png'
import './About.css'

const About = () => {
  return (
    <div>
      <div className="containeur_about">
        <h1> A propos de moi</h1>
        <div className="about">
          <img className="img_ordi" src={ImgOrdi} alt="Ordinateur" />
          <div className="text_btn">
            <p>
              Après 6 années en tant que Technicien bureau d’étude en fibre
              optique, j&apos;ai décidé de me reconvertir dans un domaine qui me
              passionne davantage, le développement Web.
              <br />
              <br />
              Mon envie d’apprendre et ma curiosité au travers des nouvelles
              technologies m’ont poussées dans mon choix de reconversion.
              <br />
              <br /> 🚀J’ai donc démarré une formation de développeur Web à la
              Wild Code School et à l’issue, je souhaite poursuivre mon
              apprentissage en alternance afin d’approfondir mes compétences
              dans ce domaine.
            </p>
            <div className="containeur_btn_cv">
              <button className='btn_cv'>Télécharger CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
