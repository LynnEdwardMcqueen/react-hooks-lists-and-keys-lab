import React from "react";
import projectId from "./ProjectList"

function ProjectItem({ name, about, technologies, id = 1 }) {

  
  const technoSpans = technologies.map( (technology, index) => { 
    return(<span data-key= {index} key={index}> {technology} </span> )
  })

  return (

  <div className="project-item" data-key = {id} key={id} >
    <h3>{name}</h3>
    <p>{about}</p>
    <div className="technologies">
       {technoSpans} 
    </div>
  </div>
)}

export default ProjectItem;
