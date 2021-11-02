import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experienceSection } from '../portofolio';

export default function Experience() {
    return (
        <div className="container d-flex my-5 pt-5 experienceContainer " id="experience">
            <div className="experience-container" id="workExperience">
                <div>
                    <h1 className="experience-heading bold my-4">Experiences</h1>
                    <div className="experience-cards-div">
                        {experienceSection.experience.map((card, i) => {
                        return (
                            <ExperienceCard
                            key={i}
                            isDark={false}
                            cardInfo={{
                                company: card.company,
                                desc: card.desc,
                                date: card.date,
                                companylogo: card.companylogo,
                                role: card.role,
                                descBullets: card.descBullets
                            }}
                            />
                        );
                        })}
                    <div className="flex-grow-1"></div>
                    </div>
                </div>
            </div>            
            </div>
    )
}