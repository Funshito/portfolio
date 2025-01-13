import React from "react";

const projects = [
    {
      title: "Project One",
      description: "A description of the first project. It involves web development.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Project Two",
      description: "A description of the second project. It involves mobile app development.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Project Three",
      description: "A description of the third project. It involves UI/UX design.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Project Four",
      description: "A description of the fourth project. It involves backend development.",
      image: "https://via.placeholder.com/300x200",
    },
  ];
  
  const Project = () => {
    return (
      <section className="projects-section">
        <h2 className="projects-title">Our Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Project;