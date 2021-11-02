import React from 'react'
import SoftwareSkill from './SoftwareSkill';
import { skillSection } from '../portofolio';

const Skills = () => {
    return (
        <div className="container my-5 skillsContainer" id="skills">
            <div className="skills-text-div">
                <h1 className= "skills-heading mb-2">
                    {skillSection.title}{" "}
                </h1>
                <p className="subTitle skills-text-subtitle mb-3">
                    {skillSection.subTitle}
                </p>
            </div>
            <div>
              {skillSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className="subTitle skills-text"
                  >
                    <i className="fas fa-check"></i>
                    &emsp;{skills}
                  </p>
                );
              })}
            </div>
            <SoftwareSkill />
        </div>
    )
}

export default Skills
