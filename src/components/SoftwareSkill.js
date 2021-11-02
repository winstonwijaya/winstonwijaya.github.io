import React from 'react'
import { skillSection } from '../portofolio';
import "font-awesome/css/font-awesome.min.css";

const SoftwareSkill = () => {
    return (
        <div className="p-3">
            <ul className="dev-icons">
                {skillSection.softwareSkills.map((skills, i) => {
                    return (
                        <li
                            key={i}
                            className="software-skill-inline"
                            name={skills.skillName}
                        >
                            <i className={skills.fontAwesomeClassname}></i>
                            <p>{skills.skillName}</p>
                        </li>
                    );
                })}
            </ul>            
        </div>
    )
}

export default SoftwareSkill
