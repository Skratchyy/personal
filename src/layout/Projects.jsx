import React from "react";
import Title from "../components/Title";
import ProjectCars from "../components/Card";

function Projects() {
  return (
    <section className="h-projects">
      <Title title={"Projects"} width={"500px"} url={"/projects"} />
      <div className="cards">
      <ProjectCars img={'/card.png'} title={"Front-Running BOT"} desc={"I built a front running bot that does a sandwich attacks on ethereum network"} />
      <ProjectCars img={'/card.png'} title={"Front-Running BOT"} desc={"I built a website using React, Mongo DB, Express.js, Express.js"} />
      <ProjectCars img={'/card.png'} title={"Arbitrage Bot"} desc={"I built an Arbitrage bot that finds arbitrage opportunities using A* algorithm"} />
      </div>
 
    </section>
  );
}

export default Projects;
