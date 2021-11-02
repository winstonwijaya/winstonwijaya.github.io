import React from 'react'
import { projectSection } from '../portofolio';

export default function Projects()  {
    function openInNewTab(url){
        if (!url) {
            return;
          }
        var win = window.open(url, "_blank");
        win.focus();
    }
    
    return (
        <div className="container my-5 pt-5" id="projects">
            <div className="main" id="projects">
                    <h1 className="projects-heading bold pt-4">{projectSection.title}</h1>
                    <p className= "subTitle project-subtitle bold">
                        {projectSection.subTitle}
                    </p>

                    <div className="projects-container">
                        {projectSection.projects.map((project, i) => {
                        return (
                            <div
                            key={i}
                            className= "project-card project-card-light">
                            {project.image ? (
                                <div className="project-image">
                                <img
                                    src={process.env.PUBLIC_URL + project.image}
                                    alt={project.projectName}
                                    className="card-image"
                                ></img>
                                </div>
                            ) : null}
                            <div className="project-detail">
                                <h5 className= "card-title">
                                    {project.projectName}
                                </h5>
                                <p className="card-subtitle">
                                    {project.projectDesc}
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="btn redirectButton w-50 mt-4 mb-2" onClick={()=>openInNewTab(project.githubUrl)} >Visit Repository</button>
                            </div>
                        </div>
                        );
                    })}
                    </div>
                </div>
            </div>
    )
}