import React from "react";
//  is this needed? import ProjectList from "./ProjectList";

function ProjectItem({name, about, technologies }) { //I used name as they have unique names, but it's giving me a key error? Tried to pass my ID prop too. So it'd be id, name, about ,technologies
  
  // console.log(technologies)
  // console.log(name)
  // console.log(about)


  const projectItemizer = technologies.map((tech) => {
    return <span key = {tech} > {tech} </span> //TECH ID gives me one error as oppossed to name same for TECH.NAME // SO MY LOGIC WAS CORRECT, since the technologies are all different (order + content), or, not EXACTLY the same it works with tech as a key
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {projectItemizer}
      </div>
    </div>
  );
}

export default ProjectItem;
