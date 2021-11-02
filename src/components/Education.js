import React from 'react';
import { educationSection } from '../portofolio';
import EducationCard from './EducationCard';

const Education = () => {
    return (
        <div className="education-section educationContainer" id="education">
        <h1 className="education-heading bold">Education</h1>
        <div className="education-card-container">
          {educationSection.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    )
}

export default Education
