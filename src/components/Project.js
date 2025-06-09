import React from "react";
import { useState, useEffect } from "react";

 
  const Project = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
      fetch('https://api.github.com/users/funshito/repos') // points to your own secure backend
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(err => console.error(err));
    }, []);

    return (
      <section className="projects-section" id="projects">
        <h2 className="projects-title">Our Projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                className="project-image"
                src={project.image}
                alt={project.name}
              />
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.language}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Project;