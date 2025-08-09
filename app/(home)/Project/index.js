import React from "react";
import classes from "./Project.module.css";

const Project = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      image: "path/to/project1.jpg",
      link: "https://example.com/project1",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      image: "path/to/project2.jpg",
      link: "https://example.com/project2",
    },
  ];
  return (
    <section className={classes[`project`]}>
      <div className={`container ${classes[`project-container`]}`}>
        <h2>Project</h2>
        <div className={classes[`project-content`]}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className={classes[`project-card`]}>
      <div className={classes[`project-card-image`]}>
        <img src={image} alt={title} />
      </div>
      <div className={classes[`project-card-content`]}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};
