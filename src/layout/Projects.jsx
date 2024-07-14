import React from "react";
import Title from "../components/Title";
import Card from "../components/Card";
import language from "../language/language.json";
function Projects({ currentLanguage }) {
  const langData = language[currentLanguage];
  return (
    <section className="h-projects">
      <Title title={langData.projects} width={"500px"} url={"/projects"} />
      <div className="cards">
        <Card
          img="src\assets\card.png"
          title={"Front-Running BOT"}
          desc={
            "I built a front running bot that does a sandwich attacks on ethereum network"
          }
        />
        <Card
          img="src\assets\card.png"
          title={"Front-Running BOT"}
          desc={
            "I built a website using React, Mongo DB, Express.js, Express.js"
          }
        />
        <Card
          img="src\assets\card.png"
          title={"Arbitrage Bot"}
          desc={
            "I built an Arbitrage bot that finds arbitrage opportunities using A* algorithm"
          }
        />
      </div>
    </section>
  );
}

export default Projects;
