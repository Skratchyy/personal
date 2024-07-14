import React from "react";
import Title from "../components/Title";
import Card from "../components/Card";
import language from "../language/language.json";
function Skills({ currentLanguage }) {
  const langData = language[currentLanguage];
  return (
    <section className="h-skills">
      <Title title={langData.skills} width={"300px"} />
      <div className="content">
        <div className="patterns">
          <img src="src\assets\skill-pattern.png" alt="" />
        </div>
        <div className="skill">
          <Card
            title={langData.languages}
            desc={"Typescript Solidity Javascript"}
          />
          <Card
            title={langData.tools}
            desc={"Typescript Solidity Javascript"}
          />
          <Card
            title={langData.databases}
            desc={"Typescript Solidity Javascript"}
          />
          <Card
            title={langData.other}
            desc={"Typescript Solidity Javascript"}
          />
          <Card
            title={langData.framework}
            desc={"Typescript Solidity Javascript"}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
