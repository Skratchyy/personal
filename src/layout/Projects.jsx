import React from "react";
import Title from "../components/Title";
import ProjectCars from "../components/ProjectCard";

function Projects() {
  return (
    <section className="h-projects">
      <Title title={"Projects"} width={"500px"} url={"/projects"} />
      <div className="cards">
      <ProjectCars />
      <ProjectCars />
      <ProjectCars />
      </div>
 
    </section>
  );
}

export default Projects;
