import React from 'react';
import { createRef} from "react";

export default function EducationCard({school}) {
    const imgRef = createRef(); 
    console.log(school)
    const GetDescBullets = ({descBullets}) => {
        return descBullets
          ? descBullets.map((item, i) => (
              <li key={i} className="subTitle">
                {item}
              </li>
            ))
          : null;
    };

    const imgLoc = school.logo; 
    console.log(imgLoc);
    return (
        <div>
            <div className="education-card">
                <div className="education-card-left">
                    <img
                    ref={imgRef}
                    className="education-roundedimg"
                    src={imgLoc}
                    alt={school.schoolName}
                    />
                </div>
                <div className="education-card-right">
                    <h5 className="education-text-school">{school.schoolName}</h5>

                    <div className="education-text-details">
                    <h5 className="education-text-subHeader">
                        {school.subHeader}
                    </h5>
                    <p className= "education-text-duration">
                        {school.duration}
                    </p>
                    <p className="education-text-desc">{school.desc}</p>
                    <div className="education-text-bullets">
                        <ul>
                        <GetDescBullets descBullets={school.descBullets} />
                        </ul>
                    </div>
                    </div>
                </div>
            </div>     
        </div>
    )
}
