import React from "react";
import ProjectItem from "./ProjectItem";

let projectId

function ProjectList({ projects }) {

  
  const projectItems = projects.map( (project) => {
    {projectId = project.id}
    return(<ProjectItem name = {project.name} about = {project.about} technologies = {project.technologies} key= {project.id} />)
   } )

  return (
    <div id="projects" >
      <h2>My Projects</h2>

      <div id="project-list" >
        {projectItems}
      </div>
    </div>
  );
} 

export default ProjectList;
export {projectId}
